import React from 'react'
import { useState } from 'react'
import Button from '../../../../atoms/button/Button'
import Container from '../../../../atoms/container/Container'

const AccountSettings = () => {
    const [isNameDisabled, setIsNameDisabled] = useState(true)
    const [isEmailDisabled, setIsEmailDisabled] = useState(true)

    const handleToggleNameEdit = (e) => {
        e.preventDefault()
        setIsNameDisabled(!isNameDisabled)
    }
    const handleToggleEmailEdit = (e) => {
        e.preventDefault()
        setIsEmailDisabled(!isEmailDisabled)
    }
    return (
        <main className='account--settings'>
            <form action="">
                <h3>
                    Account
                </h3>
                <div className='input--wrapper'>
                    <label htmlFor="name">Full name</label>
                    <input type="text" placeholder='Jane Doe' className={isNameDisabled ? "input-disabled" : "input-active"} disabled={isNameDisabled} />
                    <Button variant="transparent" className="acc-info-edit" onClick={handleToggleNameEdit}>Edit</Button>
                    {!isNameDisabled && 
                    <Container variant="wrapper--flex--fit" className="btn-wrapper">
                        <Button variant="border--fit"  onClick={handleToggleNameEdit}>Cancel</Button>
                        <Button variant="default--fit"  onClick={handleToggleNameEdit}>Update</Button>
                    </Container>}
                </div>
                <div className='input--wrapper'>
                    <label htmlFor="email">Email address</label>
                    <input type="text" placeholder='jan***@eg.com' className={isEmailDisabled ? "input-disabled" : "input-active"} disabled={isEmailDisabled} />
                    <Button variant="transparent" className="acc-info-edit" onClick={handleToggleEmailEdit}>Edit</Button>
                </div>
                <div className='input--wrapper'>
                    <label htmlFor="phone">Phone number</label>
                    <input type="text" placeholder='Jane Doe' className='input-active' />
                </div>
                <h4>
                    Bank Details
                </h4>
                <div className='input--wrapper'>
                    <label htmlFor="bank">Select bank</label>
                    <select name="" id="" className="input-active">
                        <option value="">Select</option>
                        <option value="">option1</option>
                        <option value="">option1</option>
                    </select>
                </div>
                <div className='input--wrapper'>
                    <label htmlFor="acc-no">Account number</label>
                    <input type="text" placeholder='Type account number' className="input-active" />
                    <small className='acc-name'>Name automatically generated here</small>
                </div>
                <Button variant="default--fit">Save Changes</Button>
                <h4>
                    Add Zealworkers Token Address
                </h4>
                <div className='input--wrapper'>
                    <label htmlFor="address">Address</label>
                    <input type="text" placeholder='Wallet Address' className="input-active" />
                </div>
                <div className='input--wrapper'>
                    <label htmlFor="network">Network</label>
                    <select name="" id="" className="input-active">
                        <option value="">Select Crypto network</option>
                        <option value="">option1</option>
                        <option value="">option1</option>
                    </select>
                </div>
                <Button variant="default--fit">Save Changes</Button>
            </form>
        </main>
    )
}

export default AccountSettings
