import { useState } from "react";

export default function About() {

  const [count, setCount] = useState(0);

  return (
    <div className="about-sec">
      <h1>About Me</h1>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Error, est quod. Vel, sunt! Facere fugit, aspernatur numquam omnis provident unde vitae quae sequi reiciendis, deleniti consequatur ex magni libero corporis. Lorem ipsum dolor sit amet consectetur adipisicing elit. Error, est quod. Vel, sunt! Facere fugit, aspernatur numquam omnis provident unde vitae quae sequi reiciendis, deleniti consequatur ex magni libero corporis. Lorem ipsum dolor sit amet consectetur adipisicing elit. Error, est quod. Vel, sunt! Facere fugit, aspernatur numquam omnis provident unde vitae quae sequi reiciendis, deleniti consequatur ex magni libero corporis. Lorem ipsum dolor sit amet consectetur adipisicing elit. Error, est quod. Vel, sunt! Facere fugit, aspernatur numquam omnis provident unde vitae quae sequi reiciendis, deleniti consequatur ex magni libero corporis.</p>
      <button onClick={() => setCount(count + 1)}>
        Click me! | count: {count}
      </button>   
    </div> 
  );
}  