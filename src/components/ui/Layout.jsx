/* Third-party imports / Framework imports */
import { Outlet } from "react-router-dom";
/* Components */
import HomeLink from "../navigation/HomeLink";
/* Sidebar assets */
import homeImg from "../../assets/sidebar/rain.png";
import aboutImg from "../../assets/sidebar/together.png";
import projImg from "../../assets/sidebar/proud.png";
import verImg from "../../assets/sidebar/wonder.png";
import educImg from "../../assets/sidebar/happy.png";
import blogImg from "../../assets/sidebar/beauty.png";
import "../../styles/layout.css";
import WeatherTime from "./WeatherTime";
import CurrentWork from "./CurrentWork";
import "../../styles/UI.css"

const NewFront = () => {
  return (
    <>
      <div id="main">
        <div className="column">
          <WeatherTime />
          <div className="link-list-wrapper lg:min-w-[324px] w-[108px]">
            <aside className="link-list">
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
                info="Page"
              ></HomeLink>
              <HomeLink
                path="/proj"
                img={projImg}
                title="Projects"
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
                title="Blog"
                info="Blog"
              ></HomeLink>
              <HomeLink
                path="/version"
                img={verImg}
                title="Versions"
                info="Page"
              ></HomeLink>
            </aside>
          </div>
          <CurrentWork />
        </div>
        <main id="content-display">
          <Outlet></Outlet>
        </main>
      </div>
    </>
  );
};

export default NewFront;
