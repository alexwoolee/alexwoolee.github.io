import React from 'react'
import { NavLink, useLocation } from 'react-router-dom'
import { useState } from 'react'
/* img assets */
import icon from "../assets/sidebar/sirshinu.png"

import home_filled from "../assets/icons/home_filled.png"
import home_empty from "../assets/icons/home_empty.png"

const NavBar = () => {
  const location = useLocation();
  return (
    <>
      <div id="bar">
        <img src={icon} className='w-12 border rounded-2xl border-transparent ml-4 cursor-pointer'></img>
        <button id="contact-btn">Redesigning... (09/21/2025 - Ongoing)</button>
        <NavLink 
          to="/home"
          className={ ({ isActive }) => 
            isActive || location.pathname == "/"
              ? "icon-active-wrapper" 
              : "icon-wrapper"
          }
        >
          <img src={home_empty} alt="home icon" id="home-icon"></img> 
        </NavLink>
      </div>
    </>
  )
}

export default NavBar;
