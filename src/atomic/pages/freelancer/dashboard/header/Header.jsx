import "../dashboard.scss"
import { Link } from 'react-router-dom';
import { FaBars } from "react-icons/fa6";
import Dropdown from './dropdown/Dropdown';
import { FiChevronDown } from "react-icons/fi";
import { BiMessageRounded } from "react-icons/bi";
import Button from '../../../../atoms/button/Button';
import React, { Suspense, lazy, useState } from 'react';
import MessageDropdown from "./dropdown/MessageDropdown";
import { IoMdNotificationsOutline } from "react-icons/io";
import Container from '../../../../atoms/container/Container';
import NotificationDropdown from "./dropdown/NotificationDropdown";
const LazyLoadedImg = lazy(() => import("../../../../atoms/image/Image"))


const Header = () => {
    // dropdown state
    const [isMessageOpen, setIsMessageOpen] = useState(false)
    const [isDropdownOpen, setIsDropdownOpen] = useState(false)
    const [isNotificationOpen, setIsNotificationOpen] = useState(false)

    // toggle dropdown visibility fnc
    const toggleDropdown = (() => {
        if (isMessageOpen || isNotificationOpen) {
            setIsMessageOpen(false)
            setIsNotificationOpen(false)
            setIsDropdownOpen(!isDropdownOpen)
        } else {
            setIsDropdownOpen(!isDropdownOpen)
        }
    })
    const toggleNotificationDropdown = (() => {
        if (isMessageOpen || isDropdownOpen) {
            setIsMessageOpen(false)
            setIsDropdownOpen(false)
            setIsNotificationOpen(!isNotificationOpen)
        } else {
            setIsNotificationOpen(!isNotificationOpen)
        }
    })
    const toggleMessageDropdown = (() => {
        if (isNotificationOpen || isDropdownOpen) {
            setIsDropdownOpen(false)
            setIsNotificationOpen(false)
            setIsMessageOpen(!isMessageOpen)
        } else {
            setIsMessageOpen(!isMessageOpen)
        }
    })

    return (
        <>
            <Container variant="wrapper--flex" className="header">
                <div>
                    <Suspense fallback={<div>loading...</div>}>
                        <LazyLoadedImg src='/assets/imgs/logo.svg' alt="logo" width={40} height={40} extension='svg' />
                    </Suspense>
                </div>
                <Container variant="wrapper--flex" className='header--icons'>
                    <Link className='link'>Switch to Client</Link>
                    <FaBars className="header--hamburger-menu" onClick={toggleDropdown} />
                    <div className="header--conditional-icons">
                        <Button variant="no-bg" className="header--icon">
                            <BiMessageRounded
                                onClick={toggleMessageDropdown}
                            />
                        </Button>
                        <Button variant="no-bg">
                            <IoMdNotificationsOutline
                                className='header--icon'
                                onClick={toggleNotificationDropdown}
                            />
                        </Button>
                        <Button onClick={toggleDropdown} variant="transparent" className="header--profile-dropdown">
                            <Suspense fallback={<div>loading...</div>}>
                                <LazyLoadedImg
                                    src="profileAvatar"
                                    alt="user"
                                    width={30}
                                    height={30}
                                    extension='svg'
                                    className="header--profileImg"
                                />
                            </Suspense>
                            <FiChevronDown />
                        </Button>
                    </div>
                </Container>
            </Container>
            <>
                {isMessageOpen && <MessageDropdown />}
                {isNotificationOpen && <NotificationDropdown />}
                {isDropdownOpen && <Dropdown toggleDropdown={toggleDropdown} />}
            </>
        </>
    )
}

export default Header
