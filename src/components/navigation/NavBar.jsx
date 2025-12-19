import { NavLink, useLocation } from "react-router-dom";

import SearchBar from "./SearchBar";
import ContactButton from "../contact/ContactButton";
import HomeIcon from "../icons/navigation/HomeIcon";

import icon from "../../assets/sidebar/sirshinu.png";

import "../../styles/navbar.css";

const NavBar = () => {
  const location = useLocation();
  return (
    <div className="nav-bar">
      <div className="nav-bar-left nav-section">
        <img
          src={icon}
          alt="Profile icon"
          className="w-10 border rounded-2xl border-transparent ml-4 cursor-pointer"
        ></img>
      </div>

      <div className="nav-bar-center nav-section">
        <NavLink to="/home" className="icon-wrapper">
          <HomeIcon
            className="home-icon"
            stroke={"lightgray"}
            fill={
              location.pathname === "/" || location.pathname === "/home"
                ? "lightgray"
                : "none"
            }
            alt={"home icon"}
            width={24}
            height={24}
          />
        </NavLink>

        <SearchBar />
      </div>

      <div className="nav-bar-right nav-section mr-4">
        <ContactButton />
      </div>
    </div>
  );
};

export default NavBar;
