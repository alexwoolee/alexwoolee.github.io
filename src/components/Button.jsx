import { React } from "react";
import { Link } from "react-router-dom";
import ContactPopup from "./ContactPopup";
import Circle from "../assets/icons/Circle";
import ArrowDown from "../assets/icons/ArrowDown";

const Button = ({ path }) => {
  return (
    <>
      <Link to={`/${path}`} className="contact-button-wrapper">
        <span>About Me</span>
      </Link>
    </>
  );
};

export default Button;
