import PFP from "../assets/gifs/doggiecorgi_swim.gif";
import "../styles/about.css";
import AboutSkills from "../components/about/AboutSkills";
import AboutGeneralSkills from "../components/about/AboutGeneralSkills";
import ExperienceCard from "../components/about/ExperienceCard";
import ProjectButton from "../components/projects/ProjectButton";
import Button from "../components/ui/Button";
import Figma from "../components/icons/development-tools/Figma";
import Docker from "../components/icons/development-tools/Docker";
import Vercel from "../components/icons/development-tools/Vercel";
import Jest from "../components/icons/development-tools/Jest";
import AWS from "../components/icons/development-tools/Aws";
import GitHub from "../components/icons/development-tools/GitHub";
import CMake from "../components/icons/development-tools/CMake";
import HMART from "../assets/experience/HMART.jpeg";
import MOCC from "../assets/experience/MOCC.png";
import SFU from "../assets/experience/SFU.png";
import WinterLand from "../components/games/WinterLand";

const About = () => {
  return (
    <div className="wrapper">
      <div className="about-content scrollable-content">
        <div className="w-full flex flex-row lg:justify-start justify-start items-center lg:items-center gap-8">
          <div>
            <h1 id="about-title">About Me</h1>
            <div className="about-bio-container">
              <p id="about-bio" className="text-center">
                Hi, I'm Alex! 
              </p>
            </div>
          </div>
          <WinterLand />
        </div>
      </div>
    </div>
  );
};

export default About;
