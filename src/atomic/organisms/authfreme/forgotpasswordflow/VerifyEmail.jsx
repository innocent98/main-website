import React from 'react'
import Layout from './Layout'
import { Link } from 'react-router-dom'
import { useState, useRef } from 'react'
import Image from '../../../atoms/image/Image'
import Button from '../../../atoms/button/Button'
import Container from '../../../atoms/container/Container'

const VerifyEmail = ({ length = 6 }) => {
    // state
    const [code, setCode] = useState(new Array(length).fill(""));

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
        if (newCode.every((val) => val !== "")) {
            handleCodeComplete(newCode.join(""));
        }
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

    return (
        <Layout>
            <div className='wrapper--link-container'>
                <Link to="/signin" className='link'>Go back</Link>
            </div>
            <Container variant="wrapper--flex--center">
                <Image src="logo" alt="logo" extension='svg' width={150} />
            </Container>
            <section className='layout--text'>
                <h3>Code Sent</h3>
                <p>Enter code sent to, <br /> youremail@gmail.com</p>
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
            <Button variant="default">
                <Link to="/forgot_password/new_password" className='button--link'>Confirm</Link>
            </Button>
            <Container variant="wrapper--flex--center">
                <p>Didnt receive code? <Link to="/signin">Resend Code</Link></p>
            </Container>
        </Layout>
    )
}

export default VerifyEmail
