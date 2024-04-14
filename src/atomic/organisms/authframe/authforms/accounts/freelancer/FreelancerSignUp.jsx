import React, { useState } from 'react'
import { FiEye } from "react-icons/fi";
import { Link } from 'react-router-dom';
import { FiEyeOff } from "react-icons/fi";
import Input from "../../../../../atoms/input/Input"
import Image from "../../../../../atoms/image/Image"
import Button from '../../../../../atoms/button/Button'
import Container from '../../../../../atoms/container/Container'

const FreelancerSignUp = () => {
    //password visibility state
    const [isPasswordVisible, setIsPasswordVisible] = useState(false)

    //password visibiity handler
    const handlePasswordVisibility = () => {
        setIsPasswordVisible(!isPasswordVisible)
    }
    return (
        <>
            <h2>Create Account</h2>
            <Container variant="wrapper--flex" className="auth--wrapper">
                <Button variant="outlined" className="gridItemOne">
                    <Image extension='svg' src="google" alt="google" />
                    Google
                </Button>
                <Button variant="outlined" className="gridItemTwo">
                    <Image extension='svg' src="linkedIn" alt="linkedIn" />
                    LinkedIn
                </Button>
            </Container>
            <Container variant="wrapper--flex" className="wrapper--flex">
                <div className='auth--wrapper__hr'></div>
                <p className='auth--wrapper__text'> or continue with</p>
                <div className='auth--wrapper__hr'></div>
            </Container>
            <form action="" >
                <div className='auth--wrapper__form'>
                    <Input placeholder="Enter Last Name" className="auth--wrapper__form-itemOne" />
                    <Input placeholder="Enter First Name" className="auth--wrapper__form-itemTwo" />
                    <Input placeholder="Enter Email Address" type="email" className="auth--wrapper__form-itemThree" />
                    <div className="auth--wrapper-password">
                        <Input placeholder={isPasswordVisible ? "Enter Password" : "**********"} type={isPasswordVisible ? "text" : "password"} className="auth--wrapper__form-itemFour" />
                        {isPasswordVisible ? <FiEye onClick={handlePasswordVisibility} className='auth--wrapper-password__icon' /> : <FiEyeOff onClick={handlePasswordVisibility} className='auth--wrapper-password__icon' />}
                    </div>
                </div>
                <section>
                    <Container variant="wrapper--flex">
                        <Input type="checkbox" />
                        <p>I agree to the <Link className="link">Privacy Policy</Link> and <Link className="link">Terms of Service</Link></p>
                    </Container>
                    <Button variant="default">Create Account</Button>
                    <Container variant="wrapper--flex--center">
                        <p>Already have an account? <Link className='link' to="/signin">Login</Link></p>
                    </Container>
                </section>
            </form>
        </>
    )
}

export default FreelancerSignUp
