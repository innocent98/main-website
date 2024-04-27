import React from 'react'
import "./button.scss"
import clsx from 'clsx';

const Button = ({buttonText, classname}) => {
  return (
    <button className={clsx(classname, "custom-btn")}>{buttonText}</button>
  )
}

export default Button