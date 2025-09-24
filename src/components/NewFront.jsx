import React from 'react'
import { BrowserRouter, Link, Outlet, } from 'react-router-dom';
import NewAbout from './NewAbout';
import HomeLink from './HomeLink';
/* image assets */
import homeImg from "../assets/rain.png"
import aboutImg from "../assets/together.png" 
import projImg from "../assets/proud.png"
import expImg from "../assets/alone.png"
import verImg from "../assets/wonder.png"
import educImg from "../assets/happy.png"
import blogImg from "../assets/beauty.png"
import miscImg from "../assets/stars.jpg"

const NewFront = () => {
  
  return( 
    <>
      <div id="main">

        <aside id="link-list">

          <HomeLink path="/home" img={homeImg} title="Home" info="Alex Woo Lee"></HomeLink>

          <HomeLink path="/about" img={aboutImg} title="About" info="Alex Woo Lee"></HomeLink>

          <HomeLink path="/proj" img={projImg} title="Projects" info="Alex Woo Lee"></HomeLink>

          <HomeLink path="/exp" img={expImg} title="Experiences" info="Alex Woo Lee"></HomeLink>

          <HomeLink path="/version" img={verImg} title="Versions" info="Alex Woo Lee"></HomeLink>

          <HomeLink path="/edu" img={educImg} title="Education" info="Alex Woo Lee"></HomeLink>

          <HomeLink path="/blog" img={blogImg} title="Blog Posts" info="Alex Woo Lee"></HomeLink>
          
          <HomeLink path="/misc" img={miscImg} title="​Miscellaneous" info="Alex Woo Lee"></HomeLink>

        </aside>

        <main id="content-display">
          <Outlet></Outlet>
        </main>

      </div>
    </>
  );  
}

export default NewFront;