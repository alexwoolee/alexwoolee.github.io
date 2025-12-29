import { useState } from "react";
import styles from "./home.module.css";

// --- Assets ---
import PFP from "../../assets/gifs/doggiecorgi_swim.gif";
import HMART from "../../assets/experience/HMART.jpeg";
import MOCC from "../../assets/experience/MOCC.png";
import SFU from "../../assets/experience/SFU.png";

// --- Components ---
import LanguageSkills from "./LanguageSkills";
import GeneralSkills from "./GeneralSkills";
import ExperienceCard from "./ExperienceCard";
import ProjectButton from "./ProjectButton";
import Button from "../UI/Button";
import Education from "./Education";
import ContactMe from "./ContactMe";
import Footer from "../UI/Footer";

// --- React Icons Imports ---
import { FaAws, FaDocker, FaReact, FaNodeJs, FaGitAlt, FaGithub } from "react-icons/fa";
import { 
  SiFigma, 
  SiVercel, 
  SiJest, 
  SiCmake, 
  SiPostgresql, 
  SiMongodb, 
  SiNextdotjs, 
  SiExpress 
} from "react-icons/si";
import { C } from "../icons/icon";

const Home = () => {
  const [active, setActive] = useState("education");
  const iconSize = 50; // Centralized size control

  return (
    <div className="wrapper">
      <div className={`${styles.content} scrollable-content`}>
        <div className="w-full flex flex-col lg:justify-start justify-start items-center lg:items-center gap-8">
          <img
            src={PFP}
            alt="Profile picture"
            className={`${styles.profile} w-32 h-32 border rounded-full border-transparent object-cover`}
          ></img>
          <div>
            <h1 className={styles.title}>Alex W. Lee</h1>
            <h2 className={`${styles.profession} text-center`}>
              Software Developer
            </h2>
          </div>
          <div className={styles.bioCtn}>
            <p className={`${styles.bio} text-center`}>
              I'm a Canadian software developer currently studying Computing
              Science at Simon Fraser University, fluent in English and Chinese
              with some basic Japanese. I enjoy building intuitive interfaces,
              experimenting with complex projects, and constantly learning new
              technologies to face real world challenges.
            </p>
          </div>
          <div className="flex flex-row gap-4">
            <ProjectButton path="proj" />
            <Button path="about" />
          </div>
        </div>

        {/* --- LOGO SLIDER --- */}
        <div className={styles.logoSliding}>
          <div className={styles.logos}>
            {/* Set 1 */}
            <FaReact size={iconSize} color="#61DAFB" />
            <SiNextdotjs size={iconSize} /> {/* Default color (usually black or white based on theme) */}
            <FaNodeJs size={iconSize} color="#339933" />
            <SiExpress size={iconSize} /> {/* Default color */}
            <SiPostgresql size={iconSize} color="#336791" />
            <SiMongodb size={iconSize} color="#47A248" />
            <FaGitAlt size={iconSize} color="#F05032" />
            <FaGithub size={iconSize} /> {/* Default color */}
            <SiVercel size={iconSize} />
            <FaDocker size={iconSize} color="#2496ED" />
            <FaAws size={iconSize} color="#FF9900" />

            {/* Set 2 (Duplicate for infinite scroll) */}
            <FaReact size={iconSize} color="#61DAFB" />
            <SiNextdotjs size={iconSize} />
            <FaNodeJs size={iconSize} color="#339933" />
            <SiExpress size={iconSize} />
            <SiPostgresql size={iconSize} color="#336791" />
            <SiMongodb size={iconSize} color="#47A248" />
            <FaGitAlt size={iconSize} color="#F05032" />
            <FaGithub size={iconSize} />
            <SiVercel size={iconSize} />
            <FaDocker size={iconSize} color="#2496ED" />
            <FaAws size={iconSize} color="#FF9900" />
          </div>
        </div>

        <section className={styles.generalContent}>
          <section>
            <h1 className={`${styles.sectionTitle} title-lg`}>
              Programming Languages
            </h1>
            <LanguageSkills></LanguageSkills>
          </section>

          <section>
            <h1 className={`${styles.sectionTitle} title-lg`}>Skills</h1>
            <GeneralSkills></GeneralSkills>
          </section>

          {/* --- SEGMENTED TOGGLE BUTTONS --- */}
          <div className={styles.toggleContainer}>
            <button
              className={`${styles.toggleBtn} ${
                active === "experience" ? styles.activeBtn : ""
              }`}
              onClick={() => setActive("experience")}
            >
              Experience
            </button>
            <button
              className={`${styles.toggleBtn} ${
                active === "education" ? styles.activeBtn : ""
              }`}
              onClick={() => setActive("education")}
            >
              Education
            </button>
            <button
              className={`${styles.toggleBtn} ${
                active === "events" ? styles.activeBtn : ""
              }`}
              onClick={() => setActive("events")}
            >
              Events
            </button>
          </div>

          {active === "experience" && (
            <section>
              <div className={styles.expCtn}>
                <ExperienceCard
                  img={HMART}
                  company="H-Mart"
                  title="Grocery Clerk"
                  period="Sep. 2023 - Aug. 2024"
                />
                <ExperienceCard
                  img={MOCC}
                  company="MOCC"
                  title="Food Hub"
                  period="Sep. 2022 - Dec. 2022"
                />
              </div>
            </section>
          )}

          {active === "events" && (
            <section>
              <div className={styles.expCtn}>
                <ExperienceCard
                  img={SFU}
                  company="SFU"
                  title="Fall Hacks 2025"
                  period="Sep. 27th 2025"
                />
                <ExperienceCard
                  img={SFU}
                  company="SFU"
                  title="Surge 2025"
                  period="Sep. 27th 2025"
                />
              </div>
            </section>
          )}

          {active === "education" && (
            <section>
              <Education></Education>
            </section>
          )}
          <ContactMe />
          <Foot />
        </section>
      </div>
    </div>
  );
};

export default Home;