import React from 'react'
import Layout from './Layout'
import { Link, useNavigate } from 'react-router-dom'
import { useState, useRef } from 'react'
import Image from '../../../atoms/image/Image'
import Button from '../../../atoms/button/Button'
import Container from '../../../atoms/container/Container'
import Loader from '../../../atoms/loader/Loader'
import useUserPasswordStore from '../../../../../zustand/freelancerStore/useUserPasswordStore'

const GetVerificationCode = ({ length = 6 }) => {
    const navigate = useNavigate()
    // state
    const [code, setCode] = useState(new Array(length).fill(""));
    const { userEmail, passwordResetCode, isLoading } = useUserPasswordStore()


    const handleCodeComplete = (code) => {
        console.log("Code entered:", code);
    };

    const inputRefs = Array(length)
        .fill()
        .map((_, i) => useRef(null));

    const handleChange = (index, value) => {
        const newCode = [...code];
        newCode[index] = value;
        setCode(newCode);
    };

    const handleKeyDown = (index, e) => {
        if (e.key === "Backspace" && index > 0 && code[index] === "") {
            // Move focus to the previous input box when Backspace is pressed
            inputRefs[index - 1].current.focus();
        } else if (
            /[0-9]/.test(e.key) &&
            index < length - 1 &&
            code[index] !== ""
        ) {
            // Move focus to the next input box when a number is pressed
            inputRefs[index + 1].current.focus();
        }
    };


    //handle submit 
    const handleSubmit = async (e) => {
        e.preventDefault();

        // Ensure all code inputs are filled before submitting
        if (!code.every((val) => val !== "")) {
             // Prevent submission if code is incomplete
            console.error('Please enter all verification digits.');
            return;
        }
         // Combine individual digits into the full code
        const enteredCode = code.join("");
        enteredCode.trim()
        console.log(enteredCode);

        try {
            await passwordResetCode(enteredCode, navigate);
        } catch (error) {
            setCode("")
        }
    };



    return (
        <Layout>
            <div className='wrapper--link-container'>
                <Link to="/forgot_password" className='link'>Go back</Link>
            </div>
            <Container variant="wrapper--flex--center">
                <Image src="/assets/imgs/logo.svg" alt="logo" extension='svg' width={150} />
            </Container>
            <section className='layout--text'>
                <h3>Code Sent</h3>
                <p>Enter code sent to, <br /> {userEmail}</p>
            </section>
            <Container variant="wrapper-flex--center" className="input--wrapper">
                {code.map((value, index) => (
                    <input key={index}
                        type="text"
                        maxLength={1}
                        value={value}
                        onComplete={handleCodeComplete}
                        onChange={(e) => handleChange(index, e.target.value)}
                        onKeyDown={(e) => handleKeyDown(index, e)}
                        ref={inputRefs[index]} className="auth--input" />
                ))}
            </Container>
            <Button variant="default" className="auth-btn" onClick={handleSubmit}>
                {isLoading ? <Loader variant="default"/> : "Confirm"}
            </Button>
            <Container variant="wrapper--flex--center">
                <p>Didnt receive code? <Link to="">Resend Code</Link></p>
            </Container>
        </Layout>
    )
}

export default GetVerificationCode
