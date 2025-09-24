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
          <p className='link-title'>{title}</p>
          <p className='link-info'>{info}</p>
        </div>
      </NavLink> 
    </div>
  )
}

export default HomeLink
