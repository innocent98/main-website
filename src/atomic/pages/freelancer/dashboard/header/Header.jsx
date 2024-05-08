import "../dashboard.scss"
import { Link } from 'react-router-dom';
import { FaBars } from "react-icons/fa6";
import Dropdown from './dropdown/Dropdown';
import { FiChevronDown } from "react-icons/fi";
import { FiMessageCircle } from "react-icons/fi";
import Button from '../../../../atoms/button/Button';
import React, { Suspense, lazy, useEffect, useState } from 'react';
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
    const [isDisabled, setIsDisabled] = useState(false)

    // toggle dropdown visibility fnc
    const toggleDropdown = (() => {
        setIsDropdownOpen(!isDropdownOpen)
    })

    const handleButtonDisabled = () => {
        if (isMessageOpen || isDropdownOpen || isNotificationOpen) {
            setIsDisabled(true)
        } else {
            setIsDisabled(false)
        }
    }
    useEffect(() => {
        handleButtonDisabled()
    }, [isMessageOpen, isDropdownOpen, isNotificationOpen])

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
                        <Button variant="no-bg" isDisabled={isDisabled} className={isDisabled? "disabled" :"header--icon"}>
                            <FiMessageCircle
                                // className='header--icon'
                                onClick={() => setIsMessageOpen(!isMessageOpen)}
                            />
                        </Button>
                        <Button variant="no-bg">
                            <IoMdNotificationsOutline
                                className='header--icon'
                                onClick={() => setIsNotificationOpen(!isNotificationOpen)}
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
