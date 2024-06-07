import { Outlet } from 'react-router-dom'
import { NavLink } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import React, { useState, useEffect } from 'react'
import SettingsNavigation from '../SettingsNavigation'
import Container from '../../../../../atoms/container/Container'


const Settings = () => {
    // states
    const [isMobileView, setIsMobileView] = useState(false);
    const navigate = useNavigate();

    const handleNavClick = (path) => {
        // Adjusting width based on mobile breakpoint
        if (window.innerWidth <= 562) {
            setIsMobileView(true);
        }
        navigate(path);
    };

    //back to settings home page
    const handleBackClick = () => {
        setIsMobileView(false);
        navigate('/overview/settings');
    };

    //effect to handle window resize and set the appropriate view
    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth > 768) {
                setIsMobileView(false);
            }
        };

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return (
        <>
            <NavLink className="link" to="/overview">Back to Dashboard</NavLink>
            <Container variant="wrapper--flex--center" className="settings-lg">
                <SettingsNavigation onNavClick={handleNavClick} />
                <Outlet />
            </Container>
            <Container variant="wrapper--flex--center" className="settings-md">
                {!isMobileView ? (
                    <SettingsNavigation onNavClick={handleNavClick} />
                ) : (
                    <>
                        <NavLink className="link" onClick={handleBackClick}>Back</NavLink>
                        <Outlet />
                    </>
                )}
            </Container>
        </>
    )
}

export default Settings
