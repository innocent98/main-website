import React from 'react'

const ProgressBar = ({progress}) => {
  return (
    <div className='progress--container'>
      <div className="progress--container__bar" style={{width: `${progress}%`}}></div>
    </div>
  )
}

export default ProgressBar
