import React, { useEffect, useRef, useState } from 'react'
import Play from './icons/Play';
import Pause from './icons/Pause';
import SkipForward from './icons/SkipForward';
import SkipBack from './icons/SkipBack';
import Repeat from './icons/Repeat';
// Image assets 
import Music from './icons/Music';
// Audio assets 
import musicArray from '../data/DataMusic';

const arraySize = musicArray.length;

const MusicPlayer = () => {
  const [duration, setDuration] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);

  const [isPlaying, setIsPlaying] = useState(false);
  const [index, setIndex] = useState(0);

  const audioRef = useRef(null)

  useEffect(() => {
    const audio = audioRef.current;
    const handleMetaData = () => {
      setDuration(audio.duration)
      // console.log("total time: " + audio.duration);
    }

    const handleCurrentTime = () => {
      setCurrentTime(audio.currentTime);
      // console.log("current time: " + audio.currentTime);
    }
  
    if (audioRef) {
      audio.addEventListener('loadedmetadata', handleMetaData);
      audio.addEventListener('timeupdate', handleCurrentTime);
      return () => { 
        audio.removeEventListener('loadedmetadata', handleMetaData);
        audio.removeEventListener('timeupdate', handleCurrentTime);
      }
    } 
  }, [index]); // rerun if index changes, or audio (I think both dependencies are the same)

  useEffect(() => {
    const audio = audioRef.current;
    if (audio) {
      if (isPlaying) {
        audio.play();
      } else {
        audio.pause();
      }
    }
  }, [isPlaying, index]); // Run if isPlaying changes or song index, song index more reliable

  // Automatically set the progress bar to 0, if music changes
  useEffect(() => {

  }, [index]) // Run if index changes

  const togglePlay = () => {
    setIsPlaying(!isPlaying);
    if (!isPlaying) { // if it's not playing, user clicks play, play it
      console.log("playing...");
    } else {
      console.log("pausing...");
    }
  }

  const nextSong = () => {
    const newIndex = (index + 1) % arraySize;
    setIndex(newIndex);
    console.log(index);
    console.log("switching to next song...");
  }

  const prevSong = () =>  {
    const newIndex = (index + arraySize - 1) % arraySize;
    setIndex(newIndex);
    console.log(newIndex);
    console.log("switching to prev song...");
  }

  const formatData = (time) => {
    const minutes = Math.floor(time / 60).toFixed(0);
    const seconds = Math.floor(time % 60).toFixed(0);
    return `${minutes}:${String(seconds).padStart(2, '0')}`;
  }

  const formatProgress = (currentTime, duration) => {
    const progress = Math.floor((currentTime / duration) * 100);
    console.log(progress);
    return `${progress}%`;
  }

  const progress = (currentTime, duration) => {
    const progress = Math.floor((currentTime / duration) * 100);
    return progress;
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
     <div id="player-middle">
          <div id="progress-value"></div>
          <div id="progress-bar">
            <p>{formatData(currentTime)}</p>
            {/* <input 
              type="range" 
              name="progress" 
              id="music-slider" 
              min="0" 
              max="100"
              value={progress(currentTime, duration)}
            ></input> */}
            <div id="bar-full">
              <div 
                id="bar-fill" 
                style={{width: `${progress(currentTime, duration)}%`}}
              >
              </div>
            </div>
            <p>{formatData(duration)}</p>
            <p>{formatProgress(currentTime, duration)}</p>
          </div>
          <div id="total-time"></div>
          <div id="music-buttons">

            <button className='music-button' onClick={() => prevSong()}>
                <SkipBack></SkipBack>
            </button>

            <button className='music-button' onClick={() => togglePlay()}>
              {isPlaying ? <Pause></Pause> : <Play></Play>}
            </button>

            <button className='music-button' onClick={() => nextSong()}>
                <SkipForward></SkipForward>
            </button>

          </div>
        </div>
        <div>
          <h1>Extra controls</h1>
          <Repeat></Repeat>
        </div>
    </div>
  )
}

export default MusicPlayer
