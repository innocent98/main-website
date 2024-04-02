import React from "react";
import "./navbar.scss";
import logo from "../../../assets/logo.svg";
import { Link } from "react-router-dom";
import Button from "../../../atomic/atoms/button/Button";

const Navbar = () => {
  return (
    <nav>
      <div className="left-nav">
        <img src={logo} alt="logo" />
      </div>
      <div className="mid-nav">
        <ul>
          <Link className="link" to="/">
            <li>Home</li>
          </Link>
          <Link className="link" to="/about">
            <li>About Us</li>
          </Link>
          <Link className="link" to="/faq">
            <li>FAQs</li>
          </Link>
          <Link className="link" to="/affiliate">
            <li>Affiliate Program</li>
          </Link>
          <Link className="link" to="/contact">
            <li>Contact Us</li>
          </Link>

         
        </ul>
      </div>
      <div className="right-nav">
        <Link className="link" to="/signin"><div>Log In</div></Link>
        <Link to="/signup"><Button className="sign-up">Sign Up</Button></Link>
      </div>
      
            
    </nav>
  );
};

export default Navbar;
