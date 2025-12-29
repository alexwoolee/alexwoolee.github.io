import styles from "./home.module.css";

const ExperienceCard = ({ img, title, period, company }) => {
  return (
    <div>
      <div className={styles.exp}>
        <div className={styles.expLeft}>
          <img
            src={img}
            alt={`${company} logo`}
            className={styles.expImg}
          ></img>
          <h2 className={`${styles.expTitle} title-lg`}>{title}</h2>
        </div>
        <div className={styles.expRight}>
          <h1 className={`${styles.company} title-lg`}>{company}</h1>
          <h3 className={styles.expPeriod}>{period}</h3>
        </div>
      </div>
      <div className={styles.divider}></div>
    </div>
  );
};

export default ExperienceCard;
