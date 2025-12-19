/* CSS file */
import "./styles/styles.css";
/* Third-party imports / Framework imports */
import AOS from "aos";
import "aos/dist/aos.css";
import SimpleBar from 'simplebar-react';
import 'simplebar-react/dist/simplebar.min.css';
/* Components */
import Layout from "./components/ui/Layout.jsx";
import NavBar from "./components/navigation/NavBar.jsx";
import MusicPlayer from "./components/media/MusicPlayer.jsx";
/* Pages */
import About from "./pages/About.jsx";
import Projects from "./pages/Projects.jsx";
import Version from "./pages/Version.jsx";
import Home from "./pages/Home.jsx"
import Education from "./pages/Education.jsx";
import Blog from "./pages/Blog.jsx";

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
        <NavBar />
        <MusicPlayer />
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />}></Route>
            <Route path="home" element={<Home />} />
            <Route path="/about" element={<About />}></Route>
            <Route path="/proj" element={<Projects />}></Route>
            <Route path="/version" element={<Version />}></Route>
            <Route path="/edu" element={<Education />}></Route>
            <Route path="/blog" element={<Blog />}></Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;