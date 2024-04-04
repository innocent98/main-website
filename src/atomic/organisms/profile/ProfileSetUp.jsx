import Layout from './layout/Layout'
import React, { useState } from 'react'
import { Outlet } from 'react-router-dom'

const ProfileSetUp = () => {
    // layout state
    const [footerLayout, setFooterLayout] = useState(true)

    return (
        <Layout footerLayout={footerLayout}>
            <Outlet />
        </Layout>
    )
}

export default ProfileSetUp
