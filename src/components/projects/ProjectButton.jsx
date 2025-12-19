import { Link } from "react-router-dom";
import Circle from "../icons/shapes/Circle";
import ArrowDown from "../icons/shapes/ArrowDown";

const ProjectButton = ({ path }) => {
  return (
    <Link className="project-button-wrapper" to={`/${path}`}>
      <Circle
        width={16}
        height={16}
        className={"circle"}
        fill={"black"}
      ></Circle>
      <ArrowDown
        width={32}
        height={32}
        className={"arrow-down"}
        fill={"black"}
        stroke={"white"}
      ></ArrowDown>
      <span>My Projects</span>
    </Link>
  );
};

export default ProjectButton;

