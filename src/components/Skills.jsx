// https://github.com/Ileriayo/markdown-badges
const Skill = () => {
  return (
    <div className="skill-sec" id="skill">
      <h1 id="skill-title">Technical Skills</h1>
      <div className="skill-icons grid grid-cols-1 lg:grid-cols-2 gap-8 place-items-center w-full max-w-4xl mx-auto">

        <div className="skill-container flex flex-col justify-center items-center">
          <h1 id="skill-small-title">Languages</h1>
          <div id="languages" className="min-h-[234px]">
            <img src="https://img.shields.io/badge/c-%2300599C.svg?style=for-the-badge&logo=c&logoColor=white" alt="C" />
            <img src="https://img.shields.io/badge/c++-%2300599C.svg?style=for-the-badge&logo=c%2B%2B&logoColor=white" alt="C++" />
            <img src="https://img.shields.io/badge/python-3670A0?style=for-the-badge&logo=python&logoColor=ffdd54" alt="Python" />
            <img src="https://img.shields.io/badge/html5-%23E34F26.svg?style=for-the-badge&logo=html5&logoColor=white" alt="HTML5" />
            <img src="https://img.shields.io/badge/css3-%231572B6.svg?style=for-the-badge&logo=css3&logoColor=white" alt="CSS3" />
            <img src="https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E" alt="JavaScript" />
            <img src="https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white" alt="TypeScript" />
          </div>
        </div>

        <div className="skill-container flex flex-col justify-center items-center">
          <h1 id="skill-small-title">Frameworks & Libraries</h1>
          <div id="frameworks" className="min-h-[234px]"> 
            <img src="https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB" alt="React" />
            <img src="https://img.shields.io/badge/tailwindcss-%2338B2AC.svg?style=for-the-badge&logo=tailwind-css&logoColor=white" alt="tailwindcss" />
            <img src="https://img.shields.io/badge/vite-%23646CFF.svg?style=for-the-badge&logo=vite&logoColor=white" alt="Vite" />
            <img src="https://img.shields.io/badge/threejs-black?style=for-the-badge&logo=three.js&logoColor=white" alt="Threejs" />
          </div>
        </div>

        <div className="skill-container flex flex-col justify-center items-center">
          <h1 id="skill-small-title">Environments</h1>
          <div id="envir" className="min-h-[234px]">
            <img src="https://img.shields.io/badge/Visual%20Studio%20Code-0078d7.svg?style=for-the-badge&logo=visual-studio-code&logoColor=white" alt="Visual Studio Code" />
          </div>
        </div>

        <div className="skill-container flex flex-col justify-center items-center">
          <h1 id="skill-small-title">Tools & Technologies</h1>
          <div id="envir" className="min-h-[234px]">
            <img src="https://img.shields.io/badge/git-%23F05033.svg?style=for-the-badge&logo=git&logoColor=white" alt="Git" />
            <img src="https://img.shields.io/badge/Linux-FCC624?style=for-the-badge&logo=linux&logoColor=black" alt="Linux" />
            <img src="https://img.shields.io/badge/vercel-%23000000.svg?style=for-the-badge&logo=vercel&logoColor=white" alt="Linux" />
          </div>
        </div>

      </div>
    </div> 
  );
  }  

export default Skill