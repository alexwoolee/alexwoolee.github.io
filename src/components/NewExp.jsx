import React from 'react'
import ExperienceCard from './ExperienceCard'
/* img assets */
import sirshinu from '../assets/sirshinu.png'
import HMART from '../assets/HMART.jpeg'
import MOCC from '../assets/MOCC.png'

const NewExp = () => {
  return (
    <div id='exp-container'> 
      <h1 className='exp-type'>Techinical Work Experience</h1>
      <p className='font-thin'>N/A</p>
    

      <h1 className='exp-type'>Work Experience</h1>
      <ExperienceCard img={HMART} company="H-Mart" title="Grocery Clerk" period="Sep. 2023 - Aug. 2024" txt="text">
      </ExperienceCard>

      <h1 className='exp-type'>Events</h1>
      <ExperienceCard img={sirshinu} company="SFU" title="Fall Hacks 2025" period="Sep. 27th 2025" txt="text">
      </ExperienceCard>

      <ExperienceCard img={sirshinu} company="SFU" title="Surge 2025" period="Sep. 27th 2025" txt="text">
      </ExperienceCard>

      <ExperienceCard img={sirshinu} company="Actuarial Students' National Association (ASNA)" title="ASNA Case Competition 2026" period="Sep. 27th 2025" txt="text">
      </ExperienceCard>

      <h1 className='exp-type'>Volunteering</h1>
      <ExperienceCard img={MOCC} company="Marpole Oakridge Community Centre" title="Marpole Community Food Hub" period="Sep. 2022 - Dec. 2022" txt="text">
      </ExperienceCard>
    </div>
  )
}

export default NewExp
