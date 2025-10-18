import React from 'react'
/* img assets */
import proj1 from "../assets/sidebar/sirshinu.png"
import { Link } from 'react-router-dom'

const ProjectCard = ({ key, project, onSelect }) => {
  return (
    <div className='proj-card'>
      <Link>
        <img src={proj1} alt="project image" className='proj-img' onClick={() => onSelect(project)}></img>
        {/* authors or references */}
        <div className='proj-txt'>
          <h1 className='proj-title'>{project.title}</h1>
          <p className='proj-authors'>{project.authors}</p>
        </div>
      </Link>
    </div>
  )
}

export default ProjectCard
