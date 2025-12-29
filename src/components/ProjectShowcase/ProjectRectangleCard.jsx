import { Link } from 'react-router-dom'
import styles from './projects.module.css';

const ProjectRectangleCard = ({ project, onSelect }) => {
  return (
    <div className={styles.projCard} onClick={() => onSelect(project)}>
      <Link>
        <img src={project.img} alt={`${project.title} project image`} className={styles.projImg}></img>
        {/* authors or references */}
        <div className={styles.projTxt}>
          <h1 className={styles.projTitle}>{project.title}</h1>
          <p className={styles.projAuthors}>{project.txt}</p>
        </div>
      </Link>
    </div>
  )
}

export default ProjectRectangleCard;