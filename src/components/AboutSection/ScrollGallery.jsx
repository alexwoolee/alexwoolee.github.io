import { useRef } from "react";
// Importing icons from lucide-react
import { ChevronLeft, ChevronRight } from 'lucide-react';
// Importing gallery images
import Osaka from "../../assets/gallery/osaka-night.png";
import Gold from "../../assets/gallery/gold-gold-gold.png";
import Bird from "../../assets/gallery/bird-pond.png";
/* Styles */
import styles from './about.module.css';

const ScrollGallery = () => {
  const galleryRef = useRef(null);

  const scrollLeft = () => {
    if (galleryRef.current) {
      galleryRef.current.scrollBy({
        top: 0,
        left: -260,
        behavior: "smooth",
      });
    }
  };

  const scrollRight = () => {
    if (galleryRef.current) {
      galleryRef.current.scrollBy({
        top: 0,
        left: 260,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className={styles.galleryWrapper}>
      <div 
        className={`${styles.chevron} ${styles.chevronLeft}`} 
        onClick={scrollLeft}
      >
        <ChevronLeft color="white" />
      </div>

      <div className={styles.galleryCtn} ref={galleryRef}>
        <img src={Osaka} alt="photo" className={styles.galleryPic} />
        <img src={Gold} alt="photo" className={styles.galleryPic} />
        <img src={Bird} alt="photo" className={styles.galleryPic} />
        <img src={Osaka} alt="photo" className={styles.galleryPic} />
        <img src={Gold} alt="photo" className={styles.galleryPic} />
        <img src={Bird} alt="photo" className={styles.galleryPic} />
        <img src={Osaka} alt="photo" className={styles.galleryPic} />
        <img src={Gold} alt="photo" className={styles.galleryPic} />
        <img src={Bird} alt="photo" className={styles.galleryPic} />
      </div>

      <div 
        className={`${styles.chevron} ${styles.chevronRight}`} 
        onClick={scrollRight}
      >
        <ChevronRight color="white" />
      </div>
    </div>
  );
};

export default ScrollGallery;