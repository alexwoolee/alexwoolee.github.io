import AOS from "aos";
import "aos/dist/aos.css";
import ratProfile from '../assets/rat.jpg'
import dogProfile from '../assets/green_dog_pixel.png'

// opacity, transform, box-sizing
// icons from: https://github.com/CLorant/readme-social-icons

const About = () => {
  return (
    <>
    <h1 className="text-center text-amber-50 m-16" id="about-title">About Me </h1>
    <div className="about-section" data-aos="fade-up" id="about">

      <div className="flex flex-row">
        <div className="bg-amber-300 w-72" id="profile-container">
          <img src={dogProfile} alt="picture of me" id="profile"/>
        </div>
      </div>

      <div className="about-content">
        <div className="about-text">
          <h1 className="font-bold">Name</h1>
          <p>ALEX LEE</p>
          <h1 className="font-bold">About</h1>
          <p className="text-justify">
            Alex is a developer based in Canada with a passion for building creative and impactful digital experiences. Currently in his second year at Simon Fraser University, he is pursuing a degree in Computing Science, where he continues to strengthen his skills in software development and problem-solving. Alex enjoys bringing ideas to life through code, whether it's crafting intuitive user interfaces, or experimenting with new technologies, he hopes to solve real-world problems using digital solutions.
          </p>
          <h1 className="font-bold">Bio</h1>
          <p>Born in 2005.</p>
          <h1 className="font-bold">Hobbies</h1>
          <p>Coding, Drawing, Gaming, Music</p>
          <h1 className="font-bold">Socials</h1>
            <ul>
              <li className="social-icons"><a href="https://github.com/alexwoolee" target="_blank"><img src="https://raw.githubusercontent.com/CLorant/readme-social-icons/main/large/light/github.svg" alt="github icon" /></a></li>
              <li className="social-icons"><a href="https://github.com/alexwoolee" target="_blank"><img src="https://raw.githubusercontent.com/CLorant/readme-social-icons/main/large/light/twitter-x.svg" alt="github icon" /></a></li>
              <li className="social-icons"><a href="https://github.com/alexwoolee" target="_blank"><img src="https://raw.githubusercontent.com/CLorant/readme-social-icons/main/large/light/linkedin.svg" alt="github icon" /></a></li>
              <li className="social-icons"><a href="https://github.com/alexwoolee" target="_blank"><img src="https://raw.githubusercontent.com/CLorant/readme-social-icons/main/large/light/discord.svg" alt="github icon" /></a></li>
              <li className="social-icons"><a href="https://github.com/alexwoolee" target="_blank"><img src="https://raw.githubusercontent.com/CLorant/readme-social-icons/main/large/light/instagram.svg" alt="github icon" /></a></li>
            </ul>
        </div>
      </div>
      
    </div> 
    </>
  );
}  

export default About; 