import Layout from './Layout'
import React, { useState } from 'react'
import Input from '../../../atoms/input/Input'
import Image from '../../../atoms/image/Image'
import Loader from '../../../atoms/loader/Loader'
import Button from '../../../atoms/button/Button'
import { Link, useNavigate } from 'react-router-dom'
import Container from '../../../atoms/container/Container'
import useUserPasswordStore from '../../../../../zustand/freelancerStore/useUserPasswordStore'

const ForgotPassword = () => {

    //states
    const navigate = useNavigate()
    const [email, setEmail] = useState('')
    const { forgotPassword, isLoading, userEmail, errormessage } = useUserPasswordStore()


    //handle input change function
    const handleChange = (e) => {
        const value = e.target.value;
        setEmail(value);
    };

    //onSubmit function
    const handleSubmit = async (e) => {
        e.preventDefault()

        await forgotPassword(email, navigate)
        setEmail('')
        console.log(userEmail);
    }

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
            <Input onChange={handleChange} value={email} type="email" placeholder="Enter email address" className="layout--input" />
            {errormessage && <small style={{color:"red"}}>{errormessage}</small>}
            <Button variant="default" onClick={handleSubmit} className="auth-btn">
                {isLoading ? <Loader variant="default" /> : " Send Code"}
            </Button>
            <Container variant="wrapper--flex--center">
                <p>Remember Login? <Link to="/signin">Login</Link></p>
            </Container>
        </Layout>
    )
}

export default ForgotPassword
