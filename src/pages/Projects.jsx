import ProjectCard from "../components/projects/ProjectCard";
import ProjectInfo from "../components/projects/ProjectInfo";
import GridRowToggle from "../components/ui/GridRowToggle";
import Info from "../components/icons/navigation/Info";
import { useState } from "react";
/* Data */
import projects from "../data/DataProjects";
import "../styles/projects.css";

const Projects = () => {
  // selectedProject is an obj that stores a component's prop, to access a prop => selectedProject.prop_example
  const [selectedProject, setSelectedProject] = useState(projects[0]);

  return (
    <div className="  projects-page">
      {/* いち */}
      <div className="projects-container scrollable-content">
        <section className="projects-header">
          <h1>Projects</h1>
          <p>
            The essential projects I've built, tested, and collaborated
            throughout the years.
          </p>
        </section>

        <div className="projects">
          <div className="projects-options">
            <GridRowToggle />
            <Info />
          </div>
          <div className="projects-list">
            {projects.map((project) => (
              <ProjectCard
                key={project.id}
                project={project}
                onSelect={setSelectedProject}
              ></ProjectCard>
            ))}
          </div>
        </div>
      </div>
      {/* に */}
      {selectedProject && <ProjectInfo project={selectedProject}></ProjectInfo>}
    </div>
  );
};

export default Projects;
