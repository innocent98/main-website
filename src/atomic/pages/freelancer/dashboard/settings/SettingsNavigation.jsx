import React from 'react'
import { useState } from 'react';
import { FiUser } from "react-icons/fi";
import { GoLock } from "react-icons/go";
import { NavLink } from 'react-router-dom'
import clsx from 'clsx';
import { IoIosLogOut } from "react-icons/io";
import { MdOutlineNotificationsNone } from "react-icons/md";
import Container from '../../../../atoms/container/Container';


const SettingsNavigation = ({ onNavClick }) => {
    // navlinks
    const linkSchema = [
        {
            href: "/overview/settings",
            name: "Account",
            icon: <FiUser />,
            exact: true,
        },
        {
            href: "/overview/settings/notification_settings",
            name: "Notifications",
            icon: <MdOutlineNotificationsNone />,
        },
        {
            href: "/overview/settings/security_settings",
            name: "Security",
            icon: <GoLock />,
        },
        {
            href: "/overview/settings/logout",
            name: "Logout",
            icon: <IoIosLogOut />,
        },
    ]
    return (
        <>
            <div className='settings--nav'>
                <p className='settings_name'>Settings</p>
                {linkSchema.map((link, i) => (
                    <NavLink
                        key={i}
                        to={link.href}
                        end={link.exact}
                        onClick={() => onNavClick(link)}
                        className={({ isActive }) => (isActive ? 'active' : 'link-style')}
                    >
                        <Container variant="wrapper--flex--fit">
                            <span style={{ fontSize: "20px", margin: 0 }}> {link.icon}</span>
                            <span> {link.name}</span>
                        </Container>
                    </NavLink>
                ))}
            </div>
        </>
    )
}

export default SettingsNavigation
