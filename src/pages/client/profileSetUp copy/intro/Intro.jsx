
import Footer from '../layout/Footer'
import React, { useState } from 'react'
import { Link } from 'react-router-dom'

import Container from '../../../../atomic/atoms/container/Container';

import Layout from '../../../../atomic/pages/freelancer/profileSetUp/layout/Layout';
import ProgressBar from '../layout/ProgressBar';
import InputField from '../../../../atoms/input/InputField';
import Textarea from '../../../../atoms/textarea/Textarea';
import "./intro.scss"

const ClientIntro = () => {
  const [progress, setProgress] = useState(33.33)
  return (
    <>
      <Layout footerLayout={true}>
        <main className='wrapper--padded__children-intro'>
          <h2>Tell us about our Company</h2>
          <p>We would like you to provide us some information to create your profile and you can edit it later</p>
          <form action="">
            <InputField
            label="Company's name"
            className="com-name"/>
            <Textarea
            label="Company's description"/>
           
          </form>
        </main>
      </Layout>
      <Container className="progress-section">
        <ProgressBar progress={progress} />
        <Footer
          prevRoute="/client-get-started"
          nextRoute="/client-profile-setup-page2"
          btnText="Next"
        />
      </Container>
    </>
  )
}

export default ClientIntro
