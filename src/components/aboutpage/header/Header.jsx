import React from 'react'
import "./header.scss"
import imageFrame from "../../../assets/IMG Frame.png"

const Header = () => {
  return (
    <div className='container header'>
      <h1>About Us</h1>
        <div className='header-content'>
          <div className='header-image'>
          <img src={imageFrame} alt='icon'/>
          </div>
          <div className='header-text'>
            <p>Zealworkers is a freelancing marketplace established in the year 2019, with the aim of bridging the gap between freelancers and potential client in need of skillful and resourceful zealous worker.
              Zealworkers set itself aside from the traditional market place by solving the issue of cross border transaction in digital marketplace and complexity in the user experience by integrating Blockchain technology and simple user interface.
              </p>
          </div>
  
        </div>
    </div>
  )
}

export default Header