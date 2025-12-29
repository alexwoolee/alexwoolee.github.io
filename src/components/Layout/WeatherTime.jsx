import { useState, useEffect } from "react";
// Importing icons from lucide-react
import { CloudRain, CloudHail, LoaderPinwheel } from 'lucide-react';
// Importing weather gif
import RainGif from "../../assets/gifs/rain.gif";
/* Styles */
import styles from './layout.module.css';

const WeatherTime = () => {
  const getTimeString = () => {
    const now = new Date();
    return `${String(now.getHours()).padStart(2, "0")}:${String(
      now.getMinutes()
    ).padStart(2, "0")}:${String(now.getSeconds()).padStart(2, "0")}`;
  };

  const [info, setInfo] = useState(null);
  const [dayNightStatus, setDayNightStatus] = useState("");
  const [rainStatus, setRainStatus] = useState("");
  const [currentTime, setCurrentTime] = useState(getTimeString());

  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date();
      setCurrentTime(
        `${String(now.getHours()).padStart(2, "0")}:${String(
          now.getMinutes()
        ).padStart(2, "0")}:${String(now.getSeconds()).padStart(2, "0")}`
      );
    }, 1000);
    return () => {
      clearInterval(interval);
    };
  }, [currentTime]);

  const url =
    "https://api.open-meteo.com/v1/forecast?latitude=49.2827&longitude=-123.1207&current=temperature_2m,rain,snowfall,is_day&timezone=America%2FLos_Angeles";
  useEffect(() => {
    const getWeather = async () => {
      try {
        const response = await fetch(url);
        if (response.ok === true) {
          // console.log("Response Success!");
        }
        // console.log("Response Object: ", response);

        const data = await response.json();
        // console.log("Final Data: ", data);

        setInfo(data);

        const rainStatus = data.current.rain;
        if (rainStatus === 0) {
          setRainStatus("No Rain");
        } else if (rainStatus > 0.1 && rainStatus < 2.5) {
          setRainStatus("Light Rain");
        } else if (rainStatus < 7.6) {
          setRainStatus("Moderate Rain");
        } else {
          setRainStatus("Heavy Rain");
        }

        const status = data.current.is_day;
        if (status === 1) {
          setDayNightStatus("day");
        } else {
          setDayNightStatus("night");
        }
      } catch (error) {
        console.log("Error: ", error);
      }
    };
    // Call it
    getWeather();
  }, []); // <--- The empty array [] means "Only run this ONCE when the page loads"
  // <--- If not empty means "Run ONCE. Only run more if info changes"

  if (!info) {
    return (
      <div className={`${styles.weatherTimeCtn} ${styles.weatherLoading}`}>
        <LoaderPinwheel />
      </div>
    );
  }

  const dateObj = new Date(info.current.time);
  const dayName = dateObj.toLocaleDateString("en-US", { weekday: "long" });

  return (
    <div className={styles.weatherTimeCtn}>
      <div>
        <div className={styles.weatherDate}>
          Vancouver
          <br />
          <div className="flex flex-row gap-2">
            <p>{dayName.slice(0, 3)}</p>
            <p>{info.current.time.slice(5, 10).replace("-", ".")}</p>
            {/* {dayNightStatus === "day" ? <CloudSun /> : <Moon w={18} h={18} />} */}
          </div>
        </div>
        <div className="flex gap-1 items-center justify-start">
          {currentTime}
        </div>
      </div>
      <div className={styles.weatherImgMask}>
        <div className={styles.weatherIcon}>
          <div>
            {rainStatus === "Light Rain" ? <CloudRain /> : <CloudHail />}
          </div>
          <p>{info.current.temperature_2m}°C</p>
        </div>
        <img src={RainGif} alt="weather" />
      </div>
    </div>
  );
};

export default WeatherTime;