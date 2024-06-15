import React from 'react'
import Image from '../../../atoms/image/Image'
import Button from '../../../atoms/button/Button'
import { Link } from 'react-router-dom'
import Container from '../../../atoms/container/Container'

const PasswordResetSuccess = () => {
    return (
        <Container variant="wrapper--flex--center_fullH" >
            <Container variant="wrapper-center-align">
                <Image src="/assets/imgs/success.svg" alt="success" width={100} extension='svg' />
                <h3>Reset Successful!</h3>
                <p>You have successfully changed your password</p>
                <Button variant="default" >
                    <Link to="/signin" className='link--white'>
                        Login
                    </Link>
                </Button>
            </Container>
        </Container>
    )
}

export default PasswordResetSuccess
