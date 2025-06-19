const Contact = () => {
  return (
    <div className="contact-sec flex flex-col md:flex-row" id="contact">

      <div className="contact-sec-left">
        <div className="flex flex-col items-start">
          <h1 className="text-white text-4xl">Contact</h1>
          <h1 className="text-white text-1xl">email: wooalexlee@gmail.com</h1>
        </div>
        <p className="text-white/70 hover:text-white transition">Developed by @Alex Lee</p>
      </div> 

      <div className="contact-sec-right">
        <ul>
          <li className="social-icons"><a href="https://github.com/alexwoolee" target="_blank"><img src="https://raw.githubusercontent.com/CLorant/readme-social-icons/main/large/light/github.svg" alt="github icon" /></a></li>
          <li className="social-icons"><a href="https://x.com/wooalexlee" target="_blank"><img src="https://raw.githubusercontent.com/CLorant/readme-social-icons/main/large/light/twitter-x.svg" alt="X icon" /></a></li>
          <li className="social-icons"><a href="https://www.linkedin.com/in/alex-lee-868008287/" target="_blank"><img src="https://raw.githubusercontent.com/CLorant/readme-social-icons/main/large/light/linkedin.svg" alt="linkedin icon" /></a></li>
          <li className="social-icons"><a href="http://discordapp.com/users/423544690646712330" target="_blank"><img src="https://raw.githubusercontent.com/CLorant/readme-social-icons/main/large/light/discord.svg" alt="discord icon" /></a></li>
          <li className="social-icons"><a href="https://www.instagram.com/wooalexlee/" target="_blank"><img src="https://raw.githubusercontent.com/CLorant/readme-social-icons/main/large/light/instagram.svg" alt="instagram icon" /></a></li>
        </ul>
      </div>

    </div>
  );
}  

export default Contact;