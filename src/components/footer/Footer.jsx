import React from 'react'
import "./footer.scss"
import logo from "../../assets/logo.svg"
import facebook from "../../assets/Vectr.png"
import linkedin from "../../assets/Vectors.png"
import twiter from "../../assets/Ver.png"




const Footer = () => {
  return (
    <footer>
        <div className='top'>
            <div className='footer-left'>
                <img src={logo} alt='logo'/>
                <p>Zealworkers is a digital marketplace set to enhance the way we interact with digital marketplace and enable a 
                  more swift and scalable transaction system by enabling Blockchain integration into the zealworker ecosystem.</p>
                <div className='socials'>
                  <div className='circle'><img src={facebook} alt='social'/></div>
                  <div className='circle'><img src={linkedin} alt='social'/></div>
                  <div className='circle'><img src={twiter} alt='social'/></div>
                  
                  

                </div>
            </div>
            <div className='footer-right'>
                <ul>
                  <h3>Company</h3>
                  <li>About us</li>
                  <li>Contact us</li>
                  <li>FAQs</li>
                  <li>How it works</li>
                </ul>

                <ul>
                  <h3>Product</h3>
                  <li>Affiliate Program</li>
                  <li>Zealworker Token</li>
                  <li>FAQs</li>
                </ul>

                <ul>
                  <h3>Legal</h3>
                  <li>Terms of Service</li>
                  <li>Privacy Policy</li>
                </ul>

                <ul>
                  <h3>up</h3>
                
                </ul>
            </div>
        </div>
        <hr/>
        <div className='down'>
          <p>&copy; 2024 Zealworkers.</p>
          <select>
            <option value="English">English</option>
            <option value="Spanish">Spanish</option>
            <option value="Arabic">Arabic</option>
          </select>
         
          
        </div>
    </footer>
  )
}

export default Footer