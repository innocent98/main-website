import React, { useState } from 'react'
import Logo from '../../atoms/logo/Logo';
import logo from "../../assets/logo.svg";
import "./navbar.scss"
import { BsChat } from "react-icons/bs";
import { IoIosNotificationsOutline } from "react-icons/io";
import Notification from '../../pages/client-flow/dashboard/notification/Notification';
import avatar from "../../assets/profileAvatar.svg";
import { BiChevronDown } from 'react-icons/bi';

const EnhancedNavbar = () => {
  const [showNotification, setShowNotification] = useState(false);

  const handleNotificationClick = () => {
    setShowNotification(!showNotification);

  };
    // Dummy data for notifications
    const dummyNotifications = [
      {
        id: 1,
        message: "This freelancer applied for your UI/UX job role",
        timestamp: "2 hours ago",
        //image: freelancerImage,
        profileLink: "#"
      },
      {
        id: 2,
        message: "This freelancer applied for your UI/UX job role",
        timestamp: "2 hours ago",
        //image: freelancerImage,
        profileLink: "#"
      },
     
  
   
    ];
  return (
    <nav>
    <div className="left-nav">
      <Logo src={logo} alt="logo" />
    </div>

    <div className="right-nav">
      <p>Switch to Freelancer</p>
    <div className='alert'><BsChat style={{fontSize:"17px", color:"black"}}/></div>
    <div className='notification' onClick={handleNotificationClick}><IoIosNotificationsOutline style={{fontSize:"23px", color:"black"}}/></div>
    <div className='icon-box'>
      <div>
        <img src={avatar} alt=''/>
        <BiChevronDown style={{width:"100px", color:"black"}}/>
      
      </div>
    </div>
    </div>
    {showNotification && <Notification notifications={dummyNotifications}/>}
  </nav>
  )
}

export default EnhancedNavbar
