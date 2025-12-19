import { data } from "react-router-dom";
import "../../styles/UI.css";
import { useState, useEffect } from "react";
import RainShower from "../icons/weather/RainShower";
import RainWind from "../icons/weather/RainWind";
import CloudSun from "../icons/weather/CloudSun";
import Snow from "../icons/weather/Snow";
import Cloud from "../icons/weather/Cloud";
import CloudThunder from "../icons/weather/CloudThunder";
import RainFall from "../icons/weather/RainFall";
import RainGif from "../../assets/gifs/rain.gif";

const WeatherTime = () => {
  const [info, setInfo] = useState(null);
  const [dayNightStatus, setDayNightStatus] = useState("");
  const [rainStatus, setRainStatus] = useState("");
  const url =
    "https://api.open-meteo.com/v1/forecast?latitude=49.2827&longitude=-123.1207&current=temperature_2m,rain,snowfall,is_day&timezone=America%2FLos_Angeles";
  useEffect(() => {
    const getWeather = async () => {
      try {
        const response = await fetch(url);
        if (response.ok === true) {
          console.log("Response Success!");
        }
        console.log("Response Object: ", response);

        const data = await response.json();
        console.log("Final Data: ", data);

        setInfo(data);
      } catch (error) {
        console.log("Error: ", error);
      }
    };

    const getRainStatus = async () => {
      const rainStatus = data.current.rain;
      if (rainStatus > 0.1 && rainStatus < 2.5) {
        setRainStatus("Light Rain");
      } else if (rainStatus < 7.6) {
        setRainStatus("Moderate Rain");
      } else {
        setRainStatus("Heavy Rain");
      }
    };
    const getDayNightStatus = async () => {
      const status = info.current.is_day;
      if (status === 1) {
        setDayNightStatus("day");
      } else {
        setDayNightStatus("night");
      }
    };

    // Call it
    getWeather();
    getRainStatus();
    getDayNightStatus();
  }, []); // <--- The empty array [] means "Only run this ONCE when the page loads"
  // <--- If not empty means "Run ONCE. Only run more if info changes"

  if (!info) {
    return (
      <div className="weather-time-ctn">
        <p>Loading...</p>
      </div>
    );  
  }

  const dateObj = new Date(info.current.time);
  const dayName = dateObj.toLocaleDateString("en-US", { weekday: "long" });

  return (
    <div className="weather-time-ctn">
      <div>
        <div className="weather-date">
          Vancouver<br/>
          {info.current.time.slice(5, 10).replace("-", ".")} ({dayName.slice(0,3).toUpperCase()})
        </div>
        <div>{info.current.temperature_2m}°C</div>
        <div>{dayNightStatus === "day" ? <CloudSun /> : <CloudSun />}</div>
      </div>
      <div className="weather-img-mask">
        <div className="weather-icon">{rainStatus === "Light Rain" ? <RainShower /> : <RainFall />}</div>
        <img src={RainGif} alt="weather"/>
      </div>
    </div>
  );
};

export default WeatherTime;
