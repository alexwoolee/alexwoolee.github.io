import React from 'react'
import { NavLink } from 'react-router-dom'
import { BrowserRouter, Link, } from 'react-router-dom'

const HomeLink = ({ path, img, title, info }) => {
  return (
    <div>
      <NavLink 
        to={path} 
        className={( {isActive} ) => 
          `link lg:min-w-3xs lg:max-w-3xs ${isActive ? "active-link" : ""}`
        } 
      >
        <img src={img} alt={path} className='link-img'></img>
        <div>
          <p className='link-title lg:block hidden'>{title}</p>
          <p className='link-info lg:block hidden'>{info}</p>
        </div>
      </NavLink> 
    </div>
  )
}

export default HomeLink
