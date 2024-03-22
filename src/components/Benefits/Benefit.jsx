import React from 'react'
import "./benefits.scss"
import image1 from "../../assets/Frame 30.png"
import icon from "../../assets/Icon.png"


const Benefit = () => {
  return (
    <div className='benefit'>
        <div className='benefit-contents'>
            <h2>Zealworkers Affiliate Benefits</h2>
            <ul>
            
                <li>
                    <h3>Commisions</h3>
                    <p>Get 70% of the first contract have a share of upto $150 on every new client refer to the network.</p>
                </li>

                <li>
                    <h3>Support</h3>
                    <p>With the help of zealworkers dedicated affiliate team, you will have your questions answered and receive which ever help you need</p>
                </li>

                <li>
                    <h3>Resources</h3>
                    <p>As an affiliate, you will have access to regularly refresh logo, ads and banners to help optimize conversation.</p>
                </li>
            </ul>
        </div>
        <div className='benefit-image'>
            <img src={image1}/>
        </div>

    </div>
  )
}

export default Benefit