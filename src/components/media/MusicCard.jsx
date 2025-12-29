import { useEffect, useRef, useState } from "react";
import { Play, Pause, SkipForward, SkipBack } from 'lucide-react';
import musicArray from "../../data/DataMusic";
import styles from './media.module.css';

const MusicCard = () => {
  const audioRef = useRef(null);
  const [duration, setDuration] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);
  const [index, setIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);

  const currentSong = musicArray[index];

  // 1. Handle Song Loading & Metadata
  useEffect(() => {
    const audio = audioRef.current;
    
    const handleLoadedMetadata = () => {
      if (audio) {
        setDuration(audio.duration);
        if (isPlaying) audio.play();
      }
    };

    const handleTimeUpdate = () => {
      if (audio) setCurrentTime(audio.currentTime);
    };

    const handleEnded = () => {
      nextSong();
    };

    if (audio) {
      audio.addEventListener("loadedmetadata", handleLoadedMetadata);
      audio.addEventListener("timeupdate", handleTimeUpdate);
      audio.addEventListener("ended", handleEnded);
    }

    return () => {
      if (audio) {
        audio.removeEventListener("loadedmetadata", handleLoadedMetadata);
        audio.removeEventListener("timeupdate", handleTimeUpdate);
        audio.removeEventListener("ended", handleEnded);
      }
    };
  }, [index, isPlaying]); // Re-bind if song changes

  // 2. Handle Play/Pause Toggles
  useEffect(() => {
    const audio = audioRef.current;
    if (audio) {
      if (isPlaying) {
        // Promise handling prevents "play() request interrupted" errors
        const playPromise = audio.play();
        if (playPromise !== undefined) {
          playPromise.catch((error) => console.log("Playback error:", error));
        }
      } else {
        audio.pause();
      }
    }
  }, [isPlaying, index]);

  const togglePlay = () => setIsPlaying(!isPlaying);

  const nextSong = () => {
    setIndex((prev) => (prev + 1) % musicArray.length);
    // Note: We don't set isPlaying(true) here because the useEffect 
    // will handle auto-play if isPlaying is already true.
  };

  const prevSong = () => {
    setIndex((prev) => (prev + musicArray.length - 1) % musicArray.length);
  };

  const formatTime = (time) => {
    if (isNaN(time)) return "0:00";
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes}:${String(seconds).padStart(2, "0")}`;
  };

  const progressPercent = duration ? (currentTime / duration) * 100 : 0;

  return (
    <div className={styles.musicCard}>
      <audio
        ref={audioRef}
        src={currentSong.audio}
        preload="metadata"
      />

      {/* Top: Album Art + Text */}
      <div className={styles.musicInfo}>
        <img
          src={currentSong.cover}
          alt={currentSong.title}
          className={styles.musicCover}
        />
        <div className={styles.musicText}>
          <h3 className={styles.musicTitle}>{currentSong.title}</h3>
          <p className={styles.musicArtist}>{currentSong.artist}</p>
        </div>
      </div>

      {/* Middle: Controls */}
      <div className={styles.musicControls}>
        <button className={styles.musicBtn} onClick={prevSong}>
          <SkipBack size={20} />
        </button>
        
        <button className={`${styles.musicBtn} ${styles.playBtn}`} onClick={togglePlay}>
          {isPlaying ? <Pause size={20} fill="currentColor"/> : <Play size={20} fill="currentColor" />}
        </button>

        <button className={styles.musicBtn} onClick={nextSong}>
          <SkipForward size={20} />
        </button>
      </div>

      {/* Bottom: Progress Bar */}
      <div className={styles.progressWrapper}>
        <div className={styles.barFull}>
          <div 
            className={styles.barFill} 
            style={{ width: `${progressPercent}%` }}
          />
        </div>
        <div className={styles.progressTimes}>
          <span>{formatTime(currentTime)}</span>
          <span>{formatTime(duration)}</span>
        </div>
      </div>
    </div>
  );
};

export default MusicCard;