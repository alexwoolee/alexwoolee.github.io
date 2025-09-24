import React from 'react'
import { NavLink } from 'react-router-dom'
import { useState } from 'react'
/* img assets */
import icon from "../assets/sirshinu.png"

import home_filled from "../assets/home_filled.png"
import home_empty from "../assets/home_empty.png"

const NewTop = () => {
  return (
    <>
      <div id="bar">
        <img src={icon} className='w-12 border rounded-2xl border-transparent ml-4 cursor-pointer'></img>
        <button id="contact-btn">Redesigning... (09/21/2025 - Ongoing)</button>
        <NavLink 
          to="/home"
          className={ ({ isActive }) => 
            isActive ? "icon-active-wrapper" : "icon-wrapper"
          }
        >
          <img src={home_empty} alt="home icon" id="home-icon"></img> 
        </NavLink>
      </div>
    </>
  )
}

export default NewTop
