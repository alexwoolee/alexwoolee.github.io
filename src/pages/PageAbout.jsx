import React from "react";
import bojji from "../assets/about/ousama-ranking-bojji.gif";
import "../styles/about.css";
import AboutSkills from "../components/AboutSkills";
import AboutGeneralSkills from "../components/AboutGeneralSkills";
import ExperienceCard from "../components/ExperienceCard";
import Figma from "../components/icons/tools/Figma";
import Docker from "../components/icons/tools/Docker";
import Vercel from "../components/icons/tools/Vercel";
import Jest from "../components/icons/tools/Jest";
import AWS from "../components/icons/tools/Aws";
import GitHub from "../components/icons/tools/GitHub";
import CMake from "../components/icons/tools/CMake";
import HMART from "../assets/experience/HMART.jpeg";
import MOCC from "../assets/experience/MOCC.png";
import SFU from "../assets/experience/SFU.png";
import "../styles/exp.css";

const NewAbout = () => {
  return (
    <div className="about-content">
      <div className="w-full flex flex-col lg:justify-start justify-start items-center lg:items-center gap-8">
        <img
          src={bojji}
          className="w-32 h-32 border rounded-full border-transparent object-cover"
          id="profile"
        ></img>
        <div>
          <h1 id="about-title">Alex Woo Lee</h1>
          <h2 id="profession" className="text-center">
            Aspiring <strong>Software Developer</strong>
          </h2>
        </div>
        <div className="about-bio-container">
          <p id="about-bio" className="text-center">
            with a passion about turning ideas into engaging digital
            experiences. Currently studying Computing Science at Simon Fraser
            University, exploring software development, problem-solving, and new
            technologies. Enjoys building intuitive interfaces, experimenting
            with creative projects, and finding smart solutions to real-world
            challenges.
          </p>
        </div>
      </div>
      <div className="logo-sliding">
        <div className="logos">
          <Docker />
          <Figma />
          <Vercel />
          <Jest />
          <Figma />
          <AWS />
          <GitHub />
          <CMake />
          {/* duplicate set */}
          <Docker />
          <Figma />
          <Vercel />
          <Jest />
          <Figma />
          <AWS />
          <GitHub />
          <CMake />
        </div>
      </div>
      <h1 className="about-section-title">Programming Languages</h1>
      <AboutSkills></AboutSkills>
      <h1 className="about-section-title">Skills</h1>
      <AboutGeneralSkills></AboutGeneralSkills>
      <h1 className="about-section-title">Experience</h1>
      <ExperienceCard
        img={HMART}
        company="H-Mart"
        title="Grocery Clerk"
        period="Sep. 2023 - Aug. 2024"
        txt="text"
      ></ExperienceCard>
      <ExperienceCard
        img={MOCC}
        company="Marpole Oakridge Community Centre"
        title="Food Hub"
        period="Sep. 2022 - Dec. 2022"
        txt="text"
      ></ExperienceCard>{" "}
      <h1 className="exp-type">Events</h1>
      <ExperienceCard
        img={SFU}
        company="SFU"
        title="Fall Hacks 2025"
        period="Sep. 27th 2025"
        txt="text"
      ></ExperienceCard>
      <ExperienceCard
        img={SFU}
        company="SFU"
        title="Surge 2025"
        period="Sep. 27th 2025"
        txt="text"
      ></ExperienceCard>
    </div>
  );
};

export default NewAbout;
