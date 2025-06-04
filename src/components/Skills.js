import { useState } from "react";

const Skill = () => {
  return (
      <div className="skill-sec" id="skill">
        <h1>Technical Skills</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Error, est quod. Vel, sunt! Facere fugit, aspernatur numquam omnis provident unde vitae quae sequi reiciendis, deleniti consequatur ex magni libero corporis. Lorem ipsum dolor sit amet consectetur adipisicing elit. Error, est quod. Vel, sunt! Facere fugit, aspernatur numquam omnis provident unde vitae quae sequi reiciendis, deleniti consequatur ex magni libero corporis. Lorem ipsum dolor sit amet consectetur adipisicing elit. Error, est quod. Vel, sunt! Facere fugit, aspernatur numquam omnis provident unde vitae quae sequi reiciendis, deleniti consequatur ex magni libero corporis.
        </p>
        <div className="skill-icons">
          <div id="languages"></div>
            <div className="square"></div>
            <div className="square"></div>
            <div className="square"></div>
          <div id="frameworks"></div>
            <div className="square"></div>
            <div className="square"></div>
            <div className="square"></div>
          <div id="tools"></div>
            <div className="square"></div>
            <div className="square"></div>
            <div className="square"></div>
        </div>
      </div> 
  );
}  

export default Skill