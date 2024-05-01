import React from 'react'
import { NavLink } from 'react-router-dom'
import dropdownLinks from './dropdowndata'
import Image from '../../../../../atoms/image/Image'

const Dropdown = ({toggleDropdown}) => {
  return (
    <main className='dropdown'>
      <div className='dropdown--image'>
        <Image src="profileAvatar" alt="user" width={80} height={80} extension='svg' />
        <p className='username'>Solomon Tosin</p>
      </div>
      {dropdownLinks.map((items, i) => {
        return (
          <NavLink key={i} to={items.href} className="dropdown-link" onClick={toggleDropdown}>
            <Image src={items.icon} alt="icon" width={20} height={20} extension='svg' />
            <span>{items.title}</span>
          </NavLink>
        )
      })}
    </main>
  )
}

export default Dropdown
