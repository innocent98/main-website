import React from 'react'
import "./input.scss"
const InputField = ({ type, placeholder, label, className }) => (
    <div className='input-label'>
        <label>{label}</label>
        <input type={type} placeholder={placeholder} className={className} />
    </div>
  );

export default InputField