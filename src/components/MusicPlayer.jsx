import React, { useEffect, useRef, useState } from 'react'
/* Image assets */
import Pause from './icons/Pause';
import Play from './icons/Play';
import Repeat from './icons/Repeat';
import SkipBack from './icons/SkipBack';
import SkipForward from './icons/SkipForward';
import Music from './icons/Music';
/* Audio assets */
import musicArray from '../data/DataMusic';

// Global variables
const arraySize = musicArray.length;
let minutes = 0;
let seconds = 0;
let currMinutes = 0;
let currSeconds = 0;
var n = true;

const MusicPlayer = () => {
  const [totalMinutes, setTotalMinutes] = useState(0);
  const [totalSeconds, setTotalSeconds] = useState(0);
  const [currentMinutes, setCurrentMinutes] = useState(0);
  const [currentSeconds, setCurrentSeconds] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  let [index, setIndex] = useState(0);
  const audioRef = useRef(null)

  const audio = audioRef.current;

  /* Detect */
  useEffect(() => {
    const handleMetaData = () => {
      console.log("hello");
      formatTotalData(audio.duration)
      console.log("total time: " + audio.duration);
    }

    const handleCurrentTime = () => {
      if ((audio.currentTime % 60) >= 9) {
        n = false;
      } else {
        n = true;
      }
      formatCurrentData(audio.currentTime);
      // console.log("current time: " + audio.currentTime);
      console.log(audio.currentTime);
    }

    const formatTotalData = (totalTime) => {
      minutes = Math.floor(totalTime / 60).toFixed(0);
      seconds = (totalTime - (60 * minutes)).toFixed(0);
      setTotalMinutes(minutes);
      setTotalSeconds(seconds);
    }
  
    const formatCurrentData = (currentTime) => {
      currMinutes = Math.floor(currentTime / 60).toFixed(0);
      currSeconds = (currentTime - (60 * currMinutes)).toFixed(0);
      setCurrentMinutes(currMinutes);
      setCurrentSeconds(currSeconds);    
    }

    if (isPlaying && audio) {
      console.log("song has ended...");
      audio.addEventListener('loadedmetadata', handleMetaData);
      audio.addEventListener('timeupdate', handleCurrentTime);
      audio.play();

      return () => { 
        audio.removeEventListener('loadedmetadata', handleMetaData);
        audio.removeEventListener('timeupdate', handleCurrentTime);
      }
    } 

  }, [index, audio]); // rerun if index changes, or audio (i believe both dependencies are the same)

  const togglePlay = () => {
    setIsPlaying(!isPlaying);
    console.log("togglePlay activated");
    if (!isPlaying) { // if it's not playing, user clicks play, play it
      audio.play();
      console.log("playing...");
    } else {
      audio.pause();   
      console.log("pausing...");
    }
  }

  const nextSong = () => {
    setIndex((index + 1) % arraySize);
    console.log(index);
    console.log("going to next song...");
  }

  const prevSong = () =>  {
    setIndex((index + arraySize - 1) % arraySize);
    console.log(index);
    console.log("going to prev song...");
  }

  return (
    <div id="music-section">
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
     </div>
     <div>
          <div id="progress-value"></div>
          <div id="progress-bar">
            <p>{currMinutes}:{n ? '0' : ''}{currentSeconds}</p>
            <input type="range" name="progress" id="music-slider" min="0" max="100"></input>
            <p>{totalMinutes + ":" + totalSeconds}</p>
          </div>
          <div id="total-time"></div>
          <div id="music-buttons">
          <button id="next-button" onClick={() => prevSong()}>
              <SkipBack></SkipBack>
            </button>
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
        <div>
          <h1>Extra controls</h1>
        </div>
    </div>
  )
}

export default MusicPlayer
