import React from 'react'
import "./notification.scss"
import { BsBell } from 'react-icons/bs'
import { IoMdClose } from 'react-icons/io'

const Alert = ({Alert}) => {
  const alertData = {
    id: 1,
    freelancer: "Sososo and So applied for the job you posted",
    timestamp: "2 hours ago",
    profileLink: "#"
  };
  return (
    <div className='alert-box'>
        <div className='alert-box_icon'>
            <div><BsBell/></div>
        </div>
        <div className='alert-box_info'>
            <h3>Job Alert</h3>
            <p style={{color: "#777777"}}>{alertData.freelancer}</p>
            <button>View Profile</button>
        </div>
        <div className='close'>
            <IoMdClose style={{cursor: "pointer"}}/>
        </div>
    </div>
  )
}

export default Alert