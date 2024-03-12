import React from 'react'
import "./navbar.scss"



const Navbar = () => {
  return (
    <nav>
        <div className='left-nav'>
            <img src= "" alt='logo'/>
        </div>
        <div className='mid-nav'>
            <ul>
                <li>Home</li>
                <li>About Us</li>
                <li>FAQs</li>
                <li>Affiliate Program</li>
                <li>Contact us</li>
            </ul>
        </div>
        <div className='right-nav'>
            <div className='login'>Log In</div>
            <div className='signup'>Sign Up</div>
        </div>
    </nav>
  )
}

export default Navbar