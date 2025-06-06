import { useState } from "react";

const Project = () => {
  return (
    <div className="project-section" id="project">
      <h1 id="project-title">Projects *Create menu tabs that change project contents by type i.e. game, apps, extensions, machine learning*</h1>

      <div className="project-links">
        <div className="repo"><a href="https://github.com/octocat/Hello-World" target="_blank">Project: Zeus</a></div>
        <div className="repo"><a href="https://github.com/octocat/Hello-World" target="_blank">Project: Hades</a></div>
        <div className="repo"><a href="https://github.com/octocat/Hello-World" target="_blank">Project: Poseidon</a></div>
        <div className="repo"><a href="https://github.com/octocat/Hello-World" target="_blank">Project: Hermes</a></div>
      </div>

    </div> 
  );
}  


export default Project; 