import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { FiEye } from "react-icons/fi";
import { Link } from 'react-router-dom';
import { FiEyeOff } from "react-icons/fi";
import Input from "../../../atoms/input/Input";
import { useNavigate } from 'react-router-dom';
import Image from "../../../atoms/image/Image";
import Button from '../../../atoms/button/Button';
import Loader from '../../../atoms/loader/Loader';
import Container from '../../../atoms/container/Container'
import useUserStore from '../../../../../zustand/freelancerStore/useUserStore';
import useAuthStore from '../../../../../zustand/freelancerStore/useAuthStore';

const SignUp = () => {
    const navigate = useNavigate()
    const { userRole } = useUserStore()
    const { signUp, isLoading, signup_errormessage } = useAuthStore()

    //password visibility state
    const [isPasswordVisible, setIsPasswordVisible] = useState(false)
    const [message, setMessage] = useState('')
    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        email: '',
        password: '',
        userRole: ""
    });

    //password visibiity handler
    const handlePasswordVisibility = () => {
        setIsPasswordVisible(!isPasswordVisible)
    }

    useEffect(() => {
        //update formData with userRole
        setFormData((prevData) => ({ ...prevData, userRole }));
    }, [userRole]);


    const handleChange = (e, name) => {
        const value = e.target.value;
        setFormData(prevData => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleSubmit = event => {
        event.preventDefault();
        signUp(formData, navigate);
        setFormData({
            firstName: "",
            lastName: "",
            email: '',
            password: '',
            userRole: ""
        })
    };
    return (
        <>
            <h2>Create Account</h2>
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
            <form action="" onSubmit={handleSubmit} >
                <div className='auth--wrapper__form'>
                    <Input required={true} onChange={(e) => handleChange(e, "lastName")} value={formData.Lname} placeholder="Enter Last Name" className="auth--wrapper__form-itemOne" />
                    <Input required={true} onChange={(e) => handleChange(e, "firstName")} value={formData.Fname} placeholder="Enter First Name" className="auth--wrapper__form-itemTwo" />
                    <Input required={true} onChange={(e) => handleChange(e, "email")} value={formData.email} placeholder="Enter Email Address" type="email" className="auth--wrapper__form-itemThree" />
                    <div className="auth--wrapper-password">
                        <Input required={true} onChange={(e) => handleChange(e, "password")} value={formData.password} placeholder={isPasswordVisible ? "Enter Password" : "**********"} type={isPasswordVisible ? "text" : "password"} className="auth--wrapper__form-itemFour" />
                        {isPasswordVisible ? <FiEye onClick={handlePasswordVisibility} className='auth--wrapper-password__icon' /> : <FiEyeOff onClick={handlePasswordVisibility} className='auth--wrapper-password__icon' />}
                        {/* {message && <small style={{ color: "red" }}>{message}</small>} */}
                        {signup_errormessage && <small style={{ color: "red" }}>{signup_errormessage}</small>}
                    </div>
                </div>
                <section>
                    <Container variant="wrapper--flex">
                        <Input type="checkbox" />
                        <p>I agree to the <Link className="link">Privacy Policy</Link> and <Link className="link">Terms of Service</Link></p>
                    </Container>
                    <Button variant="default" className="auth-btn">{isLoading ? <Loader variant="default" /> : "Create Account"}</Button>
                    <Container variant="wrapper--flex--center">
                        <p>Already have an account? <Link className='link' to="/signin">Login</Link></p>
                    </Container>
                </section>
            </form>
        </>
    )
}

export default SignUp
