import React from 'react'
import "./frelancerframe.scss"
import image1 from "../../assets/Asset 4figma 1.png"

const FrelancerFrame = () => {
  return (
    <div className='frelancer-frame'>

        <div className='section-image'>
          <img src={image1} alt='client'/>
        </div>
     
     
        <div className='section-title'>
        <div>For freelancers</div>
        <h2> Browse for your job choice </h2>
        <p>Connect with inspiring clients who fuel your enthusiasm and elevate your career or business to unprecedented levels.</p>
        <div className='btn'>Find Jobs</div>
        </div>
      
        
        

    </div>
  )
}

export default FrelancerFrame