/* Third-party imports / Framework imports */
import { Outlet } from "react-router-dom";
/* Components */
import HomeLink from "./HomeLink";
/* Sidebar assets */
import homeImg from "../../assets/sidebar/rain.png";
import aboutImg from "../../assets/sidebar/together.png";
import projImg from "../../assets/sidebar/proud.png";
import blogImg from "../../assets/sidebar/beauty.png";
import WeatherTime from "./WeatherTime";
import MusicCard from "../media/MusicCard";
import Controls from "./Controls";
/* Styles */
import styles from "./layout.module.css";
// Icons
import { PanelLeft } from "lucide-react";

const NewFront = () => {
  return (
    <div id="main">
      <div className={styles.column}>
        {/* <WeatherTime /> */}
        <div className={styles.linkListWrapper}>
          <div className={styles.linkListHeader}>
            <div className="flex flex-row items-center gap-3">
              <img src="\logo.png" alt="logo" className="w-8 h-8" />
              <h1 className={styles.linkListTitle}>AWL</h1>
            </div>
            <PanelLeft size={20} className={styles.panelLeft}/>
          </div>
          <aside className={styles.linkList}>
            <HomeLink path="/home" img={homeImg} title="Home"></HomeLink>
            <HomeLink path="/about" img={aboutImg} title="About"></HomeLink>
            <HomeLink path="/proj" img={projImg} title="Projects"></HomeLink>
            <HomeLink path="/blog" img={blogImg} title="Blog"></HomeLink>
            <HomeLink path="/blog" img={blogImg} title="Settings"></HomeLink>
          </aside>
        </div>
        {/* <Controls /> */}
        <MusicCard />
      </div>
      <main id="content-display">
        <Outlet></Outlet>
      </main>
    </div>
  );
};

export default NewFront;
