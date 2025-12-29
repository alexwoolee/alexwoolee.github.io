import { useState } from "react";
import ContactPopup from "./ContactPopup";
// Importing icons from lucide-react
import { Circle } from "lucide-react";
import { ArrowDown } from "lucide-react";
import styles from './UI.module.css';

const ContactButton = () => {
  const [showPopup, setShowPopup] = useState(false);
  const handleClick = () => {
    setShowPopup(!showPopup);
  };

  return (
    <>
      <button className={styles.contactButtonWrapper} onClick={handleClick}>
        <Circle
          width={16}
          height={16}
          className={styles.circle}
          fill={"black"}
        ></Circle>
        <ArrowDown
          width={32}
          height={32}
          className={styles.arrowDown}
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