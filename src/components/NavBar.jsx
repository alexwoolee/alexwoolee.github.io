import catSprite1 from '../assets/frame_0_delay-0.1s.gif';
import catSprite2 from '../assets/frame_1_delay-0.1s.gif';
import catSprite3 from '../assets/frame_2_delay-0.1s.gif';
import moonLight from '../assets/AgentPowerMoonMetro.png';
import moonDark from '../assets/AgentPowerMoonSand.png';
import menuIcon from'../assets/menu-icon.png';

import { useEffect, useRef, useState } from 'react';

const NavBar = () => {
  const catRef = useRef(null);
  const catFrames = [catSprite1, catSprite2, catSprite3];
  const [frameIndex, setFrameIndex] = useState(0);

  useEffect(() => {
    const cat = catRef.current;
    const handleClick = () => { 
      let i = 0;
      const myInterval = setInterval(() => {
        setFrameIndex(i);
        i++;
        if (i > catFrames.length) {
          clearInterval(myInterval);
          setFrameIndex(0);
        } 
      }, 250); 
    };
    if (cat) { 
      cat.addEventListener('click', handleClick);
    }
    return () => {
      if (cat) {
        cat.removeEventListener('click', handleClick);
      }
    }
  })

  // When window is at a certain width, set of nav links should be held by a menu symbol 
  return (
    <div className="nb-sec">
      <div id="left"><h2>Alex Lee</h2></div>
      <div id="center"><img ref={catRef} src={catFrames[frameIndex]} alt="pixel-cat-sprite" className='pixel-art' id="cat" /></div>
      <div id="right">
        <ul>
          <li><a href="#" className='nav-links'>Home</a></li>
          <li><a href="#about" className='nav-links'>About</a></li>
          <li><a href="#skill" className='nav-links'>Skills</a></li>
          <li><a href="#project" className='nav-links'>Projects</a></li>
          <li><a href="#contact" className='nav-links'>Contact</a></li>
          <div id="util-buttons">
            <img src={menuIcon} alt="light-mode" className='pixel-art' id='hide-on-small'/>
            <img src={moonDark} alt="menu-icon" className='pixel-art'/> 
          </div>
        </ul>
      </div>
    </div>
  );
}

export default NavBar;