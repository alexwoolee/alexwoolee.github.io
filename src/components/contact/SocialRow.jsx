import Copy from "../icons/actions/Copy";

const SocialRow = ({ icon, content }) => {
  const renderIcon = () => {
    if (!icon) return null;
    if (typeof icon === "string") {
      return <img src={icon} alt="social icon" className="popup-social-icon"></img>;
    }
    const Icon = icon;
    return <Icon />
  };
  return (
    <span className="social-row">
      {renderIcon()}
      <p className="social-redirect">{content}</p>
      <Copy />
    </span>
  );
};

export default SocialRow;

