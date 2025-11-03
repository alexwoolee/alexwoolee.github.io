import React from 'react'
import { NavLink } from 'react-router-dom'
import { BrowserRouter, Link, } from 'react-router-dom'

const HomeLink = ({ path, img, title, info }) => {
  return (
    <div>
      <NavLink 
        to={path} 
        className={( {isActive} ) => 
          isActive ? "active-link link" : "link"
        }
      >
        <img src={img} alt={path} className='link-img'></img>
        <div>
          <p className='link-title md:block hidden'>{title}</p>
          <p className='link-info md:block hidden'>{info}</p>
        </div>
      </NavLink> 
    </div>
  )
}

export default HomeLink
