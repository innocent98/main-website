import React from 'react'
import imageframe from "../../assets/IMG Frame2.png"
import "./affiliate.scss"
import Button from '../../atoms/button/Button'

const Affiliate = () => {
  return (
    <div className='container header'>
  
      <div className='header-content'>
      <div className='header-text'>
          <h1>Become An Affilliate</h1>
          <p>Are you passionate about remote work and helping others find fulfilling career opportunities? Join ZealWorkers as an affiliate and start earning commissions today!</p>
          <p>As a ZealWorkers affiliate, you'll have access to exclusive resources and support to help you succeed.</p>
          <Button buttonText="Referral Link"/>
        </div>

        <div className='header-image'>
        <img src={imageframe} alt='icon'/>
        </div>
       

      </div>
  </div>
  )
}

export default Affiliate