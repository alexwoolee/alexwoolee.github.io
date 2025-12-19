import { useState } from "react";
import ContactPopup from "./ContactPopup";
import Circle from "../icons/shapes/Circle";
import ArrowDown from "../icons/shapes/ArrowDown";

const ContactButton = () => {
  const [showPopup, setShowPopup] = useState(false);
  const handleClick = () => {
    setShowPopup(!showPopup);
  };

  return (
    <>
      <button className="contact-button-wrapper" onClick={handleClick}>
        <Circle
          width={16}
          height={16}
          className={"circle"}
          fill={"black"}
        ></Circle>
        <ArrowDown
          width={32}
          height={32}
          className={"arrow-down"}
          fill={"black"}
          stroke={"white"}
        ></ArrowDown>
        <span>Contact</span>
      </button>
      {showPopup && <ContactPopup />}
    </>
  );
};

export default ContactButton;

