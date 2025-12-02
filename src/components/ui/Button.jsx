import { Link } from "react-router-dom";

const Button = ({ path }) => {
  return (
    <Link to={`/${path}`} className="contact-button-wrapper">
      <span>About Me</span>
    </Link>
  );
};

export default Button;

