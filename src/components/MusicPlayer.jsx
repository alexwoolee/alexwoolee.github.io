import React, { useEffect, useRef, useState } from 'react'
import "../styles/newStyles.css";
/* img assets */
import Pause from './icons/Pause';
import Play from './icons/Play';
import Repeat from './icons/Repeat';
import SkipBack from './icons/SkipBack';
import SkipForward from './icons/SkipForward';
import Music from './icons/Music';
/* audio assets */
import musicArray from '../data/Music';

/*
Music Player Design Document

* User Interactivity 
- click on play button, go through array pick first song from music data, display info, play audio
- click on pause, stop the audio at that timestamp
- when a song finishes, play the next song in the array

*/

function skipFoward() {

}

function skipBack () {

}

const arraySize = musicArray.length;
const MusicPlayer = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  let [index, setIndex] = useState(0);
  const audioRef = useRef(null)

  useEffect(() => {
    if (isPlaying && audioRef.current) {
      console.log("song has ended...");
      audioRef.current.play();
    }
  }, [index]);

  function togglePlay() {
    setIsPlaying(!isPlaying);
    console.log("togglePlay activated");
    if (!isPlaying) { // if it's not playing, user clicks play, play it
      console.log("playing...");
      audioRef.current.play();
    } else {
      audioRef.current.pause();   
      console.log("pausing...");
    }
  }

  const nextSong = () => {
    setIndex((index + 1) % arraySize);
    console.log(index);
    console.log("going to next song...");
  }

  return (
    <>
      <div id="music-player">
        <div className="music-info">
          <img src={musicArray[index].cover} alt="music cover" className='music-cover'></img>
          <div className="music-text">
            <h3 className='music-title'>{musicArray[index].title}</h3>
            <h3 className='music-artist'>{musicArray[index].artist}</h3>
          </div>
        </div>

        <audio
          ref={audioRef}
          src={musicArray[index].audio}
          onEnded={nextSong}
        ></audio>
        <div id="music-buttons">
          <button id="play-button" onClick={() => togglePlay()}>
            { 
              isPlaying ? <Pause></Pause> : <Play></Play> 
            }
          </button>
          <button id="next-button" onClick={() => nextSong()}>
            <SkipForward></SkipForward>
          </button>
        </div>
     </div>
     <div id="progress-bar">

     </div>
    </>
  )
}

export default MusicPlayer
