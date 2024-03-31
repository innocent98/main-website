import React from 'react'
import "./list.scss"

const List = ({subTittle, text}) => {
  return (
    <li>
         <h3>{subTittle}</h3>
         <p>{text}</p>
    </li>

  )
}

export default List