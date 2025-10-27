/* CSS file */
import "./styles/styles.css";
/* Third-party imports / Framework imports */
import AOS from "aos";
import "aos/dist/aos.css";
import React from "react";
/* Components */
import Layout from "./components/Layout.jsx";
import NavBar from "./components/NavBar.jsx";
import MusicPlayer from "./components/MusicPlayer.jsx";
/* Pages */
import PageAbout from "./pages/PageAbout.jsx";
import PageProjects from "./pages/PageProjects.jsx";
import PageExp from "./pages/PageExp.jsx";
import PageVersion from "./pages/PageVersion.jsx";
import Home from "./pages/Home.jsx"
import PageEduc from "./pages/PageEduc.jsx";
import PageBlog from "./pages/PageBlog.jsx";
import PageMisc from "./pages/PageMisc.jsx";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useEffect } from "react";

function App() {
  useEffect(() => {
    AOS.init({ 
      duration: 1000, 
      once: true
    });
  }, []);

  return (
    <>
      <BrowserRouter>
        <NavBar></NavBar>
        <MusicPlayer></MusicPlayer>
        <Routes>
          <Route path="/" element={<Layout></Layout>}>
            <Route index element={<Home></Home>}></Route>
            <Route path="home" element={<Home />} /> 
            <Route path="/about" element={<PageAbout></PageAbout>}></Route>
            <Route path="/proj" element={<PageProjects></PageProjects>}></Route>
            <Route path="/exp" element={<PageExp></PageExp>}></Route>
            <Route path="/version" element={<PageVersion></PageVersion>}></Route>
            <Route path="/edu" element={<PageEduc></PageEduc>}></Route>
            <Route path="/blog" element={<PageBlog></PageBlog>}></Route>
            <Route path="/misc" element={<PageMisc></PageMisc>}></Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;