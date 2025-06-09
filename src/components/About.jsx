import AOS from "aos";
import "aos/dist/aos.css";
import ratProfile from '../assets/rat.jpg'
import { useState } from "react";

const About = () => {

  const [count, setCount] = useState(0);

  return (
    <div className="about-section" data-aos="fade-up" id="about">
      <h1 className="text-yellow-300" id="about-title">About Me</h1>

      <div className="about-content">
        <img src={ratProfile} alt="picture of me" />
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Error, est quod. Vel, sunt! Facere fugit, aspernatur numquam omnis provident unde vitae quae sequi reiciendis, deleniti consequatur ex magni libero corporis. Lorem ipsum dolor sit amet consectetur adipisicing elit. Error, est quod. Vel, sunt! Facere fugit, aspernatur numquam omnis provident unde vitae quae sequi reiciendis, deleniti consequatur ex magni libero corporis. Lorem ipsum dolor sit amet consectetur adipisicing elit. Error, est quod. Vel, sunt! Facere fugit, aspernatur numquam omnis provident unde vitae quae sequi reiciendis, deleniti consequatur ex magni libero corporis.
        </p>
      </div>

    </div> 
  );
}  

export default About; 