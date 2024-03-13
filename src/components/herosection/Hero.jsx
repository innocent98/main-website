import React from 'react'
import "./hero.scss"
import congratulations from "../../assets/Congratulations 1.png"
import image1 from "../../assets/IMG Frame.png"

const hero = () => {
  return (
    <div className='hero-section'>
      <div>
            <div className='header-text'>
                <h1>Unlock YOur Potential: Find Exceptional Freelance <br/>Services</h1>
                <p>Your Gateway to Exceptional Freelance Talent and Projects! Explore a World of Possibilities <br/> – Hire Top Talent or Showcase Your Skills to a Global Marketplace.</p>
                <div className='btn'>Get Started</div>
            </div>
            <img src={congratulations} alt='congratulations'/>
      </div>
       
        <div className='image-frame'>
          <img src={image1}/>
        </div>
    </div>
  )
}

export default hero