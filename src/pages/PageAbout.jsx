import React from "react";
import bojji from "../assets/about/ousama-ranking-bojji.gif";
import "../styles/about.css";
import AboutSkills from "../components/AboutSkills";

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
    <div id="about-content">
      <div className="w-full flex lg:flex-row flex-col lg:justify-start justify-start items-center lg:items-center gap-8">
        <img
          src={bojji}
          className="w-64 h-64 border rounded-xl border-transparent object-cover"
          id="profile"
        ></img>
        <div>
          <h1 id="about-title">Alex Woo Lee</h1>
          <h2 id="profession" className="lg:text-left text-center">
            Software Developer
          </h2>
          <ul className="socials">
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
          </ul>
        </div>
      </div>
      <p id="about-bio">
        A developer based in Canada, passionate about turning ideas into
        engaging digital experiences. Currently studying Computing Science at
        Simon Fraser University, exploring software development,
        problem-solving, and new technologies. Enjoys building intuitive
        interfaces, experimenting with creative projects, and finding smart
        solutions to real-world challenges.
        <br />
        <br />
        Outside of coding, enjoys exploring creative hobbies, trying new things,
        and discovering fresh ways to connect technology with people. Always
        curious, always learning, and driven by the goal of making experiences
        more meaningful and enjoyable for others.
        <br />
        <br />
      </p>
      <h1 id="about-title">Coding Languages</h1>
      <AboutSkills></AboutSkills>
    </div>
  );
};

export default NewAbout;
