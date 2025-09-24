import React from 'react'

const ProjInfo = ({ authors, img, title, txt, github, figma, live }) => {
  return (
    <div id="proj-info-display">
      <p id="proj-authors">{authors}</p>
      <img src={img} alt="temp" id="proj-lg-img"></img>
      <h1 id="proj-lg-title">{title}</h1>
      <p>{txt}</p>
      <div id="github-links">
        {/* github repo */}
        <div className="github-link">
          <img src="https://raw.githubusercontent.com/CLorant/readme-social-icons/main/large/light/github.svg" alt="github icon" />
        </div>
        {/* figma */}
        <div className="github-link">
          <img src="src/assets/figma-logo.svg" />
        </div>
        {/* live demo */}
        <div className="github-link">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><g fill="none" fill-rule="evenodd"><path d="M18 14v5a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8c0-1.1.9-2 2-2h5M15 3h6v6M10 14L20.2 3.8"/></g></svg>
        </div>
      </div>
    </div>
  )
}

export default ProjInfo
