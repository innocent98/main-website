import { LuEye } from "react-icons/lu";
import React, { useState } from 'react'
import { LuEyeOff } from "react-icons/lu";
import Button from "../../../../atoms/button/Button";

const SecuritySettings = () => {

  // states
  const [valid, setValid] = useState(true);
  const [inputValue, setInputValue] = useState({
    oldPassword: "",
    newPassword: "",
    conFirmPassword: ""
  })
  const [passwordVisibility, setPasswordVisibility] = useState({
    oldPassword: false,
    newPassword: false,
    conFirmPassword: false
  })
  const [errorMsg, setErrorMsg] = useState(false)
  const [confirmPasswordValid, setConfirmPasswordValid] = useState(true);

  // functions to handle input fields and password
  const handleChange = (e, name) => {
    const value = e.target.value;
    setInputValue((prev) => ({ ...prev, [name]: value }));

    // Validate password using the regex
   if (name === "newPassword") {
    const isValid = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/.test(value);
    setValid(isValid);
   }

   if (name === 'confirmPassword') {
    const isValid = value === inputValue.newPassword;
    setConfirmPasswordValid(isValid);
  }
  };

  //function to handle password visibility
  const toggleVisibility = (fieldName) => {
    setPasswordVisibility(prevState => ({
      ...prevState,
      [fieldName]: !prevState[fieldName]
    }));
  };

  //function to submit form
  const handleSubmit =(e)=>{
    e.preventDefault()
    if(!confirmPasswordValid){
      setErrorMsg(true)
      console.log(errorMsg);
    }else{
      setErrorMsg(false)
    }

  }

  return (
    <main className='security--settings'>
      <h3>
        Security
      </h3>
      <form action="">
        <h4>
          Change Password
        </h4>

        <div className='input--wrapper'>
          <label htmlFor="name">Old Password</label>
          <input required  value={inputValue.oldPassword} onChange={(e) => handleChange(e, "oldPassword")} type={passwordVisibility.oldPassword ? "text" : "password"} placeholder='Jane Doe' className="" />
          <span variant="transparent" className="eye--btn" onClick={() => toggleVisibility('oldPassword')}>
            {passwordVisibility.oldPassword ? <LuEye /> : <LuEyeOff />}
          </span>
        </div>

        <div className='input--wrapper'>
          <label htmlFor="name">New Password</label>
          <input required type={passwordVisibility.newPassword ? "text" : "password"} value={inputValue.newPassword} onChange={(e) => handleChange(e, "newPassword")} placeholder='Jane Doe' className="" />
          <span variant="transparent" className="eye--btn" onClick={() => toggleVisibility('newPassword')}>
            {passwordVisibility.newPassword ? <LuEye /> : <LuEyeOff />}
          </span>
          {!valid && <small>Password must be at least 8 characters long and contain letters and numbers.</small>}
        </div>

        <div className='input--wrapper'>
          <label htmlFor="name">Confirm New Password</label>
          <input required type={passwordVisibility.conFirmPassword ? "text" : "password"} placeholder='Jane Doe' className="" />
          <span variant="transparent" className="eye--btn" onClick={() => toggleVisibility('conFirmPassword')}>
            {passwordVisibility.conFirmPassword ? <LuEye /> : <LuEyeOff />}
            {errorMsg && <p style={{ color: 'red' }}>Passwords do not match.</p>}
          </span>
        </div>
        <Button variant="default--fit" onClick={handleSubmit}>Save Changes</Button>
      </form>
    </main>
  )
}

export default SecuritySettings
