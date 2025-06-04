import "./styles.css";
import React from "react";
import NavBar from "./components/NavBar.js";
import FrontPage from "./components/FrontPage.js";
import About from "./components/About.js";
import Skill from "./components/Skills.js"
import Project from "./components/Projects.js"
import Contact from "./components/Contact.js";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";

function App() {
  return (
    <>
      <NavBar />
      <FrontPage />
      <About />
      <Skill />
      <Project />
      <Contact />
    </>
  );
}

export default App;