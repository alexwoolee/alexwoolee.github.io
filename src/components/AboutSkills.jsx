import React from "react";
import { C, Cpp, CSharp, Css, Html, Java, JavaScript, Python, Tailwindcss, TypeScript } from "./icons/icon.js";
import SkillIconWrapper from "./SkillIconWrapper";
import "../styles/about.css";

const AboutSkills = () => {
  return (
    <div className="prog-languages">
      <SkillIconWrapper IconComponent={C} iconName="C" />
      <SkillIconWrapper IconComponent={Cpp} iconName="Cpp" />
      <SkillIconWrapper IconComponent={CSharp} iconName="CSharp" />
      <SkillIconWrapper IconComponent={Css} iconName="Css" />
      <SkillIconWrapper IconComponent={Html} iconName="Html" />
      <SkillIconWrapper IconComponent={Java} iconName="Java" />
      <SkillIconWrapper IconComponent={JavaScript} iconName="JavaScript" />
      <SkillIconWrapper IconComponent={Python} iconName="Python" />
      <SkillIconWrapper IconComponent={Tailwindcss} iconName="Tailwindcss" />
      <SkillIconWrapper IconComponent={TypeScript} iconName="TypeScript" />
    </div>
  );
};

export default AboutSkills;
