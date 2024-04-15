import React from 'react'
import Logo from '../../atoms/logo/Logo';
import NavLink from '../../molecules/navlink/NavLink';
import Button from '../../atoms/button/Button';
import logo from "../../assets/logo.svg";
import "./navbar.scss"

const Navbar = () => (
    <nav>
      <div className="left-nav">
        <Logo src={logo} alt="logo" />
      </div>
      <div className="mid-nav">
        <ul>
          <NavLink to="/">Home</NavLink>
          <NavLink to="/about">About Us</NavLink>
          <NavLink to="/faq">FAQs</NavLink>
          <NavLink to="/affiliate">Affiliate Program</NavLink>
          <NavLink to="/contact">Contact Us</NavLink>
        </ul>
      </div>
      <div className="right-nav">
        <NavLink to="/signin">Log In</NavLink>
        <NavLink to="/signup">
          <Button
          classname="sign-up"
          buttonText="Sign Up"/>
        </NavLink>
      </div>
    </nav>
  );
  
  export default Navbar;