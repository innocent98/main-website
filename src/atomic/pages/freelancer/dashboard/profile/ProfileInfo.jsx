import React, { lazy, Suspense } from 'react'
import { FiPlusCircle } from "react-icons/fi";
import { RiDeleteBin6Line } from "react-icons/ri";
import Button from '../../../../atoms/button/Button'
import Container from '../../../../atoms/container/Container'

const LazyLoadedImg = lazy(() => import("../../../../atoms/image/Image"))


const ProfileInfo = () => {
    return (
        <section className='profile-info'>
            <>
                <Suspense fallback={<div>loading...</div>}>
                    <LazyLoadedImg src="/assets/imgs/profileAvatar.svg" extension='svg' width={60} height={60} alt="user" />
                </Suspense>
                <h2>Surname Solomon</h2>
            </>
            <div>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                    <h3>Bio</h3>
                    <Button variant="transparent">Edit</Button>
                </div>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Non cum, amet eaque vel nisi delectus!</p>
            </div>
            <div>
                <h3>Skills</h3>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                    <Container variant="wrapper--flex" className="profile--skill--btnWrapper">
                        <Button variant="border--slate" className="skill-btn">Ui/Ux Designer</Button>
                        <Button variant="border--slate" className="skill-btn">Framer Developer</Button>
                    </Container>
                    <div>
                        <FiPlusCircle className='skill-icon' />
                        <RiDeleteBin6Line className='skill-icon' />
                    </div>
                </div>
            </div>
            <div>
                <h3>Location</h3>
                <p>Lagos, Nigeria</p>
            </div>
        </section>
    )
}

export default ProfileInfo