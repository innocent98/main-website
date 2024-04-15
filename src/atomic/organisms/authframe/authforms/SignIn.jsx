import LeftFrame from '../LeftFrame';
import { FiEye } from "react-icons/fi";
import { Link } from 'react-router-dom';
import React, { useState } from 'react';
import { FiEyeOff } from "react-icons/fi";
import Image from '../../../atoms/image/Image';
import Input from '../../../atoms/input/Input';
import Button from '../../../atoms/button/Button';
import Container from '../../../atoms/container/Container';


//this page is still under development!!!
const SignIn = () => {
    //password visibility state
    const [isPasswordVisible, setIsPasswordVisible] = useState(false)

    //password visibiity handler
    const handlePasswordVisibility = () => {
        setIsPasswordVisible(!isPasswordVisible)
    }
    return (
        <Container variant="wrapper--flex">
            <LeftFrame />
            <Container variant="wrapper" className='signup'>
                <Container variant="wrapper--flex--center" className="signup--img-container">
                    <Image className="" src="logo" extension="svg" width={150} />
                </Container>
                <div className='wrapper--link-container'>
                    <Link to="/" className='link'>Back to website</Link>
                </div>
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
                        <Input placeholder="Enter Email Address" type="email" className="auth--wrapper__form-itemThree" />
                        <div className="auth--wrapper-password">
                            <Input placeholder={isPasswordVisible ? "Enter Password" : "**********"} type={isPasswordVisible ? "text" : "password"} className="auth--wrapper__form-itemFour" />
                            {isPasswordVisible ? <FiEye onClick={handlePasswordVisibility} className='auth--wrapper-password__icon' /> : <FiEyeOff onClick={handlePasswordVisibility} className='auth--wrapper-password__icon' />}
                        </div>
                    </div>
                    <section>
                        <Container variant="wrapper--flex--between">
                            <Container variant="wrapper--flex">
                                <Input type="checkbox" />
                                <p>Remember Me</p>
                            </Container>
                            <Link to="/forgot_password" className='link'>Forgot Password</Link>
                        </Container>
                        <Button variant="default">Login</Button>
                        <Container variant="wrapper--flex--center">
                            <p>Dont have an account? <Link className='link' to="/signup">Create Account</Link></p>
                        </Container>
                    </section>
                </form>
            </Container>
        </Container>
    )
}

export default SignIn
