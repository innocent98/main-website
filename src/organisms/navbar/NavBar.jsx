import Logo from "../../atoms/logo/Logo";
import NavLink from "../../molecules/navlink/NavLink";
import Button from "../../atoms/button/Button";
import logo from "../../assets/logo.svg";
import "./navbar.scss";
import { IoClose, IoHome, IoMenu } from "react-icons/io5";
import { useState } from "react";
import { IoMdClose } from "react-icons/io";
import { IoHomeOutline } from "react-icons/io5";

const NavBar = () => {
  
  const [mobileNav, setMobileNav] = useState(false)

  const showMobileNav = () => {
    setMobileNav(!mobileNav)
  }
  const hideMobileNav = () => {
    setMobileNav(false)
  }
  return (
   <header>
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
            <Button classname="sign-up-btn" buttonText="Sign Up" />
          </NavLink>
        </div>
      </nav>

     
         <div className="mobile-nav">
            <div className="left-nav">
              <Logo src={logo} alt="logo" />
            </div>
            <div className="right-nav" onClick={showMobileNav}>
              <IoMenu />
            </div>
       
            
          </div>
           
          {mobileNav? <div className="sidebar">
            <div className="cancel" onClick={hideMobileNav}><IoClose/></div>
              <NavLink  to="/">Home</NavLink>
              <NavLink to="/about">About Us</NavLink>
              <NavLink to="/faq">FAQs</NavLink>
              <NavLink to="/affiliate">Affiliate Program</NavLink>
              <NavLink to="/contact">Contact Us</NavLink>

              <NavLink to="/signin">Log In</NavLink>
              <NavLink to="/signup">
                <Button classname="sign-up-btn" buttonText="Sign Up" />
              </NavLink>
             
            </div>: ""}
            </header>
  );
};

export default NavBar;
