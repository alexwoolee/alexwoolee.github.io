import { useState } from "react"
import zeus from "../assets/Zeus.png"
import poseidon from "../assets/Poseidon.png"
import hades from "../assets/Hades.png"
import mario from "../assets/Mario.png"
import luigi from "../assets/Luigi.png"
import peach from "../assets/Peach.png"
import search from "../assets/search.png"


const Project = () => {   
  const [projectType, setProjectType] = useState("apps");
  let sectionContent;
  if (projectType === "apps") {
    sectionContent = (
      <div data-aos="fade-up">
        <div className="project-links">
          <div className="repo">
            <img src={zeus} alt="zeus" className="project-image"></img>
            <a href="https://github.com/octocat/Hello-World" target="_blank">Project: Zeus</a>
            <div className="repo-links">
              <img src={search} alt="search icon" className="project-icons"></img>
              <img src="https://raw.githubusercontent.com/CLorant/readme-social-icons/main/large/colored/github.svg" alt="github icon"></img>          
            </div>
          </div>
          <div className="repo">
            <img src={poseidon} alt="zeus" className="project-image"></img>
            <a href="https://github.com/octocat/Hello-World" target="_blank">Project: Poseidon</a>
            <div className="repo-links">
              <img src={search} alt="search icon" className="project-icons"></img>
              <img src="https://raw.githubusercontent.com/CLorant/readme-social-icons/main/large/colored/github.svg" alt="github icon"></img>          
            </div>
          </div>
          <div className="repo">
            <img src={hades} alt="zeus" className="project-image"></img>
            <a href="https://github.com/octocat/Hello-World" target="_blank">Project: Hades</a>
            <div className="repo-links">
              <img src={search} alt="search icon" className="project-icons"></img>
              <img src="https://raw.githubusercontent.com/CLorant/readme-social-icons/main/large/colored/github.svg" alt="github icon"></img>          
            </div>
          </div>
        </div>
      </div>
    );
  } 
  if (projectType === "games") {
    sectionContent = (
      <div>
        <div className="project-links">
          <div className="repo">
            <img src={mario} alt="zeus" className="project-image"></img>
            <a href="https://github.com/octocat/Hello-World" target="_blank">Project: Mario</a>
          </div>
          <div className="repo">
            <img src={peach} alt="zeus" className="project-image"></img>
            <a href="https://github.com/octocat/Hello-World" target="_blank">Project: Peach</a>
          </div>
          <div className="repo">
            <img src={luigi} alt="zeus" className="project-image"></img>
            <a href="https://github.com/octocat/Hello-World" target="_blank">Project: Luigi</a>
          </div>
        </div>
      </div>
    );
  }
  if (projectType === "ml") {
    sectionContent = ( 
      <div>
        <div className="project-links">
          <div className="repo">
            <img src={zeus} alt="zeus" className="project-image"></img>
            <a href="https://github.com/octocat/Hello-World" target="_blank">Project: Link</a>
          </div>
          <div className="repo">
            <img src={zeus} alt="zeus" className="project-image"></img>
            <a href="https://github.com/octocat/Hello-World" target="_blank">Project: Zelda</a>
          </div>
          <div className="repo">
            <img src={zeus} alt="zeus" className="project-image"></img>
            <a href="https://github.com/octocat/Hello-World" target="_blank">Project: Ganon</a>
          </div>
        </div>
      </div>
    );
  }
  return (
    <div className="project-section" id="project">
      <h1 id="project-title" data-aos="fade-up">Projects</h1>
      <div className="project-buttons-section" data-aos="fade-up"> 

        <button className="project-buttons" id="apps" onClick={() => {
          setProjectType("apps");
          console.log(projectType);
        }}>Apps</button> 

        <button className="project-buttons" id="games" onClick={() => {
          setProjectType("games");
          console.log(projectType);
        }}>Games</button>

        <button className="project-buttons" id="ml" onClick={() => {
          setProjectType("ml");
          console.log(projectType);
        }}>ML</button> 
      </div>
      <div>
        {sectionContent}
      </div>
    </div> 
  );
}  


export default Project; 