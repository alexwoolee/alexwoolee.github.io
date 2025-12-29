import PFP from "../../assets/gifs/doggiecorgi_swim.gif";
import LanguageSkills from "./LanguageSkills";
import GeneralSkills from "./GeneralSkills";
import ExperienceCard from "./ExperienceCard";
import ProjectButton from "./ProjectButton";
import Button from "../UI/Button";
import Figma from "../icons/development-tools/Figma";
import Docker from "../icons/development-tools/Docker";
import Vercel from "../icons/development-tools/Vercel";
import Jest from "../icons/development-tools/Jest";
import AWS from "../icons/development-tools/Aws";
import GitHub from "../icons/development-tools/GitHub";
import CMake from "../icons/development-tools/CMake";
import HMART from "../../assets/experience/HMART.jpeg";
import MOCC from "../../assets/experience/MOCC.png";
import SFU from "../../assets/experience/SFU.png";
import PostgreSQL from "../icons/development-tools/PostgreSQL";
import MongoDB from "../icons/development-tools/MongoDB";
import ReactLogo from "../icons/development-tools/ReactLogo";
import NextJS from "../icons/development-tools/NextJS";
import NodeJs from "../icons/development-tools/NodeJS";
import ExpressJS from "../icons/development-tools/ExpressJS";
import Git from "../icons/development-tools/Git";
import Education from "./Education";
import { useState } from "react";
import styles from "./home.module.css";

const Home = () => {
  const [active, setActive] = useState("experience");

  const base = "text-white rounded-md p-2 w-full";
  const activeButtonStyle = "bg-[var(--murk)]";
  const inactiveButtonStyle = "bg-[var(--dark-murk)]";

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
        <div className={styles.logoSliding}>
          <div className={styles.logos}>
            <ReactLogo />
            <NextJS />
            <NodeJs />
            <ExpressJS />
            <PostgreSQL />
            <MongoDB />
            <Git />
            <GitHub />
            <Docker />
            <AWS />
            {/* duplicate set */}
            <ReactLogo />
            <NextJS />
            <NodeJs />
            <ExpressJS />
            <PostgreSQL />
            <MongoDB />
            <Git />
            <GitHub />
            <Docker />
            <AWS />
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

          <div className="flex gap-1 justify-evenly">
            <button
              className={`${base} ${
                active === "experience"
                  ? activeButtonStyle
                  : inactiveButtonStyle
              }`}
              onClick={() => setActive("experience")}
            >
              Experience
            </button>
            <button
              className={`${base} ${
                active === "education" ? activeButtonStyle : inactiveButtonStyle
              }`}
              onClick={() => setActive("education")}
            >
              Education
            </button>
            <button
              className={`${base} ${
                active === "events" ? activeButtonStyle : inactiveButtonStyle
              }`}
              onClick={() => setActive("events")}
            >
              Events
            </button>
          </div>

          {active === "experience" && (
            <>
              {" "}
              <section>
                <div className={styles.expCtn}>
                  <ExperienceCard
                    img={HMART}
                    company="H-Mart"
                    title="Grocery Clerk"
                    period="Sep. 2023 - Aug. 2024"
                  ></ExperienceCard>
                  <ExperienceCard
                    img={MOCC}
                    company="MOCC"
                    title="Food Hub"
                    period="Sep. 2022 - Dec. 2022"
                  ></ExperienceCard>{" "}
                </div>
              </section>
            </>
          )}

          {active === "events" && (
            <>
              {" "}
              <section>
                <div className={styles.expCtn}>
                  <ExperienceCard
                    img={SFU}
                    company="SFU"
                    title="Fall Hacks 2025"
                    period="Sep. 27th 2025"
                  ></ExperienceCard>
                  <ExperienceCard
                    img={SFU}
                    company="SFU"
                    title="Surge 2025"
                    period="Sep. 27th 2025"
                  ></ExperienceCard>
                </div>
              </section>
            </>
          )}

          {active === "education" && (
            <>
              {" "}
              <section>
                <Education></Education>
              </section>
            </>
          )}
        </section>
      </div>
    </div>
  );
};

export default Home;
