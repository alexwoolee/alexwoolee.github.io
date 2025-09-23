import React from 'react'
import "../styles/newStyles.css";
/* img assets */
import Pause from './icons/Pause';
import Play from './icons/Play';
import Repeat from './icons/Repeat';
import SkipBack from './icons/SkipBack';
import SkipForward from './icons/SkipForward';
import Music from './icons/Music';

const MusicPlayer = () => {
  return (
    <>
      <div id="music-player">
        <audio controls loop>
          <source src="src/assets/audio/doggie-corgi-1.mp3"></source>
        </audio>
        <button>        <Play></Play>
        </button>
        <button><Pause></Pause></button>
     </div>
    </>
  )
}

export default MusicPlayer
