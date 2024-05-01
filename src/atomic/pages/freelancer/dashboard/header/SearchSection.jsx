import React from 'react'
import { NavLink } from 'react-router-dom'
import Input from '../../../../atoms/input/Input'
import Button from '../../../../atoms/button/Button'
import Container from '../../../../atoms/container/Container'

const SearchSection = () => {
    return (
        <>
            <main>
                <p className='welcome-user'>Welcome Solomon</p>
                <div className='header-input_sec'>
                    <Input className="dashboardInput" placeholder="search for jobs, talents..."/>
                    <Button variant="default--fit" className="search-btn">
                        Search
                    </Button>
                </div>
                <Container variant="wrapper-flex" className="link-items">
                    <NavLink className="link-item-active" to="/overview">Dashboard</NavLink>
                    <NavLink className="link-item" to="/overview/jobs">Jobs</NavLink>
                    <NavLink className="link-item" to="/overview/wallet" >Wallet</NavLink>
                </Container>
            </main>
        </>
    )
}

export default SearchSection
