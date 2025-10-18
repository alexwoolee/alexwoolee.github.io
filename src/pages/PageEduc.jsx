import React from 'react'

const Education = () => {
  return (
    <div id="edu-container">
      <div className='section-bg'></div>

      <img id="uni-logo" src="src/assets/education/SFU.png" className='w-48'></img>
      <h1 id="uni">Simon Fraser University</h1>
      <h2 id="uni-location">Burnaby, BC</h2>
      <h2 id="uni-range">(09/03/2023 - Ongoing)</h2>
      <h2 id="degree">Computing Science</h2>
      <h2 id="courses">Specialized Courses</h2>
      <div>
        <h3 className='special'>Computer Systems</h3>
        <ul>
          <li>- CMPT276</li>
          <li>- CMPT263</li>
          <li>- CMPT201</li>
          <li>- CMPT295</li>
        </ul>
        <h3 className='special'>Machine Learning</h3>
        <h3 className='special'>Software Engineering</h3>
        <h3 className='special'>Data Structures & Algorithms</h3>
      </div>
    </div>
  )
}

export default Education
