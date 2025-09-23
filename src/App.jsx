import "./styles.css";

import AOS from "aos";
import "aos/dist/aos.css";

import React from "react";
// import NavBar from "./components/NavBar.jsx";
// import FrontPage from "./components/FrontPage.jsx";
// import About from "./components/About.jsx";
// import Skill from "./components/Skills.jsx"
// import Project from "./components/Projects.jsx"
// import Contact from "./components/Contact.jsx";
// import Resume from "./components/Resume.jsx";

import NewFront from "./components/NewFront.jsx";
import NewTop from "./components/NewTop.jsx";
import MusicPlayer from "./components/MusicPlayer.jsx";
import NewAbout from "./components/NewAbout.jsx";
import NewProj from "./components/NewProj.jsx";
import NewExp from "./components/NewExp.jsx";
import Version from "./components/Version.jsx";
import Home from "./archive_componenets/Home.jsx"

import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useEffect } from "react";

function App() {
  useEffect(() => {
    AOS.init({ 
      duration: 1000, 
      once: true
    });
  }, []);

  // const OnePageLayout = () => {
  //   return (<>
  //     <FrontPage></FrontPage>
  //     <About></About>
  //     <Skill></Skill>
  //     <Project></Project>
  //     <Contact></Contact>
  //   </>);
  // };  

  return (
    <>
      <BrowserRouter>
        <NewTop></NewTop>
        <MusicPlayer></MusicPlayer>
        <Routes>
          <Route path="/" element={<NewFront></NewFront>}>
            <Route index element={<Home></Home>}></Route>
            <Route path="home" element={<Home />} /> 
            <Route path="/about" element={<NewAbout></NewAbout>}></Route>
            <Route path="/proj" element={<NewProj></NewProj>}></Route>
            <Route path="/exp" element={<NewExp></NewExp>}></Route>
            <Route path="/version" element={<Version></Version>}></Route>
          </Route>
        </Routes>
      </BrowserRouter>
      {/* <BrowserRouter>
        <NavBar />
        <Routes>
          <Route>
            <Route path="/" element={<OnePageLayout />}></Route>
            <Route path="/resume" element={<Resume />}></Route>
          </Route>
        </Routes>
      </BrowserRouter> */}
    </>
  );
}

export default App;