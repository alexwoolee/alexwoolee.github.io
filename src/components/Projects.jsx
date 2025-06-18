import { useState } from "react"
import zeus from "../assets/Zeus.png"
import poseidon from "../assets/Poseidon.png"
import hades from "../assets/Hades.png"
import mario from "../assets/Mario.png"
import luigi from "../assets/Luigi.png"
import peach from "../assets/Peach.png"
import search from "../assets/search.png"
import ERS from "../assets/emergency_reporting_system.png"
import PP from "../assets/personal_portfolio.png"
import cannonGame from "../assets/cannon_game.png"
import taiwanFlag from "../assets/taiwan-flag.svg"
import jotakAlpha from "../assets/jotak-alpha.png"
import calculator from "../assets/calc-demo.jpg"

const Project = () => {   
  const [projectType, setProjectType] = useState("apps");
  let sectionContent;
  if (projectType === "apps") {
    sectionContent = (
      <div data-aos="fade-up">
        <div className="project-links">
          <div className="repo">
            <img src={ERS} alt="emergency reporting system screenshot" className="project-image"></img>
            <p id="project-header">Emergency Reporting System</p>
            <div className="repo-links">
              {/* <img src={search} alt="search icon" className="project-icons"></img> */}
              <a href="https://github.com/PrimitivePenguin/CMPT272-Map-Project" target="_blank"><img src="https://raw.githubusercontent.com/CLorant/readme-social-icons/main/large/colored/github.svg" alt="github icon"></img>          
              </a>
            </div>
          </div>
          <div className="repo">
            <img src={PP} alt="personal portfolio screenshot" className="project-image"></img>
            <p id="project-header">Personal Website</p>
            <div className="repo-links">
              {/* <img src={search} alt="search icon" className="project-icons"></img> */}
              <a href="https://github.com/octocat/Hello-World" target="_blank"><img src="https://raw.githubusercontent.com/CLorant/readme-social-icons/main/large/colored/github.svg" alt="github icon"></img>          
              </a>
            </div>
          </div>
          <div className="repo">
            <img src={cannonGame} alt="cannon game screenshot" className="project-image"></img>
            <p id="project-header">Cannon Game</p>
            <div className="repo-links">
              {/* <img src={search} alt="search icon" className="project-icons"></img> */}
              <a className="" href="/cannon-game/game.html" target="_blank" id="play">Play</a>  
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
            <img src={taiwanFlag} alt="taiwan flag" className="project-image"></img>
            <p id="project-header">TaiwanExplorers</p>
            <div className="repo-links">
              {/* <img src={search} alt="search icon" className="project-icons"></img> */}
              <a href="https://github.com/CMPT-276-SUMMER-2025/final-project-18-flowers" target="_blank"><img src="https://raw.githubusercontent.com/CLorant/readme-social-icons/main/large/colored/github.svg" alt="github icon"></img>          
              </a>
            </div>
          </div>
          <div className="repo">
            <img src={jotakAlpha} alt="gamemaker studio 2 logo" className="project-image"></img>
            <p id="project-header">JOTAK (Game)</p>
             <div className="repo-links">
              {/* <img src={search} alt="search icon" className="project-icons"></img> */}
              {/* <a href="https://github.com/octocat/Hello-World" target="_blank"><img src="https://raw.githubusercontent.com/CLorant/readme-social-icons/main/large/colored/github.svg" alt="github icon"></img>          
              </a> */}
              <p id="not-available">Not Available</p>
            </div>
          </div>
          <div className="repo">
            <img src={calculator} alt="calc demo screenshot" className="project-image"></img>
            <p id="project-header">Calculator App</p>
            <div className="repo-links">
              {/* <img src={search} alt="search icon" className="project-icons"></img> */}
              {/* <a href="https://github.com/octocat/Hello-World" target="_blank"><img src="https://raw.githubusercontent.com/CLorant/readme-social-icons/main/large/colored/github.svg" alt="github icon"></img>          
              </a> */}
              <p id="not-available">Not Available</p>
            </div>
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
            <div className="repo-links">
              {/* <img src={search} alt="search icon" className="project-icons"></img> */}
              <img src="https://raw.githubusercontent.com/CLorant/readme-social-icons/main/large/colored/github.svg" alt="github icon"></img>          
            </div>
          </div>
          <div className="repo">
            <img src={zeus} alt="zeus" className="project-image"></img>
            <a href="https://github.com/octocat/Hello-World" target="_blank">Project: Zelda</a>
            <div className="repo-links">
              {/* <img src={search} alt="search icon" className="project-icons"></img> */}
              <img src="https://raw.githubusercontent.com/CLorant/readme-social-icons/main/large/colored/github.svg" alt="github icon"></img>          
            </div>
          </div>
          <div className="repo">
            <img src={zeus} alt="zeus" className="project-image"></img>
            <a href="https://github.com/octocat/Hello-World" target="_blank">Project: Ganon</a>
            <div className="repo-links">
              {/* <img src={search} alt="search icon" className="project-icons"></img> */}
              <img src="https://raw.githubusercontent.com/CLorant/readme-social-icons/main/large/colored/github.svg" alt="github icon"></img>          
            </div>
          </div>
        </div>
      </div>
    );
  }
  return (
    <div className="project-section" id="project">
      <h1 id="project-title" data-aos="fade-up">Projects</h1>
      <div className="project-buttons-section" data-aos="fade-up"> 

        <button className={"project-buttons " + (projectType === "apps" ? "bg-blue-600" : "bg-blue-300")} id="apps" onClick={() => {
          setProjectType("apps");
          console.log(projectType);
        }}>Past</button> 

        <button className={"project-buttons " + (projectType === "games" ? "bg-blue-600" : "bg-blue-300")} id="games" onClick={() => {
          setProjectType("games");
          console.log(projectType);
        }}>Current</button>
      
        {/* 
        <button className="project-buttons" id="ml" onClick={() => {
          setProjectType("ml");
          console.log(projectType);
        }}>ML</button>  */}
      </div>
      <div>
        {sectionContent}
      </div>
    </div> 
  );
}  


export default Project; 