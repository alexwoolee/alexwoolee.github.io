import { Rows3, Grid2x2 } from "lucide-react";
import styles from './projects.module.css';

const GridRowToggle = () => {
  return (
    <div className={styles.gridRowToggle}>
      <div className={styles.gridToggle}>
        <Rows3 />
      </div>
      <div className={styles.rowToggle}>
        <Grid2x2 />
      </div>
    </div>
  );
};

export default GridRowToggle;