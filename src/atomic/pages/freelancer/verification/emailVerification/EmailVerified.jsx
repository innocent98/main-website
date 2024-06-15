import React from 'react'
import { NavLink } from 'react-router-dom'
import Image from '../../../../atoms/image/Image'
import Button from '../../../../atoms/button/Button'
import Container from '../../../../atoms/container/Container'

const EmailVerified = () => {
    return (
        <>
            <main className='verified'>
                <div className='verified--nav'>
                    <Image src="logo" alt="logo" width={40} height={40} extension='svg' />
                </div>
                <Container variant="wrapper--flex--center" className='account--verified'>
                    <Image extension='svg' alt="verified" src="verified" className="verification--img" />
                    <div className='verification--text'>
                        <h3>Account Verified!</h3>
                        <p>Congratulations, your account has been successfully verified. <br />
                            You're now ready to explore our platform.
                        </p>
                    </div>
                    <NavLink to="/signin">
                        <Button variant="fitted" className="verification--btn">Continue</Button>
                    </NavLink>
                </Container>
            </main>
        </>
    )
}

export default EmailVerified
