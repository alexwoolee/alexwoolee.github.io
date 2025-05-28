import "./styles.css";
// *** Libraries *** 
import React from "react";
// *** Components *** 
import NavBar from "./components/NavBar.js";
import Footer from "./components/Footer.js";
import About from "./components/About.js";
import Title from "./components/Title.js";
// *** Hooks *** 
import { useState } from "react";

function App() {
  return (
    <>
      <NavBar />
      <Title />
      <About />
      <Footer />
    </>
  );
}

export default App;

// *** TASKS ***
// - design phase (sketching)
// - researching what I need
// - learning about git/github better
// - finishing readme


// *** COMMITS PLAN ***
// - navigation bar
// - fades between sections
// - sub menus 
// - interactive mini pixel controllable players running on nav bar 
// - animated background 
// - dynamically changing color background
// - anime modals
// - icons for socials enlargement when hovering
// - embedded music 
// - mouse trailing effect
// - project timeline line vertical with repo links
// - time API get data
// - weather API get data
// - changing website icon, website title
// - adding links to socials like github, linked, discord, email, slack, 
// - embedding resume and making it downloadable 
// - adding effect where scrolling to a certain point changes an element's style 
// - managing how the site layout changes when making layout size smaller
// - dark mode / light mode
// - integrate cat alley way theme dark city, alina's aseprite theme cat mascot, rainy pixel art
// bonus: mobile organization 