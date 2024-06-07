import React, { useEffect } from 'react'
import { NavLink } from 'react-router-dom'
import Image from '../../../../atoms/image/Image'
import Button from '../../../../atoms/button/Button'
import Loader from "../../../../atoms/loader/Loader"
import { useNavigate, useLocation } from 'react-router-dom'
import Container from '../../../../atoms/container/Container'
import useAuthStore from '../../../../../../zustand/authstore/useAuthStore'

const EmailVerified = () => {

    //auth store state imports
    const { verifyEmail, verified, dummyEmailVerification } = useAuthStore()

    //hooks
    const location = useLocation()
    const navigate = useNavigate()

    //useEffect hook to trigger user verification
    useEffect(() => {
        const q = new URLSearchParams(location.search)
        const token = q.get('token')
        if (token) {
            verifyEmail(token).then(() => {
                alert("email verified")
                navigate('/')
            })
        }

        //ignore! 
        dummyEmailVerification()
    },[])

    return (
        <>
            <main className='verified'>
                <div className='verified--nav'>
                    <Image src="logo" alt="logo" width={40} height={40} extension='svg' />
                </div>
                {verified ?
                    <Container variant="wrapper--flex--center" className='account--verified'>
                        <Image extension='svg' alt="verified" src="verified" className="verification--img" />
                        <div className='verification--text'>
                            <h3>Account Verified!</h3>
                            <p>Congratulations, your account has been successfully verified. <br />
                                You're now ready to explore our platform.
                            </p>
                        </div>
                        <NavLink to="/">
                            <Button variant="fitted" className="verification--btn">Continue</Button>
                        </NavLink>
                    </Container>
                    :
                    <Container variant="wrapper--flex--center" className="verifying-email">Verifying Email...  <Loader variant="zeal-loader"/></Container>
                }
            </main>
        </>
    )
}

export default EmailVerified
