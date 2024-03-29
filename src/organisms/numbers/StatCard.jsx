import React from 'react'
import "./statcard.scss"

const StatCard = ({number, title, desc}) => {
  return (
    <div className='num'>
        <h1>{number}</h1>
        <h2>{title}</h2>
        <p>{desc}</p>
    </div>
  )
}

export default StatCard