import Dark from "../icons/dark-light-mode/Dark";
import Light from "../icons/dark-light-mode/Light";
import { useState } from "react";

const DarkLightButton = () => {
  const [darkType, setDarkType] = useState(true);

  return (
    <div onClick={() => setDarkType(!darkType)} className={`${darkType === true ? `bg-blue-800` : `bg-orange-500`} toggle-btn`}>
      {darkType === true ? <Dark /> : <Light />}
    </div>
  );
};

export default DarkLightButton;
