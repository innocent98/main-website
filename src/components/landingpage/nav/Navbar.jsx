import React from "react";
import "./navbar.scss";
import logo from "../../../assets/logo.svg";
import { Link } from "react-router-dom";

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

          <li>Contact Us</li>
        </ul>
      </div>
      <div className="right-nav">
        <Link to="/signin">Log In</Link>
        <Link to="/signup">Sign Up</Link>
      </div>
    </nav>
  );
};

export default Navbar;
