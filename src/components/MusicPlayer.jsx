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
  const audioRef = useRef(null)
  const [duration, setDuration] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);
  const [index, setIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);

  // useEffect #1
  useEffect(() => {
    const audio = audioRef.current;
    const handleMetaData = () => {
      setDuration(audio.duration)
    }
    const handleCurrentTime = () => {
      setCurrentTime(audio.currentTime)
    }

    if (audioRef) {
      audio.addEventListener('loadedmetadata', handleMetaData);
      audio.addEventListener('timeupdate', handleCurrentTime);
      return () => {
        audio.removeEventListener('loadedmetadata', handleMetaData);
        audio.removeEventListener('timeupdate', handleCurrentTime);
      }
    }
  }, [index]); // Rerun if index changes, or audio (I think both dependencies are the same)

  // useEffect #2
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

  // useEffect #3
  useEffect(() => {
    let interval = null;
    const audio = audioRef.current

    if (isPlaying && audio) {
      interval = setInterval(() => {
        setCurrentTime(audio.currentTime);
      }, 200)
    } else {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [isPlaying, index]);

  useEffect(() => {
    let animationFrame;
  
    const updateProgress = () => {
      if (audioRef.current && isPlaying) {
        setCurrentTime(audioRef.current.currentTime);
        animationFrame = requestAnimationFrame(updateProgress);
      }
    };
  
    if (isPlaying) {
      animationFrame = requestAnimationFrame(updateProgress);
    }
    return () => cancelAnimationFrame(animationFrame);
  }, [isPlaying]);

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

  const prevSong = () => {
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
    const percentage = Math.floor((currentTime / duration) * 100);
    return percentage;
  }

  return (
    <div id="music-section">
      {/* Left section */}
      <div id="player-left">
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
          min="0"
          max="1"
        ></audio>
      </div>

      {/* Middle section */}
      <div id="player-middle">
        <div id="music-buttons">
          <button className='music-button' onClick={prevSong}>
            <SkipBack></SkipBack>
          </button>
          <button className='music-button' id="play" style={{ color: 'black' }} onClick={togglePlay}>
            {isPlaying ? <Pause></Pause> : <Play></Play>}
          </button>
          <button className='music-button' onClick={nextSong}>
            <SkipForward></SkipForward>
          </button>
        </div>
        <div id="progress-bar">
          <p className='music-time'>{formatData(currentTime)}</p>
          <div id="bar-full">
            <div
              id="bar-fill"
              style={{ width: `${progress(currentTime, duration)}%` }}
            >
            </div>
          </div>
          <p className='music-time'>{formatData(duration)}</p>
        </div>
        <div id="total-time"></div>
      </div>

      {/* Right section */}
      <div id="player-right">
        <Repeat></Repeat>
        <div id="volume-control"></div>
      </div>
    </div>
  )
}

export default MusicPlayer
