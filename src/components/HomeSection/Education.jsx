import SFU from "../../assets/education/SFU.png";
import styles from './home.module.css'; // Make sure this path is correct

const Education = () => {
  return (
    <>
      <div id={styles.uniSection}>
        <img id={styles.uniLogo} src={SFU} className="w-48" alt="SFU Logo"></img>
        <h1 id={styles.uni} className="title-xl">
          Simon Fraser University
        </h1>
        <h2 id={styles.uniLocation} className="title-md">
          Burnaby, BC (09/03/2023 - Ongoing)
        </h2>
        <h2 id={styles.degree} className="title-md">
          Computing Science
        </h2>
      </div>

      {/* Specialized Courses */}
      <h1 className={`${styles.eduSectionTitle} title-xl`}>Specialized Courses</h1>

      <div className={styles.courseCategory}>
        <h3 className={`${styles.courseCategoryTitle} title-md`}>Computer Systems</h3>
        <ul>
          <li className={styles.courseItem}>CMPT201 - Computer Systems</li>
          <li className={styles.courseItem}>
            CMPT295 - Introduction to Computer Systems
          </li>
        </ul>
      </div>

      <div className={styles.courseCategory}>
        <h3 className={`${styles.courseCategoryTitle} title-md`}>Machine Learning</h3>
        <ul>
          <li className={styles.courseItem}>
            CMPT310 - Artificial Intelligence Survey
          </li>
        </ul>
      </div>

      <div className={styles.courseCategory}>
        <h3 className={`${styles.courseCategoryTitle} title-md`}>Software Engineering</h3>
        <ul>
          <li className={styles.courseItem}>CMPT276 - Software Engineering</li>
          <li className={styles.courseItem}>CMPT354 - Database Systems I</li>
        </ul>
      </div>

      <div className={styles.courseCategory}>
        <h3 className={`${styles.courseCategoryTitle} title-md`}>
          Data Structures & Algorithms
        </h3>
        <ul>
          <li className={styles.courseItem}>
            CMPT225 - Data Structures and Programming
          </li>
          <li className={styles.courseItem}>
            CMPT307 - Data Structures and Algorithms
          </li>
          <li className={styles.courseItem}>
            CMPT405 - Design and Analysis of Computing Algorithms
          </li>
        </ul>
      </div>

      <div className={styles.courseCategory}>
        <h3 className={`${styles.courseCategoryTitle} title-md`}>UI/UX Design</h3>
        <ul>
          <li className={styles.courseItem}>CMPT263 - Intro to UI/UX Design</li>
        </ul>
      </div>
    </>
  );
};

export default Education;