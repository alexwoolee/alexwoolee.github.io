// .. => "go up one folder"
// currently in src/components/Title.js, image is in src/assets/bg-1.png
// to reach assets/ from components/, you go up one level to src/, then into assets/
import { HashLink } from "react-router-hash-link";

export default function FrontPage() {
  return (  
    <>
      <div id="star-container">
      <div id="star-pattern"></div>
        <div className="front-sec">
          <h1 id="heading-big">Alex Lee</h1>
          <h3 id="heading-small">Alex Lee</h3>
          <h1>Software Developer</h1>
          <a href="#project" className="bg-green-400 p-2 m-4 border-0 rounded-2xl hover:bg-yellow-400">View Projects</a>
        </div>
      </div>
    </>

  );
}