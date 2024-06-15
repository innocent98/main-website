import LeftFrame from '../LeftFrame';
import { FiEye } from "react-icons/fi";
import { Link } from 'react-router-dom';
import React, { useState } from 'react';
import { FiEyeOff } from "react-icons/fi";
import Image from '../../../atoms/image/Image';
import { useNavigate } from 'react-router-dom';
import Input from '../../../atoms/input/Input';
import Button from '../../../atoms/button/Button';
import Container from '../../../atoms/container/Container';
import useAuthStore from '../../../../../zustand/authstore/useAuthStore';
import Loader from '../../../atoms/loader/Loader';


const SignIn = () => {
    //navigation hook
    const navigate = useNavigate()
   
    //initial states
    const { signIn, isLoading, errormessage } = useAuthStore()
    const [isPasswordVisible, setIsPasswordVisible] = useState(false)
     const [loginCred, setLoginCred] = useState({
        email: "",
        password: ""
    })

    //password visibiity handler
    const handlePasswordVisibility = () => {
        setIsPasswordVisible(!isPasswordVisible)
    }

    //handle input change function
    const handleChange = (e, name) => {
        const value = e.target.value;
        setLoginCred(prevData => ({
            ...prevData,
            [name]: value,
        }));
    };

    //handle signin function
    const handleSignIn = (event) => {
        event.preventDefault()
        signIn(loginCred, navigate)
        setLoginCred({
            email: "",
            password: ""
        })
    }

    return (
        <Container variant="wrapper--flex">
            <LeftFrame />
            <Container variant="wrapper" className='signin'>
                <Container variant="wrapper--flex--center" className="signup--img-container">
                    <Image className="" src="/assets/imgs/logo.svg" extension="svg" width={150} />
                </Container>
                <div className='wrapper--link-container'>
                    <Link to="/" className='link'>Back to website</Link>
                </div>
                <h2>Welcome Back!</h2>
                <Container variant="wrapper--flex" className="auth--wrapper">
                    <Button variant="outlined" className="gridItemOne">
                        <Image extension='svg' src="/assets/imgs/google.svg" alt="google" />
                        Google
                    </Button>
                    <Button variant="outlined" className="gridItemTwo">
                        <Image extension='svg' src="/assets/imgs/linkedIn.svg" alt="linkedIn" />
                        LinkedIn
                    </Button>
                </Container>
                <Container variant="wrapper--flex" className="wrapper--flex">
                    <div className='auth--wrapper__hr'></div>
                    <p className='auth--wrapper__text'> or continue with</p>
                    <div className='auth--wrapper__hr'></div>
                </Container>
                <form onSubmit={handleSignIn}>
                    <div className='auth--wrapper__form'>
                        <Input required={true} onChange={(e) => handleChange(e, "email")} value={loginCred.email} placeholder="Enter Email Address" type="email" className="auth--wrapper__form-itemThree" />
                        <div className="auth--wrapper-password">
                            <Input required={true} onChange={(e) => handleChange(e, "password")} value={loginCred.password} placeholder={isPasswordVisible ? "Enter Password" : "**********"} type={isPasswordVisible ? "text" : "password"} className="auth--wrapper__form-itemFour" />
                            {isPasswordVisible ? <FiEye onClick={handlePasswordVisibility} className='auth--wrapper-password__icon' /> : <FiEyeOff onClick={handlePasswordVisibility} className='auth--wrapper-password__icon' />}
                        </div>
                    </div>
                    {errormessage && <small style={{ color: "red" }}>{errormessage}</small>}
                    <section>
                        <Container variant="wrapper--flex--between">
                            <Container variant="wrapper--flex">
                                <Input type="checkbox" />
                                <p>Remember Me</p>
                            </Container>
                            <Link to="/forgot_password" className='link'>Forgot Password</Link>
                        </Container>
                        <Button variant="default" className="auth-btn">{isLoading ? <Loader variant="default" /> : "Login"}</Button>
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
