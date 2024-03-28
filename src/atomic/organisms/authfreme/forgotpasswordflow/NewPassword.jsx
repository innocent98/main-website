import React from 'react'
import Layout from './Layout'
import { useState } from 'react';
import { FiEye } from "react-icons/fi";
import { Link } from 'react-router-dom'
import Modal from '../../../molecules/modal/Modal';
import { FiEyeOff } from "react-icons/fi";
import Image from '../../../atoms/image/Image'
import Input from '../../../atoms/input/Input'
import { useNavigate } from 'react-router-dom';
import Button from '../../../atoms/button/Button'
import Container from '../../../atoms/container/Container'

const NewPassword = () => {
    const navigate = useNavigate();

    //initial states
    const [error, setError] = useState(false)
    const [password, setPassword] = useState('')
    const [errorMessage, setErrorMessage] = useState("")
    const [isModalOpen, setIsModalOpen] = useState(false)
    const [confirmPassword, setConfirmPassword] = useState('')
    const [isPasswordVisible, setIsPasswordVisible] = useState(false)
    const [isConfirmPasswordVisible, setIsConfirmPasswordVisible] = useState(false)

    //regex for 8 characters long password
    const isValid = /^.{8}$/.test(password)

    //password visibiity handler
    const handlePasswordVisibility = () => {
        setIsPasswordVisible(!isPasswordVisible)
    }
    const handleConfirmPasswordVisibility = () => {
        setIsConfirmPasswordVisible(!isConfirmPasswordVisible)
    }

    //validate password function
    const validatePassword = (e) => {
        e.preventDefault()
        if (confirmPassword === password && isValid) {
            setIsModalOpen(true)
        } else {
            setError(true)
            setErrorMessage("Password does not match or is too short!")
        }
    }

    return (
        <Layout>
            <div className='wrapper--link-container'>
                <Link to="/signin" className='link'>Go back</Link>
            </div>
            <Container variant="wrapper--flex--center">
                <Image src="logo" alt="logo" extension='svg' width={150} />
            </Container>
            <section className='layout--text'>
                <h3>Set New Password</h3>
                <p>Must be atleast 8 characters</p>
            </section>
            <form action="">
                <section className='auth--wrapper__form'>
                    <div className="auth--wrapper-password">
                        <Input
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            type={isPasswordVisible ? "text" : "password"}
                            placeholder={isPasswordVisible ? "Enter Password" : "**********"}
                            className={error ? "auth--wrapper__form-itemFour-error" : "auth--wrapper__form-itemFour"}
                        />
                        {
                            isPasswordVisible
                                ? <FiEye onClick={handlePasswordVisibility}
                                    className='auth--wrapper-password__icon'
                                />
                                : <FiEyeOff onClick={handlePasswordVisibility}
                                    className='auth--wrapper-password__icon'
                                />}
                    </div>
                </section>
                <section className='auth--wrapper__form'>
                    <div className="auth--wrapper-password">
                        <Input
                            value={confirmPassword}
                            onChange={(e) => setConfirmPassword(e.target.value)}
                            type={isConfirmPasswordVisible ? "text" : "password"}
                            placeholder={isConfirmPasswordVisible ? "Confirm Password" : "**********"}
                            className={error ? "auth--wrapper__form-itemFour-error" : "auth--wrapper__form-itemFour"}
                        />
                        {
                            isConfirmPasswordVisible
                                ? <FiEye onClick={handleConfirmPasswordVisibility}
                                    className='auth--wrapper-password__icon' />
                                : <FiEyeOff onClick={handleConfirmPasswordVisibility}
                                    className='auth--wrapper-password__icon'
                                />}
                        <small className='error--message'>{errorMessage}</small>
                    </div>
                </section>
                <Button variant="default" onClick={validatePassword}>Reset Password</Button>
            </form>
            {isModalOpen && <Modal>
                <h3>Reset Successful!</h3>
                <p>You have successfully changed your password</p>
                <Button variant="default"><Link to="/signin">Login</Link></Button>
            </Modal>}
        </Layout>
    )
}

export default NewPassword
