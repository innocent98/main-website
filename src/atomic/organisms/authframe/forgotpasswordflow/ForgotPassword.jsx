import React from 'react'
import Layout from './Layout'
import { Link } from 'react-router-dom'
import Image from '../../../atoms/image/Image'
import Input from '../../../atoms/input/Input'
import Button from '../../../atoms/button/Button'
import Container from '../../../atoms/container/Container'

const ForgotPassword = () => {
    return (
        <Layout>
            <div className='wrapper--link-container'>
                <Link to="/signin" className='link'>Go back</Link>
            </div>
            <Container variant="wrapper--flex--center">
                <Image src="/assets/imgs/logo.svg" alt="logo" extension='svg' width={150} />
            </Container>
            <section className='layout--text'>
                <h3>Forgot Password</h3>
                <p>Enter the email associated with your account, <br /> so we can send you a code</p>
            </section>
            <Input type="email" placeholder="Enter email address" className="layout--input" />
            <Button variant="default">
                <Link to="/forgot_password/verify_email" className='button--link'>Send Code</Link>
            </Button>
            <Container variant="wrapper--flex--center">
                <p>Remember Login? <Link to="/signin">Login</Link></p>
            </Container>
        </Layout>
    )
}

export default ForgotPassword
