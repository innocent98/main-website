import React from 'react'
import "./loader.scss";
import clsx from 'clsx';

const Loader = ({ className, variant }) => {

  let style = "";
  
  switch (variant) {
    case "default":
      style = "loader"
      break;
    case "zeal-loader":
      style = "zeal-loader"
      break;

    default:
      break;
  }
  return (
    <div className={clsx(style, className)}></div>
  )
}

export default Loader
