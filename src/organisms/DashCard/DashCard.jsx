import React from 'react'
import "./dashcard.scss"
import { FiDownload } from 'react-icons/fi'

const DashCard = ({CardTitle, NumberElement, background}) => {
  return (
    <div className='card'  style={{ background }}>
        <div className='card-content'>
            <div className='card-top'>
                <span>{NumberElement}</span>
                <div className='d-circle'><FiDownload/></div>
            </div>
            <div className='card-bottom'>
                <p>{CardTitle}</p>
            </div>
        </div>
    </div>
  )
}

export default DashCard