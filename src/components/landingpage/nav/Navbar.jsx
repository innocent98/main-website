import React from 'react'
import "./navbar.scss"
import logo from "../../../assets/logo.svg"



const Navbar = () => {
  return (
    <nav>
        <div className='left-nav'>
            <img src={logo} alt='logo'/>
        </div>
        <div className='mid-nav'>
            <ul>
                <li>Home</li>
                <li>About Us</li>
                <li>FAQs</li>
                <li>Affiliate Program</li>
                <li>Contact Us</li>
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