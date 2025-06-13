import "./styles.css";

import AOS from "aos";
import "aos/dist/aos.css";

import React from "react";
import NavBar from "./components/NavBar.jsx";
import FrontPage from "./components/FrontPage.jsx";
import About from "./components/About.jsx";
import Skill from "./components/Skills.jsx"
import Project from "./components/Projects.jsx"
import Contact from "./components/Contact.jsx";
import Resume from "./components/Resume.jsx"

import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useEffect } from "react";

function App() {
  useEffect(() => {
    AOS.init({ 
      duration: 1000, 
      once: true
    });
  }, []);

  const OnePageLayout = () => {
    return (<>
      <FrontPage></FrontPage>
      <About></About>
      <Skill></Skill>
      <Project></Project>
      <Contact></Contact>
    </>);
  };  

  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route>
          <Route path="/" element={<OnePageLayout />}></Route>
          <Route path="/resume" element={<Resume />}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;