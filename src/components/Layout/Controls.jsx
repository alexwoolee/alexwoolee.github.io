import { useState } from "react";
import DarkLightButton from "../ui/DarkLightButton.jsx";
import { Volume, Volume1, Volume2, Snowflake, Umbrella } from 'lucide-react';

import Snow from "../ui/Snow";
import Raining from "../ui/Rain";
/* Styles */
import styles from './layout.module.css';

const Controls = () => {
  const [activeType, setActiveType] = useState("snow");

  return (
    <>
      <div className={styles.toggles}>
        <button
          className={`${styles.toggleBtn} ${activeType === "volume" ? styles.activeBtn : ""}`}
          onClick={() => setActiveType("volume")}
        >
          <Volume1 />
        </button>

        <button
          className={`${styles.toggleBtn} ${activeType === "snow" ? styles.activeBtn : ""}`}
          onClick={() => setActiveType("snow")}
        >
          <Snowflake /> {/* Icon just sits here looking pretty */}
        </button>

        <button
          className={`${styles.toggleBtn} ${activeType === "rain" ? styles.activeBtn : ""}`}
          onClick={() => setActiveType("rain")}
        >
          <Umbrella />
        </button>

        <DarkLightButton />
      </div>
      { activeType === "snow" && <Snow />}
      { activeType === "rain" && <Raining />}
    </>
  );
};

export default Controls;