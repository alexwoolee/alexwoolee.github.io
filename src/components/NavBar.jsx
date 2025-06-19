import catSprite1 from '../assets/frame_0_delay-0.1s.gif';
import catSprite2 from '../assets/frame_1_delay-0.1s.gif';
import catSprite3 from '../assets/frame_2_delay-0.1s.gif';
import menuIcon from '../assets/menu.svg';

import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';

const NavBar = () => {
  const catFrames = [catSprite1, catSprite2, catSprite3];
  const catRef = useRef(null);
  const [frame, setFrame] = useState(0);
  // everything that render updates place here in useEffect
  useEffect(() => {
    const cat = catRef.current;
    const handleClick = () => { 
      let i = 0; 
      const myInterval = setInterval(() => {
        setFrame(i)
        i++;
        if (i > catFrames.length) {
          clearInterval(myInterval);
          setFrame(0);
        }
      }, 60)
    }
    if (cat) {
      cat.addEventListener('click', handleClick);
    }
    return () => {
      if (cat) {
        cat.removeEventListener('click', handleClick);
      }
    }  
  });

  // When window is at a certain width, set of nav links should be held by a menu symbol 
  return (
    <div className="nb-sec font-extrabold">
      <div id="left"><a href='\' className='text-white/70 hover:text-white transition'>Alex Lee</a></div> 
      <div id="center"><img src={catFrames[frame]} ref={catRef} alt="cat icon" className="pixel-art hidden md:block"></img></div>
      <div id="right">
        <ul>
          <HashLink smooth to="/#star-container" className='nav-links text-white/70 hover:text-white transition'>Home</HashLink>
          <HashLink smooth to="/#about-title" className="nav-links text-white/70 hover:text-white transition">About</HashLink>
          <HashLink smooth to="/#skill" className="nav-links text-white/70 hover:text-white transition">Skills</HashLink>
          <HashLink smooth to="/#project" className="nav-links text-white/70 hover:text-white transition">Projects</HashLink>
          <HashLink smooth to="/#contact" className="nav-links text-white/70 hover:text-white transition">Contact</HashLink>
          <Link to="/resume" className='nav-links text-white/70 hover:text-white transition' onClick={() => {window.scrollTo(0,0)}}>Resume</Link>
        </ul>
        <div id="util-buttons">
            <img src={menuIcon} alt="light-mode" id='hide-on-small'/>
          </div>
      </div>
    </div>
  );
}

export default NavBar;