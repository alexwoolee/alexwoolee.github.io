import SFU from "../../assets/education/SFU.png";
import styles from './home.module.css';

const Education = () => {
  // Define courses data to make the JSX cleaner and easier to map in a grid
  const courseCategories = [
    {
      title: "Computer Systems",
      courses: ["CMPT201 - Computer Systems", "CMPT295 - Intro to Computer Systems"]
    },
    {
      title: "Data Structures & Algos",
      courses: ["CMPT225 - Data Structures", "CMPT307 - Data Structures & Algos"]
    },
    {
      title: "Software Engineering",
      courses: ["CMPT276 - Software Engineering", "CMPT354 - Database Systems I"]
    },
    {
      title: "Machine Learning",
      courses: ["CMPT310 - Artificial Intelligence Survey"]
    },
    {
      title: "UI/UX Design",
      courses: ["CMPT263 - Intro to UI/UX Design"]
    }
  ];

  return (
    <div className={styles.eduCompactContainer}>
      {/* 1. Header: Logo + Info side-by-side */}
      <div className={styles.uniHeader}>
        <img src={SFU} className={styles.uniLogoCompact} alt="SFU Logo" />
        <div className={styles.uniInfo}>
          <h1 className="title-md" style={{ margin: 0, fontWeight: 600 }}>Simon Fraser University</h1>
          <p className={styles.uniMeta}>BSc. Computing Science</p>
          <p className={styles.uniMeta}>Burnaby, BC • 09/2023 - Ongoing</p>
        </div>
      </div>

      <hr className={styles.compactDivider} />

      {/* 2. Courses: 2-Column Grid */}
      <h3 className={styles.compactSectionTitle}>Specialized Coursework</h3>
      
      <div className={styles.courseGrid}>
        {courseCategories.map((cat, index) => (
          <div key={index} className={styles.gridItem}>
            <h4 className={styles.gridTitle}>{cat.title}</h4>
            <ul className={styles.compactList}>
              {cat.courses.map((course, i) => (
                <li key={i}>{course}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Education;