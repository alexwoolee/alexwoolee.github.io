/* CSS file */
import "./styles.css";
/* Third-party imports / Framework imports */
import AOS from "aos";
import "aos/dist/aos.css";
import SimpleBar from 'simplebar-react';
import 'simplebar-react/dist/simplebar.min.css';
/* Components */
import Layout from "./components/Layout/Layout.jsx";
/* Pages */
import About from "./components/AboutSection/About.jsx";
import Projects from "./components/ProjectShowcase/Projects.jsx";
import Home from "./components/HomeSection/Home.jsx"
import Blog from "./components/BlogSection/Blog.jsx";

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
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />}></Route>
            <Route path="home" element={<Home />} />
            <Route path="/about" element={<About />}></Route>
            <Route path="/proj" element={<Projects />}></Route>
            <Route path="/blog" element={<Blog />}></Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;