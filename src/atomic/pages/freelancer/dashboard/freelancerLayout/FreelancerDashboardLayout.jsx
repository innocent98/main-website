import React from 'react'
import Header from '../header/Header'
import { Outlet } from 'react-router-dom'
// import SearchSection from '../header/SearchSection'

const FreelancerDashboardLayout = () => {
    return (
        <>
            <Header />
            <main className='layout--children'>
                {/* <main>
                    <SearchSection />
                </main> */}
                <Outlet />
            </main>
        </>
    )
}

export default FreelancerDashboardLayout
