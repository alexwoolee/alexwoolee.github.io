import AOS from "aos";
import "aos/dist/aos.css";
import dogProfile from '../assets/green_dog_pixel.png'

// opacity, transform, box-sizing

// - fix about me layout with responsive layout
// - add fades to content
// - edit issues 

const About = () => {
  return (
    <div data-aos="fade-up">
      <h1 className="text-center text-amber-50 m-16" id="about-title">About Me </h1>
      <div className="about-section flex flex-col md:flex-row" id="about">

        <div id="profile-container" className="w-full md:w-auto flex justify-center">
          <img src={dogProfile} alt="picture of me" id="profile" className="border-0 rounded-xl pt-8 md:pt-38 lg:w-3/5"/>
        </div>

        <div className="about-content w-full lg:w-3/5">
          <div className="about-text">
            <h1 className="font-bold">Name</h1>
            <p>ALEX (WOO) LEE</p>
            <h1 className="font-bold">About</h1>
            <p className="text-justify">
              Alex is a developer based in Canada with a passion for building creative and impactful digital experiences. Currently in his second year at Simon Fraser University, he is pursuing a degree in Computing Science, where he continues to strengthen his skills in software development and problem-solving. Alex enjoys bringing ideas to life through code, whether it's crafting intuitive user interfaces, or experimenting with new technologies, he hopes to solve real-world problems using digital solutions.
            </p>
            <h1 className="font-bold">Bio</h1>
            <p>Born in April 2005 --- Taiwanese, Korean, Canadian --- Languages: English, Mandarin, Japanese</p>
            <h1 className="font-bold">Hobbies</h1>
            <p>Coding, Drawing, Gaming, Music, Anime</p>
            <h1 className="font-bold">Socials</h1>
            <ul>
              <li className="social-icons"><a href="https://github.com/alexwoolee" target="_blank"><img src="https://raw.githubusercontent.com/CLorant/readme-social-icons/main/large/light/github.svg" alt="github icon" /></a></li>
              <li className="social-icons"><a href="https://x.com/wooalexlee" target="_blank"><img src="https://raw.githubusercontent.com/CLorant/readme-social-icons/main/large/light/twitter-x.svg" alt="X icon" /></a></li>
              <li className="social-icons"><a href="https://www.linkedin.com/in/alex-lee-868008287/" target="_blank"><img src="https://raw.githubusercontent.com/CLorant/readme-social-icons/main/large/light/linkedin.svg" alt="linkedin icon" /></a></li>
              <li className="social-icons"><a href="http://discordapp.com/users/423544690646712330" target="_blank"><img src="https://raw.githubusercontent.com/CLorant/readme-social-icons/main/large/light/discord.svg" alt="discord icon" /></a></li>
              <li className="social-icons"><a href="https://www.instagram.com/wooalexlee/" target="_blank"><img src="https://raw.githubusercontent.com/CLorant/readme-social-icons/main/large/light/instagram.svg" alt="instagram icon" /></a></li>
            </ul>
          </div>
        </div>

      </div> 
    </div>
  );
}  

export default About; 