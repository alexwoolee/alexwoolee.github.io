import { useState } from "react";
import Snowflake from "../icons/weather/Snowflake";
import Rain from "../icons/weather/Rain";
import DarkLightButton from "../ui/DarkLightButton";
import VolumeLow from "../icons/music/VolumeLow";
import VolumeMid from "../icons/music/VolumeMid";
import VolumeHigh from "../icons/music/VolumeHigh";

import Snow from "../effects/Snow";
import Raining from "../effects/Rain";

const Toggles = () => {
  const [activeType, setActiveType] = useState("snow");

  return (
    <>
      <div className="toggles">
        <button
          className={`toggle-btn ${activeType === "volume" ? "active-btn" : ""}`}
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
      { activeType === "snow" && <Snow />}
      { activeType === "rain" && <Raining />}
    </>
  );
};

export default Toggles;
