/* Third-party imports / Framework imports */
import React from 'react'
import { Outlet, } from 'react-router-dom';
/* Components */
import HomeLink from './HomeLink';
/* Sidebar assets */
import homeImg from "../assets/sidebar/rain.png"
import aboutImg from "../assets/sidebar/together.png" 
import projImg from "../assets/sidebar/proud.png"
import expImg from "../assets/sidebar/alone.png"
import verImg from "../assets/sidebar/wonder.png"
import educImg from "../assets/sidebar/happy.png"
import blogImg from "../assets/sidebar/beauty.png"
import miscImg from "../assets/sidebar/stars.jpg"

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
          
          <HomeLink path="/misc" img={miscImg} title="​Miscellaneous" info="Alex Woo Lee"></HomeLink>z

        </aside>

        <main id="content-display">
          <Outlet></Outlet>
        </main>

      </div>
    </>
  );  
}

export default NewFront;