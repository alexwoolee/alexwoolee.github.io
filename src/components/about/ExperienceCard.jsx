const ExperienceCard = ({ img, title, txt, period, company }) => {
  return (
    <div>
      <div className="exp">
        <div className="exp-left">
          <img src={img} alt={`${company} logo`} className="exp-img"></img>
          <h2 className="exp-title">{title}</h2>
        </div>
        <div className="exp-right">
          <h1 className="company">{company}</h1>
          <h3 className="exp-period">{period}</h3>
        </div>
      </div>
      <div className="divider"></div>
    </div>
  );
};

export default ExperienceCard;
