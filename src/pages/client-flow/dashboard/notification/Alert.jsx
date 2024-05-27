import  { useState, useEffect } from 'react';
import './notification.scss';
import { IoNotifications } from 'react-icons/io5';
import { IoMdClose } from 'react-icons/io';
import alertNotificationSound from '../../../../assets/alert_notification.mp3'; 
import{ Link} from "react-router-dom"

const Alert = () => {
  const [alertData, setAlertData] = useState([]);
  const [currentAlertIndex, setCurrentAlertIndex] = useState(0);
  const [showAlert, setShowAlert] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setAlertData([
        {
          id: 1,
          freelancer: "Sososo and So",
          timestamp: "2 hours ago",
          profileLink: "#"
        },
        {
          id: 2,
          freelancer: "Another Freelancer",
          timestamp: "1 hour ago",
          profileLink: "#"
        },
        {
          id: 3,
          freelancer: "Yet Another Freelancer",
          timestamp: "30 mins ago",
          profileLink: "#"
        }
      ]);
    }, 5000); 
  }, []);

  const handleCloseAlert = () => {
    setShowAlert(false);
    setTimeout(() => {
      if (currentAlertIndex < alertData.length - 1) {
        setCurrentAlertIndex(currentAlertIndex + 1);
        const alertSound = new Audio(alertNotificationSound);
        alertSound.play();
        setShowAlert(true);
      }
    }, 2000); 
  };

  useEffect(() => {
    if (alertData.length > 0) {
      const alertSound = new Audio(alertNotificationSound);
      alertSound.play();
      setShowAlert(true);
    }
  }, [alertData]); 

  return (
    <>
      {showAlert && alertData.length > 0 && (
        <div className={`alert-box ${showAlert ? 'show' : 'hide'}`}>
          <div className='alert-box_icon'>
            <div><IoNotifications /></div>
          </div>
          <div className='alert-box_info'>
            <h3>Job Alert</h3>
            <p style={{ color: "#777777" }}>{alertData[currentAlertIndex].freelancer} applied for the job you posted</p>
          <Link to="/freelancer-profile"><button onClick={handleCloseAlert}>View Profile</button></Link>
            
          </div>
          <div className='close' onClick={handleCloseAlert}>
            <IoMdClose style={{ cursor: "pointer" }} />
          </div>
        </div>
      )}
      
    </>
  );
};

export default Alert;
