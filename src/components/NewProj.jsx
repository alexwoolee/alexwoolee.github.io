import React from 'react'
import ProjectCard from './ProjectCard'
import ProjInfo from './ProjInfo'
import { useState } from 'react'
import sirshinu from "../assets/sirshinu.png"

const NewProj = () => { 
  // selectedProject is an obj that stores a component's prop, to access a prop => selectedProject.prop_example
  const [ selectedProject, setSelectedProject ] = useState(null);

  // handle click (clicking on a ProjetCard)
  const handleClick = ({ authors, title, img, txt }) => {
    setSelectedProject({ authors, title, img, txt });
    console.log(selectedProject.title);
    console.log("Hello world!");
  }

  return (
    <div id="proj-container">
      <div id="proj-card-container">
        <ProjectCard title="Taiwan Explorers" authors="Alex Lee, Ryan Fu, Ikkyu Li, Tian Zheng" onClick={handleClick}></ProjectCard> 
        <ProjectCard title="Emergency Reporting System" authors="Alex Lee, Alexander K., Emily T., Camille Ng, Josevan S. Wijaya" onClick={handleClick}></ProjectCard>
        <ProjectCard title="Dogoo Chat" authors="Alex Lee" onClick={handleClick}></ProjectCard>
        <ProjectCard title="Journey of the Alien King" authors="Alex Lee" onClick={handleClick}></ProjectCard>
        <ProjectCard title="CHIP-8 Emulator" authors="Alex Lee" onClick={handleClick}></ProjectCard>
        <ProjectCard title="Calculator" authors="Alex Lee" onClick={handleClick}></ProjectCard>
        <ProjectCard title="TODO List" authors="Alex Lee" onClick={handleClick}></ProjectCard>
        <ProjectCard title="Anime Waifu Discord Bot" authors="Alex Lee" onClick={handleClick}></ProjectCard>
        <ProjectCard title="Melas (Undertale Inspired)" authors="Alex Lee" onClick={handleClick}></ProjectCard>
        <ProjectCard title="Google Gemini AI Itinerary Generator" authors="Alex Lee" onClick={handleClick}></ProjectCard>
        <ProjectCard title="DSA Visualizer" authors="Alex Lee" onClick={handleClick}></ProjectCard>
        <ProjectCard title="iOS App" authors="Alex Lee" onClick={handleClick}></ProjectCard>
      </div>
      { selectedProject && 
        <ProjInfo
          authors={selectedProject.authors}
          title={selectedProject.title}
          img={sirshinu}
          txt={"lorem ipidus"}
        ></ProjInfo> 
      }
    </div>
  )
}

export default NewProj
