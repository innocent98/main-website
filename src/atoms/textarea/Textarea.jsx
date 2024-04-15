import React from 'react'
import "./textarea.scss"


const Textarea = ({label, placeholder, type}) => {
  return (
    <div className='textarea-label'>
        <label>{label}</label>
        <textarea
         placeholder={placeholder}
         type={type}/>
    </div>
  )
}

export default Textarea