import { React } from "react";
import { NavLink, useLocation } from "react-router-dom";
import SearchBar from "./SearchBar";

import "../styles/navbar.css";

import icon from "../assets/sidebar/sirshinu.png";
import HomeIcon from "./icons/HomeIcon";

const NavBar = () => {
  const location = useLocation();
  return (
    <>
      <div className="nav-bar">
        <div className="nav-bar-left nav-section">
          <img
            src={icon}
            className="w-10 border rounded-2xl border-transparent ml-4 cursor-pointer"
          ></img>
        </div>

        <div className="nav-bar-center nav-section">
          <NavLink
            to="/home"
            className={({ isActive }) =>
              isActive || location.pathname == "/"
                ? "icon-active-wrapper"
                : "icon-wrapper"
            }
          >
            <HomeIcon className="home-icon" alt={"home icoin"}></HomeIcon>
          </NavLink>

          <SearchBar />
        </div>

        <div className="nav-bar-right nav-section"></div>
      </div>
    </>
  );
};

export default NavBar;
