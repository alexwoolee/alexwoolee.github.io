import React from 'react'
import yachiyo from "../assets/about/yachiyo.png"
import bojji from "../assets/about/ousama-ranking-bojji.gif";
import "../styles/about.css"

/*
Section 1: Picture, Name, Title, Contact links
Resume Link
Section 2: Short biography
Section 3: Code tools 
Section 4: Best Projects
Section 5: Long biography
*/

const NewAbout = () => {
  return (
    <div id="about-content">
      <div id="about-top" className='flex md:flex-row flex-col'>
        <img src={bojji} className='w-64 h-64 border rounded-xl border-transparent object-cover' id="profile"></img>
        <div>
          <h1 id="about-title">Alex Woo Lee</h1>
          <h2 id="profession">Software Developer</h2>
          <ul id="socials">
            <li className="social-icon"><a href="https://github.com/alexwoolee" target="_blank"><img src="https://raw.githubusercontent.com/CLorant/readme-social-icons/main/large/light/github.svg" alt="github icon" /></a></li>
            <li className="social-icon"><a href="https://x.com/wooalexlee" target="_blank"><img src="https://raw.githubusercontent.com/CLorant/readme-social-icons/main/large/light/twitter-x.svg" alt="X icon" /></a></li>
            <li className="social-icon"><a href="https://www.linkedin.com/in/alex-lee-868008287/" target="_blank"><img src="https://raw.githubusercontent.com/CLorant/readme-social-icons/main/large/light/linkedin.svg" alt="linkedin icon" /></a></li>
            <li className="social-icon"><a href="http://discordapp.com/users/423544690646712330" target="_blank"><img src="https://raw.githubusercontent.com/CLorant/readme-social-icons/main/large/light/discord.svg" alt="discord icon" /></a></li>
            <li className="social-icon"><a href="https://www.instagram.com/wooalexlee/" target="_blank"><img src="https://raw.githubusercontent.com/CLorant/readme-social-icons/main/large/light/instagram.svg" alt="instagram icon" /></a></li>
          </ul>
        </div>
      </div>
      <p id="about-bio">
        Alex is a developer based in Canada with a passion for building creative and impactful digital experiences. Currently in his second year at Simon Fraser University, he is pursuing a degree in Computing Science, where he continues to strengthen his skills in software development and problem-solving. Alex enjoys bringing ideas to life through code, whether it's crafting intuitive user interfaces, or experimenting with new technologies, he hopes to solve real-world problems using digital solutions.
        <br/><br/>
        A little about me, I was born in April 2005 in Canada, with a Taiwanese, Korean background. I can speak English, Chinese, and I’m currently learning Japanese at the N5 level. In my free time, I like to develop fun side projects through code, draw, cook different recipes, watch anime, play sports, and listen to music. My favorite genres in music are VGM, Japanese music and jazz. 
        <br/><br/>
        In the future I hope that I can help connect people and make people happy! 
        <br/><br/>
      </p>
    </div>
  )
}

export default NewAbout
