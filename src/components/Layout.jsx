/* Third-party imports / Framework imports */
import React from "react";
import { Outlet } from "react-router-dom";
/* Components */
import HomeLink from "./HomeLink";
/* Sidebar assets */
import homeImg from "../assets/sidebar/rain.png";
import aboutImg from "../assets/sidebar/together.png";
import projImg from "../assets/sidebar/proud.png";
import verImg from "../assets/sidebar/wonder.png";
import educImg from "../assets/sidebar/happy.png";
import blogImg from "../assets/sidebar/beauty.png";
import miscImg from "../assets/sidebar/stars.jpg";
import threeImg from "../assets/sidebar/three.gif";
import "../styles/layout.css";

const NewFront = () => {
  return (
    <>
      <div id="main">
        <aside className="link-list lg:w-[324px] w-[108px]">
          <HomeLink
            path="/home"
            img={homeImg}
            title="Home"
            info="Page"
          ></HomeLink>

          <HomeLink
            path="/about"
            img={aboutImg}
            title="About"
            info="Developer"
          ></HomeLink>

          <HomeLink
            path="/proj"
            img={projImg}
            title="Projects"
            info="Page"
          ></HomeLink>

          <HomeLink
            path="/version"
            img={verImg}
            title="Versions"
            info="Page"
          ></HomeLink>

          <HomeLink
            path="/edu"
            img={educImg}
            title="Education"
            info="Page"
          ></HomeLink>

          <HomeLink
            path="/blog"
            img={blogImg}
            title="Blog Posts"
            info="Blog"
          ></HomeLink>

          <HomeLink
            path="/misc"
            img={miscImg}
            title="Other"
            info="Page"
          ></HomeLink>

          <HomeLink
            path="/threejs"
            img={threeImg}
            title="Three.js"
            info="3D Graphics"
          ></HomeLink>
        </aside>

        <main id="content-display">
          <Outlet></Outlet>
        </main>
      </div>
    </>
  );
};

export default NewFront;
