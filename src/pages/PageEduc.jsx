import React from 'react'
import SFU from '../assets/education/SFU.png'
import "../styles/educ.css"

const Education = () => {
  return (
    <div id="edu-container">
      {/* University Information */}
      <div id="uni-section">
        <img id="uni-logo" src={SFU} className='w-48'></img>
        <h1 id="uni">Simon Fraser University</h1>
        <h2 id="uni-location">Burnaby, BC</h2>
        <h2 id="uni-range">(09/03/2023 - Ongoing)</h2>
        <h2 id="degree">Computing Science</h2>
      </div>

      {/* Specialized Courses */}
      <h1 className="edu-section-title">Specialized Courses</h1>
      
      <div className="course-category">
        <h3 className='course-category-title'>Computer Systems</h3>
        <ul>
          <li className="course-item">CMPT276 - Software Engineering</li>
          <li className="course-item">CMPT263 - System Programming</li>
          <li className="course-item">CMPT201 - Computer Systems</li>
          <li className="course-item">CMPT295 - Introduction to Computer Systems</li>
        </ul>
      </div>

      <div className="course-category">
        <h3 className='course-category-title'>Machine Learning</h3>
        <ul>
          <li className="course-item">CMPT310 - Artificial Intelligence Survey</li>
        </ul>
      </div>

      <div className="course-category">
        <h3 className='course-category-title'>Software Engineering</h3>
        <ul>
          <li className="course-item">CMPT276 - Software Engineering</li>
          <li className="course-item">CMPT354 - Database Systems I</li>
        </ul>
      </div>

      <div className="course-category">
        <h3 className='course-category-title'>Data Structures & Algorithms</h3>
        <ul>
          <li className="course-item">CMPT225 - Data Structures and Programming</li>
          <li className="course-item">CMPT307 - Data Structures and Algorithms</li>
          <li className="course-item">CMPT405 - Design and Analysis of Computing Algorithms</li>
        </ul>
      </div>

      {/* Additional Sections */}
      <h1 className="edu-section-title">Certifications</h1>
      <ul>
        <li className="edu-point">Certification placeholder - Coming soon</li>
      </ul>

      <h1 className="edu-section-title">Relevant Coursework</h1>
      <ul>
        <li className="edu-point">Web Development and Internet Systems</li>
        <li className="edu-point">Human-Computer Interaction</li>
        <li className="edu-point">Computer Graphics</li>
        <li className="edu-point">Operating Systems</li>
      </ul>
    </div>
  )
}

export default Education
