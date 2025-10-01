import React from 'react'
import ProjectCard from '../components/ProjectCard'
import ProjInfo from '../components/ProjInfo'
import { useState } from 'react'
/* assets */
import sirshinu from "../assets/sirshinu.png"
/* data */
import projects from "../data/Projects"

const NewProj = () => { 
  // selectedProject is an obj that stores a component's prop, to access a prop => selectedProject.prop_example
  const [ selectedProject, setSelectedProject ] = useState(projects[0]);

  return (
    <div id="proj-container">
      <div id="proj-card-container">
        {projects.map((project) => (
            <ProjectCard
              key={project.id}
              project={project}
              onSelect={setSelectedProject}
            >
            </ProjectCard>
        ))}
      </div>
      { 
        selectedProject && 
        (<ProjInfo
          project={selectedProject}
        ></ProjInfo>)
      }
    </div>
  )
}

export default NewProj
