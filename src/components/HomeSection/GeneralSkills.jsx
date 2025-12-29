import styles from './home.module.css';

const AboutGeneralSkills = () => {
  return (
    <div className={styles.progLanguages}>
      {/* programming skills */}
      <p>Software Developer</p>
      <p>Systems Programming</p>
      <p>Machine Learning</p>
      {/* design skills */}
      <p>UX Design</p>
      <p>UI Design</p>
      <p>Prototyping</p>
      {/* architecture skills */}
      <p>Design Architecture</p>
      <p>API Design</p>
      <p>Database Design</p>
      {/* methodology skills */}
      <p>Agile</p>
      <p>Scrum</p>
      <p>DevOps</p>
    </div>
  );
};

export default AboutGeneralSkills;
