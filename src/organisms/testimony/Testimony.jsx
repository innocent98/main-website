import React from 'react'
import "./testimony.scss"


const Testimony = ({review, avatar, name}) => {
  return (
    <div className='testimony'>
        <p>{review}</p>
    
        <div className='author'>
            <img src={avatar} alt='Author'/>
            <p>{name}</p>
        </div>
    </div>
  )
}

export default Testimony