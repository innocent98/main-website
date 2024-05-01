import React from 'react'
import { lazy, Suspense } from 'react'
import { NavLink } from 'react-router-dom'
import { GoDotFill } from "react-icons/go";
import { FaCalendarPlus } from "react-icons/fa";
import { FaRegCheckCircle } from "react-icons/fa";
import Container from '../../../../atoms/container/Container'
const LazyLoadedImg = lazy(() => import("../../../../atoms/image/Image"))


const VerificationPage = () => {
    return (
        <main className='verification'>
            <NavLink to="/overview" className="link">Back to dashboard</NavLink>
            <section className='user-info'>
                <Container variant="wrapper--flex" className="verification--info-wrapper">
                    <div>
                        <Suspense fallback={<div>loading...</div>}>
                            <LazyLoadedImg src="profileAvatar" alt="user" extension="svg" />
                        </Suspense>
                    </div>
                    <div>
                        <p className='verification--username'>Solomon Tosin @solomon</p>
                        <p className='verification--useractive-status'><GoDotFill /> <span>Online</span></p>
                    </div>
                </Container>
            </section>
            <section className='verification--status--wrapper'>
                <div className='verification--userMembership'>
                    <p><FaCalendarPlus /> <span>Member since November 30, 2023</span></p>
                </div>
                <div className='verification--status'>
                    <p>Verification</p>
                    <p className='verified'>
                        <span>Email Address</span>
                        <small>
                            <FaRegCheckCircle className='check-icon'/> <span>verified</span>
                        </small>
                    </p>
                </div>
            </section>
        </main>
    )
}

export default VerificationPage
