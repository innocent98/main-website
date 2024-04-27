import React from 'react'
import "./notification.scss"
import { BsBell } from 'react-icons/bs'
import { IoMdClose } from 'react-icons/io'

const Alert = () => {
  return (
    <div className='alert-box'>
        <div className='alert-box_icon'>
            <div><BsBell/></div>
        </div>
        <div className='alert-box_info'>
            <h3>Job Alert</h3>
            <p>Sososo and So applied for the job you posted</p>
            <button>View Profile</button>
        </div>
        <div className='close'>
            <hr/>
            <IoMdClose/>
        </div>
    </div>
  )
}

export default Alert