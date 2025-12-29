import { NavLink } from "react-router-dom";
import styles from './layout.module.css';

const HomeLink = ({ path, img, title, info }) => {
  return (
    <div>
      <NavLink
        to={path}
        className={({ isActive }) => `${styles.link} ${isActive ? styles.activeLink : ""}`}
      >
        <img src={img} alt={path} className={styles.linkImg}></img>
        <div>
          <p className={`${styles.linkTitle} title-sm lg:block hidden`}>{title}</p>
        </div>
      </NavLink>
    </div>
  );
};

export default HomeLink;