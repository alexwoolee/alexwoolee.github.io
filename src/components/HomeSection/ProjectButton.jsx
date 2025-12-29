import { Link } from "react-router-dom";
import { Circle, ArrowDown } from "lucide-react";
import styles from "./home.module.css";

const ProjectButton = ({ path }) => {
  return (
    <Link className={styles.projectButtonWrapper} to={`/${path}`}>
      <div className={styles.iconCtn}>
        <Circle
          width={16}
          height={16}
          className={styles.iconSmallCircle}
          fill={"black"}
        ></Circle>
        <ArrowDown width={32} height={32} className={styles.iconArrowDown}></ArrowDown>
      </div>
      <span className={styles.buttonText}>My Projects</span>
    </Link>
  );
};

export default ProjectButton;
