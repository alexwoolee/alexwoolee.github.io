import React from 'react'
/* img assets */
import proj1 from "../assets/sirshinu.png"
import { Link } from 'react-router-dom'

const ProjectCard = ({ title, authors }) => {
  return (
    <div className='proj-card'>
      <Link>
        <img src={proj1} alt="" className='proj-img'></img>
        {/* authors or references */}
        <div className='proj-txt'>
          <h1 className='proj-title'>{title}</h1>
          <p className='proj-authors'>{authors}</p>
        </div>
      </Link>
    </div>
  )
}

export default ProjectCard
