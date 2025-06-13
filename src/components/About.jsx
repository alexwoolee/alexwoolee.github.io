import AOS from "aos";
import "aos/dist/aos.css";
import ratProfile from '../assets/rat.jpg'

// opacity, transform, box-sizing
// icons from: https://github.com/CLorant/readme-social-icons

const About = () => {
  return (
    <div className="about-section" data-aos="fade-up" id="about">
      <div className="flex flex-row">
        <div className="flex flex-col about-text">
          <h1 className="text-center" id="about-title">Alex Lee</h1>
          <p>( Software Developer )</p>
        </div>
        <img src={ratProfile} alt="picture of me" id="profile"/>
      </div>
      <div className="about-content">
        <div className="about-text">
          <h1 className="font-bold">What I Do</h1>
          <div className="bg-gray-700 h-1 rounded-2xl w-19"></div>
          <p className="text-justify">
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Alex is a developer based in Canada with a passion for building creative digital services/stuff. Currently, he is a second year attending Simon Fraser's University Computing Science Program. He has a strong interest in developing meaningful and creative apps to solve real-life problems using code.
          </p>
          <h1 className="font-bold">Bio</h1>
          <div className="bg-gray-700 h-1 rounded-2xl w-6"></div>
          <p>Born in 2005.</p>
          <h1 className="font-bold">Likes</h1>
          <div className="bg-gray-700 h-1 rounded-2xl w-10"></div>
          <p>Coding, Drawing, Gaming, Music</p>
          <h1 className="font-bold">Socials</h1>
          <div className="bg-gray-700 h-1 rounded-2xl w-14"></div>
          <ul>
            <li><a href="https://github.com/alexwoolee" target="_blank"><img src="https://raw.githubusercontent.com/CLorant/readme-social-icons/main/large/light/github.svg" alt="github icon" /></a></li>
            <li><a href="https://github.com/alexwoolee" target="_blank"><img src="https://raw.githubusercontent.com/CLorant/readme-social-icons/main/large/light/twitter-x.svg" alt="github icon" /></a></li>
            <li><a href="https://github.com/alexwoolee" target="_blank"><img src="https://raw.githubusercontent.com/CLorant/readme-social-icons/main/large/light/linkedin.svg" alt="github icon" /></a></li>
            <li><a href="https://github.com/alexwoolee" target="_blank"><img src="https://raw.githubusercontent.com/CLorant/readme-social-icons/main/large/light/discord.svg" alt="github icon" /></a></li>
            <li><a href="https://github.com/alexwoolee" target="_blank"><img src="https://raw.githubusercontent.com/CLorant/readme-social-icons/main/large/light/instagram.svg" alt="github icon" /></a></li>
          </ul>
        </div>
      </div>
    </div> 
  );
}  

export default About; 