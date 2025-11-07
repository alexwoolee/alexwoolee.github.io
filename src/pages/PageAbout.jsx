import React from "react";
import bojji from "../assets/about/ousama-ranking-bojji.gif";
import "../styles/about.css";
import AboutSkills from "../components/AboutSkills";
import Figma from "../components/icons/tools/Figma"
import Docker from "../components/icons/tools/Docker"
import Vercel from "../components/icons/tools/Vercel"
import Jest from "../components/icons/tools/Jest"
import AWS from "../components/icons/tools/Aws"
import GitHub from "../components/icons/tools/GitHub"
import CMake from "../components/icons/tools/CMake"


/*
Section 1: Picture, Name, Title, Contact links
Resume Link
Section 2: Short biography
Section 3: Code tools 
Section 4: Best Projects
Section 5: Long biography
*/

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
          {/* <ul className="socials">
            <li className="social-icon">
              <a href="https://github.com/alexwoolee" target="_blank">
                <img
                  src="https://raw.githubusercontent.com/CLorant/readme-social-icons/main/large/light/github.svg"
                  alt="github icon"
                />
              </a>
            </li>
            <li className="social-icon">
              <a href="https://x.com/wooalexlee" target="_blank">
                <img
                  src="https://raw.githubusercontent.com/CLorant/readme-social-icons/main/large/light/twitter-x.svg"
                  alt="X icon"
                />
              </a>
            </li>
            <li className="social-icon">
              <a
                href="https://www.linkedin.com/in/alex-lee-868008287/"
                target="_blank"
              >
                <img
                  src="https://raw.githubusercontent.com/CLorant/readme-social-icons/main/large/light/linkedin.svg"
                  alt="linkedin icon"
                />
              </a>
            </li>
            <li className="social-icon">
              <a
                href="http://discordapp.com/users/423544690646712330"
                target="_blank"
              >
                <img
                  src="https://raw.githubusercontent.com/CLorant/readme-social-icons/main/large/light/discord.svg"
                  alt="discord icon"
                />
              </a>
            </li>
            <li className="social-icon">
              <a href="https://www.instagram.com/wooalexlee/" target="_blank">
                <img
                  src="https://raw.githubusercontent.com/CLorant/readme-social-icons/main/large/light/instagram.svg"
                  alt="instagram icon"
                />
              </a>
            </li>
          </ul> */}
        </div>
        <div className="about-bio-container">
        <p id="about-bio" className="text-center">
          with a passion about turning ideas into
          engaging digital experiences. Currently studying Computing Science at
          Simon Fraser University, exploring software development,
          problem-solving, and new technologies. Enjoys building intuitive
          interfaces, experimenting with creative projects, and finding smart
          solutions to real-world challenges.
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
      <AboutSkills></AboutSkills>
      <h1 className="about-section-title">Experience</h1>
      <AboutSkills></AboutSkills>
    </div>
  );
};

export default NewAbout;
