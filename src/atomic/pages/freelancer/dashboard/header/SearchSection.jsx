import React from 'react'
import { NavLink } from 'react-router-dom'
import Input from '../../../../atoms/input/Input'
import Button from '../../../../atoms/button/Button'
import Container from '../../../../atoms/container/Container'
import useAuthStore from '../../../../../../zustand/freelancerStore/useAuthStore'

const SearchSection = () => {

    //get username
    const {user} = useAuthStore()
    // const userName = user.name

    //dashboard link schema
    const linksSchema = [
        {
            name: 'Dashboard',
            path: '/overview',
            exact: true
        },
        {
            name: 'Jobs',
            path: '/overview/jobs'
        },
        {
            name: 'Wallet',
            path: '/overview/wallet'
        },
    ]
    return (
        <>
            <main>
                <p className='welcome-user'>Welcome {user?.firstName} </p>
                <div className='header-input_sec'>
                    <Input className="dashboardInput" placeholder="search for jobs, talents..." />
                    <Button variant="default--fit" className="search-btn">
                        Search
                    </Button>
                </div>
                <Container variant="wrapper-flex" className="link-items">
                    {linksSchema.map((link, i) => {
                        return (
                            <NavLink
                                key={i}
                                className={({ isActive }) => isActive ? "active" : "link-style"}
                                to={link.path}
                                end={link.exact}
                            >
                                {link.name}
                            </NavLink>
                        )
                    })}
                </Container>
            </main>
        </>
    )
}

export default SearchSection
