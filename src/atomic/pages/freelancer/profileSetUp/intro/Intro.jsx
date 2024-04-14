import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Layout from '../layout/Layout'

const Intro = () => {
  return (
   <Layout footerLayout={true}>
     <main className='wrapper--padded__children-intro'>
      <h2>Tell us about yourself</h2>
      <p>We would like you to provide us some informations to create your profile and you can edit it later</p> 
      <form action="">
        <label htmlFor="gender"> Gender</label> <br />
        <select name="" id="" className='select'>
          <option value="Male" selected>Selct Gender</option>
          <option value="Male">Male</option>
          <option value="Female">Female</option>
        </select><br />
        <label htmlFor="about"> Bio</label> <br />
        <textarea name="" id="" cols="48" rows="10" draggable="false" placeholder='Tell us about yourself' style={{fontFamily: "Nunito, sans-serif"}}></textarea>
      </form>
      <Link to="/setup_profile/select_skills"> select skills</Link>
    </main>
   </Layout>
  )
}

export default Intro
