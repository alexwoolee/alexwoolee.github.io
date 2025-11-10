import { React, useState } from "react";
import ContactPopup from "./ContactPopup";
import Circle from "../assets/icons/Circle";
import ArrowDown from "../assets/icons/ArrowDown";

const ContactButton = () => {
  const [showPopup, setShowPopup] = useState(false);
  const handleClick = () => {
    console.log("Contact Button: Pressed")
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
