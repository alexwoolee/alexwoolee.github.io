import React from 'react'
import ProjectCard from './ProjectCard'
import sirshinu from '../assets/sirshinu.png'

const NewProj = () => {
  return (
    <div id="proj-container">
      <div id="proj-card-container">
        <ProjectCard title="Taiwan Explorers" authors="Alex Lee, Ryan Fu, Ikkyu Li, Tian Zheng"></ProjectCard> 
        <ProjectCard title="Emergency Reporting System" authors="Alex Lee, Alexander K., Emily T., Camille Ng, Josevan S. Wijaya"></ProjectCard>
        <ProjectCard title="Dogoo Chat" authors="Alex Lee"></ProjectCard>
        <ProjectCard title="Journey of the Alien King" authors="Alex Lee"></ProjectCard>
        <ProjectCard title="CHIP-8 Emulator" authors="Alex Lee"></ProjectCard>
        <ProjectCard title="Calculator" authors="Alex Lee"></ProjectCard>
        <ProjectCard title="TODO List" authors="Alex Lee"></ProjectCard>
        <ProjectCard title="Anime Waifu Discord Bot" authors="Alex Lee"></ProjectCard>
        <ProjectCard title="Melas (Undertale Inspired)" authors="Alex Lee"></ProjectCard>
        <ProjectCard title="Google Gemini AI Itinerary Generator" authors="Alex Lee"></ProjectCard>
        <ProjectCard title="DSA Visualizer" authors="Alex Lee"></ProjectCard>
        <ProjectCard title="iOS App" authors="Alex Lee"></ProjectCard>
      </div>
      <div id="proj-info-display">
        <p id="proj-authors">Project Authors</p>
        <img src={sirshinu} alt="temp" id="proj-lg-img"></img>
        <h1 id="proj-lg-title">Project Title</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla at nunc eget lectus sodales scelerisque. Phasellus non eros nec eros tempor tincidunt. Suspendisse potenti. Curabitur interdum mauris sit amet lacus vulputate, at euismod sapien suscipit. Integer laoreet, est vitae tincidunt posuere, libero est ultricies justo, eu suscipit odio dolor ut risus.</p>
        <div id="github-links">
          {/* github repo */}
          <div className="github-link">
            <img src="https://raw.githubusercontent.com/CLorant/readme-social-icons/main/large/light/github.svg" alt="github icon" />
          </div>
          {/* figma */}
          <div className="github-link">
            <img src="src/assets/figma-logo.svg" />
          </div>
          {/* live demo */}
          <div className="github-link">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><g fill="none" fill-rule="evenodd"><path d="M18 14v5a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8c0-1.1.9-2 2-2h5M15 3h6v6M10 14L20.2 3.8"/></g></svg>
          </div>
        </div>
      </div>
    </div>
  )
}

export default NewProj
