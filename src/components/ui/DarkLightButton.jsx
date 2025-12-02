import Dark from "../icons/dark-light-mode/Dark";
import Light from "../icons/dark-light-mode/Light";
import { useState } from "react";

const DarkLightButton = () => {
  const [darkType, setDarkType] = useState(true);

  return (
    <div onClick={() => setDarkType(!darkType)} className="toggle-btn">
      {darkType === true ? <Dark /> : <Light />}
    </div>
  );
};

export default DarkLightButton;
