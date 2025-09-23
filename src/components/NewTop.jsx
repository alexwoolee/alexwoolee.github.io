import React from 'react'
/* img assets */
import icon from "../assets/sirshinu.png"

import home_filled from "../assets/home_filled.png"
import home_empty from "../assets/home_empty.png"

const NewTop = () => {
  return (
    <>
      <div id="bar">
        <img src={icon} className='w-12 border rounded-2xl border-transparent ml-4 cursor-pointer'></img>
        <button id="contact-btn">Contact Me!</button>
        <div id="icon-wrapper">
          <img src={home_empty} alt="home icon" id="home-icon"></img>
        </div>
      </div>
    </>
  )
}

export default NewTop
