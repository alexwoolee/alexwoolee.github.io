import FIGMA from "../../assets/icons/figma-logo.svg";
import styles from './projects.module.css';

const ProjInfoLinks = ({ project }) => {
  return (
      <div className={styles.githubLinks}>
        {/* github repo */}
        <div className={styles.githubLink}>
          <a href={project.github}>
            <img
              src="https://raw.githubusercontent.com/CLorant/readme-social-icons/main/large/light/github.svg"
              alt="github icon"
            />
          </a>
        </div>
        {/* figma */}
        <div className={styles.githubLink}>
          <a href={project.figma}>
            <img src={FIGMA} alt="figma icon" />
          </a>
        </div>
        {/* live demo */}
        <div className={styles.githubLink}>
          <a href={project.live}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <g fill="none" fillRule="evenodd">
                <path d="M18 14v5a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8c0-1.1.9-2 2-2h5M15 3h6v6M10 14L20.2 3.8" />
              </g>
            </svg>
          </a>
        </div>
      </div>
  );
};

export default ProjInfoLinks;