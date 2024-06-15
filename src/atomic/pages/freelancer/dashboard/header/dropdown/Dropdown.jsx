import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import dropdownLinks from './dropdowndata'
import Container from '../../../../../atoms/container/Container'
import Image from '../../../../../atoms/image/Image'
import useAuthStore from '../../../../../../../zustand/authstore/useAuthStore'
import Button from '../../../../../atoms/button/Button'
import Modal from '../../../../../molecules/modal/Modal'

const Dropdown = ({ toggleDropdown }) => {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const { logout } = useAuthStore()

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen)
  }
  return (
    <>
      <main className='dropdown'>
        <div className='dropdown--image'>
          <Image src="/assets/imgs/profileAvatar.svg" alt="user" width={80} height={80} extension='svg' />
          <p className='username'>Solomon Tosin</p>
        </div>
        {dropdownLinks.map((items, i) => {
          return (
            <>
              {items.href ? <NavLink key={i} to={items.href} className="dropdown-link" onClick={toggleDropdown}>
                <Image src={items.icon} alt="icon" width={20} height={20} extension='svg' />
                <span>{items.title}</span>
              </NavLink>
                :
                <Button variant="transparent-black" className="dropdown-link" onClick={toggleModal}>
                  <Image src={items.icon} alt="icon" width={20} height={20} extension='svg' />
                  <span>{items.title}</span>
                </Button>
              }
            </>
          )
        })}
      </main>
      {isModalOpen && <Modal className="modal">
        <p> Youre attempting to logout of Zealworkers</p>
        <p>Do you really want to logout?</p>
        <Container variant="wrapper--flex--fit" >
          <Button variant="border--fit" onClick={toggleDropdown}>
            Cancel
          </Button>
          <Button variant="default--fit" onClick={logout}>
            logout
          </Button>
        </Container>
      </Modal>}
    </>
  )
}

export default Dropdown
