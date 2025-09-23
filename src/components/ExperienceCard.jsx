import React from 'react'

const ExperienceCard = ({ img, title, txt, period, company }) => {
  return (
    <div className='exp'>
      <img src={img} className='exp-img'></img>
      <div className='exp-txt'>
        <h1 className='company'>{company}</h1>
        <h2 className='exp-title'>{title}</h2>
        <h3 className='exp-period'>{period}</h3>
        <p className='exp-desc'>{txt}</p>  
      </div>
    </div>
  )
}

export default ExperienceCard
