import { Link } from 'react-router-dom'

const ProjectCard = ({ project, onSelect }) => {
  return (
    <div className='proj-card' onClick={() => onSelect(project)}>
      <Link>
        <img src={project.img} alt={`${project.title} project image`} className='proj-img'></img>
        {/* authors or references */}
        <div className='proj-txt'>
          <h1 className='proj-title'>{project.title}</h1>
          <p className='proj-authors'>{project.txt}</p>
        </div>
      </Link>
    </div>
  )
}

export default ProjectCard;

