import React, { useState } from 'react'
import Logo from '../../atoms/logo/Logo';
import logo from "../../assets/logo.svg";
import "./navbar.scss"
import { BsChat } from "react-icons/bs";
import { IoIosNotificationsOutline } from "react-icons/io";
import Notification from '../../pages/client/dashboard/notification/Notification';

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
    <div className="mid-nav">
     
    </div>
    <div className="right-nav">
      <div className='notification' onClick={handleNotificationClick}><IoIosNotificationsOutline style={{fontSize:"30px"}}/></div>
      <div className='alert'><BsChat style={{fontSize:"23px"}}/></div>
    </div>
    {showNotification && <Notification notifications={dummyNotifications}/>}
  </nav>
  )
}

export default EnhancedNavbar
