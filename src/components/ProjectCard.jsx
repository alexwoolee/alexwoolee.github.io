import React from 'react'
import { Link } from 'react-router-dom'

const ProjectCard = ({ key, project, onSelect }) => {
  return (
    <div className='proj-card'>
      <Link>
        <img src={project.img} alt="project image" className='proj-img' onClick={() => onSelect(project)}></img>
        {/* authors or references */}
        <div className='proj-txt'>
          <h1 className='proj-title'>{project.title}</h1>
          <p className='proj-authors'>{project.authors}</p>
        </div>
      </Link>
    </div>
  )
}

export default ProjectCard;
