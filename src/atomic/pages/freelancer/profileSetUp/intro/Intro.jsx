import Layout from '../layout/Layout'
import Footer from '../layout/Footer'
import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import ProgressBar from '../layout/ProgressBar'
import Container from '../../../../atoms/container/Container'

const Intro = () => {
  const [progress, setProgress] = useState(33.33)
  return (
    <>
      <Layout footerLayout={true}>
        <main className='wrapper--padded__children-intro'>
          <h2>Tell us about yourself</h2>
          <p>We would like you to provide us some informations to create your profile and you can edit it later</p>
          <form action="">
            <label htmlFor="gender"> Gender</label> <br />
            <select name="" id="" className='select' defaultValue="Select Gender">
              <option value="Male">Male</option>
              <option value="Female">Female</option>
            </select><br />
            <label htmlFor="about"> Bio</label> <br />
            <textarea name="" id="" cols="48" rows="10" draggable="false" placeholder='Tell us about yourself' style={{ fontFamily: "Nunito, sans-serif" }}></textarea>
          </form>
        </main>
      </Layout>
      <Container className="progress-section">
        <ProgressBar progress={progress} />
        <Footer
          prevRoute="/get-started"
          nextRoute="/profile-setup-page2"
          btnText="Next, select your skill(s)"
        />
      </Container>
    </>
  )
}

export default Intro
