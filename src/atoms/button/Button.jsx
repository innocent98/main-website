import React from 'react'
import "./button.scss"

const Button = ({buttonText, classname}) => {
  return (
    <button className={classname}>{buttonText}</button>
  )
}

export default Button