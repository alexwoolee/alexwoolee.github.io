import { Link } from "react-router-dom";

const Button = ({ path }) => {
  return (
    <Link to={`/${path}`} className="btn-border-reveal">
      <span>About Me</span>
    </Link>
  );
};

export default Button;

