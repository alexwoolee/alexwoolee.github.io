import ProjInfoLinks from "./ProjInfoLinks";
import styles from './projects.module.css';

const ProjectInfo = ({ project }) => {
  return (
    <div className={styles.projInfoContainer}>
      <div className={`${styles.projColumnContent} scrollable-content`}>
        <p id={styles.projAuthors}>{project.authors}</p>
        <img
          src={project.img}
          alt="project info image"
          className={styles.projInfoImg}
        ></img>
        <h1 id={styles.projLgTitle}>{project.title}</h1>
        <p className={styles.projInfoTxt}>{project.txt}</p>
      </div>
      <ProjInfoLinks project={project} />
    </div>
  );
};

export default ProjectInfo;