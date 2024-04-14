import React from 'react'
import Intro from './intro/Intro'
import Layout from './layout/Layout'
import { Outlet } from 'react-router-dom'
import SkillSet from './skillSet/SkillSet'
import UploadImg from './uploadImg/UploadImg'
import { Route, Routes } from 'react-router-dom'

const ProfileSetUp = () => {
    const footerLayout = true;

    return (
        <Layout footerLayout={footerLayout}>
            <Outlet/>
            {/* <Routes>
                <Route exact path='/profile-setup-page1' element={<Intro />} />
                <Route exact path='/profile-setup-page2' element={<SkillSet />} />
                <Route exact path='/profile-setup-page3' element={<UploadImg />} />
            </Routes> */}
        </Layout>
    )
}

export default ProfileSetUp
