import { useRef } from "react";
// Importing icons from lucide-react
import { ChevronLeft, ChevronRight } from 'lucide-react';
// Importing gallery images
import Osaka from "../../assets/gallery/osaka-night.png";
import Gold from "../../assets/gallery/gold-gold-gold.png";
import Bird from "../../assets/gallery/bird-pond.png";

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
        left: 260   ,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="gallery-wrapper">
      <div className="chevron" onClick={scrollLeft}>
        <ChevronLeft color="white" />
      </div>
      <div className="gallery-ctn" ref={galleryRef}>
        <img src={Osaka} alt="photo" className="gallery-pic" />
        <img src={Gold} alt="photo" className="gallery-pic" />
        <img src={Bird} alt="photo" className="gallery-pic" />
        <img src={Osaka} alt="photo" className="gallery-pic" />
        <img src={Gold} alt="photo" className="gallery-pic" />
        <img src={Bird} alt="photo" className="gallery-pic" />
        <img src={Osaka} alt="photo" className="gallery-pic" />
        <img src={Gold} alt="photo" className="gallery-pic" />
        <img src={Bird} alt="photo" className="gallery-pic" />
      </div>
      <div className="chevron" onClick={scrollRight}>
        <ChevronRight color="white" />
      </div>
    </div>
  );
};

export default ScrollGallery;
