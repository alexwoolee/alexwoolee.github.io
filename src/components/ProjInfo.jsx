import React from "react";
import ProjInfoLinks from "./ProjInfoLinks";
import "../styles/projects.css";

const ProjInfo = ({ project }) => {
  return (
    <>
      <div className="proj-info-container">
        <div className="proj-column-content">
          <p id="proj-authors">{project.authors}</p>
          <img
            src={project.img}
            alt="project info image"
            className="proj-info-img"
          ></img>
          <h1 id="proj-lg-title">{project.title}</h1>
          <p className="proj-info-txt">{project.txt}</p>
        </div>
        <ProjInfoLinks project={project} />
      </div>
    </>
  );
};

export default ProjInfo;
