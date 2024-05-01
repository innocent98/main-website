import "../dashboard.scss"
import { Link } from 'react-router-dom';
import { FaBars } from "react-icons/fa6";
import Dropdown from './dropdown/Dropdown';
import React, { Suspense, lazy, useState } from 'react';
import { FiChevronDown } from "react-icons/fi";
import { FiMessageCircle } from "react-icons/fi";
import Button from '../../../../atoms/button/Button';
import { IoMdNotificationsOutline } from "react-icons/io";
import Container from '../../../../atoms/container/Container';
const LazyLoadedImg = lazy(() => import("../../../../atoms/image/Image"))


const Header = () => {
    // dropdown state
    const [isDropdownOpen, setIsDropdownOpen] = useState(false)
    const [isNotificationOpen, setIsNotificationOpen] = useState(false)
    const [isMessageOpen, setIsMessageOpen] = useState(false)

    // toggle dropdown visibility fnc
    const toggleDropdown = (() => {
        setIsDropdownOpen(!isDropdownOpen)
    })

    return (
        <>
            <Container variant="wrapper--flex" className="header">
                <div>
                    <Suspense fallback={<div>loading...</div>}>
                        <LazyLoadedImg src="logo" alt="logo" width={40} height={40} extension='svg' />
                    </Suspense>
                </div>
                <Container variant="wrapper--flex" className='header--icons'>
                    <Link className='link'>Switch to Client</Link>
                    <FaBars className="header--hamburger-menu" onClick={toggleDropdown} />
                    <div className="header--conditional-icons">
                        <FiMessageCircle className='header--icon' />
                        <IoMdNotificationsOutline className='header--icon' />
                        <Button onClick={toggleDropdown} variant="transparent" className="header--profile-dropdown">
                            <Suspense fallback={<div>loading...</div>}>
                                <LazyLoadedImg src="profileAvatar" alt="user" width={30} height={30} extension='svg' className="header--profileImg" />
                            </Suspense>
                            <FiChevronDown />
                        </Button>
                    </div>
                </Container>
            </Container>
            {isDropdownOpen && <Dropdown toggleDropdown={toggleDropdown} />}
        </>
    )
}

export default Header
