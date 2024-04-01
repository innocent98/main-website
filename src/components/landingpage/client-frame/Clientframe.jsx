import React from 'react'
import "./clientframe.scss"
import image1 from "../../../assets/IMGs frame1.png"

const Clientframe = () => {
  return (
    <div className='client-frame'>

        <div className='section-title'>
        <div>For clients</div>
        <h2>Hire professional talents</h2>
        <p>Collaborate with an extensive community of skilled freelancers to accomplish tasks—whether it's fast-paced projects or substantial transformations.</p>
        <div className='btn'>Hire Talents</div>
        </div>

        <div className='section-image'>
          <img src={image1} alt='client'/>
        </div>
       
    </div>
  )
}

export default Clientframe