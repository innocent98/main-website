import React from 'react'
import Layout from './Layout'
import { Link } from 'react-router-dom'
import { useState, useRef } from 'react'
import Image from '../../../atoms/image/Image'
import Button from '../../../atoms/button/Button'
import Container from '../../../atoms/container/Container'
import useAuthStore from '../../../../../zustand/authstore/useAuthStore'
import Loader from '../../../atoms/loader/Loader'

const VerifyEmail = ({ length = 6 }) => {
    // state
    const [code, setCode] = useState(new Array(length).fill(""));
    const { userEmail, passwordResetCode } = useAuthStore()


    const handleCodeComplete = (code) => {
        console.log("Code entered:", code);
        //send to server for verification code block goes here...
    };

    const inputRefs = Array(length)
        .fill()
        .map((_, i) => useRef(null));

    const handleChange = (index, value) => {
        const newCode = [...code];
        newCode[index] = value;
        setCode(newCode);

        // If all input boxes are filled, call handleComplete
        // if (newCode.every((val) => val !== "")) {
        //     handleCodeComplete(newCode.join(""));
        // }
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


    //TODO: complete.....

    const handleSubmit = async (e) => {
        e.preventDefault();
      
        // Ensure all code inputs are filled before submitting
        if (!code.every((val) => val !== "")) {
          console.error('Please enter all verification digits.');
          return; // Prevent submission if code is incomplete
        }
      
        const enteredCode = code.join(""); // Combine individual digits into the full code
      
        try {
          await useAuthStore().passwordReset(userEmail, enteredCode); // Call passwordReset action with email and entered code
          // Handle successful password reset (e.g., show success message, redirect)
          console.log('Password reset successful!');
        } catch (error) {
          console.error('Error resetting password:', error.response?.data?.message || 'An error occurred.');
          // Handle errors (e.g., invalid code, expired code)
        }
      };



    return (
        <Layout>
            <div className='wrapper--link-container'>
                <Link to="/signin" className='link'>Go back</Link>
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
                {isLoading ? <Loader/> : "Confirm"}
            </Button>
            <Container variant="wrapper--flex--center">
                <p>Didnt receive code? <Link to="/signin">Resend Code</Link></p>
            </Container>
        </Layout>
    )
}

export default VerifyEmail
