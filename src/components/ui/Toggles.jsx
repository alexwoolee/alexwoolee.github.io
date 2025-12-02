import { useState } from "react";
import Snowflake from "../icons/Snowflake";
import Rain from "../icons/Rain";
import DarkLightButton from "../ui/DarkLightButton";
import VolumeLow from "../icons/music/VolumeLow";
import VolumeMid from "../icons/music/VolumeMid";
import VolumeHigh from "../icons/music/VolumeHigh";
import "../../styles/toggles.css";

const Toggles = () => {
  const [activeType, setActiveType] = useState("snow");

  return (
    <div className="toggles">
      <button
        className={`toggle-btn ${activeType === "rain" ? "active-btn" : ""}`}
        onClick={() => setActiveType("volume")}
      >
        <VolumeMid />
      </button>
      
      <button
        className={`toggle-btn ${activeType === "snow" ? "active-btn" : ""}`}
        onClick={() => setActiveType("snow")}
      >
        <Snowflake /> {/* Icon just sits here looking pretty */}
      </button>

      <button
        className={`toggle-btn ${activeType === "rain" ? "active-btn" : ""}`}
        onClick={() => setActiveType("rain")}
      >
        <Rain />
      </button>

      <DarkLightButton />
    </div>
  );
};

export default Toggles;
