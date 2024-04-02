import React from 'react'
import "./input.scss"
const InputField = ({ type, placeholder, label }) => (
    <div className='input-label'>
        <label>{label}</label>
        <input type={type} placeholder={placeholder} />
    </div>
  );

export default InputField