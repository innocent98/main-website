
import Footer from '../layout/Footer'
import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Container from '../../../../atomic/atoms/container/Container';
import Layout from '../../../../atomic/pages/freelancer/profileSetUp/layout/Layout';
import ProgressBar from '../layout/ProgressBar';
import "../profile.scss"
import Button from '../../../../atomic/atoms/button/Button';
import Image from '../../../../atomic/atoms/image/Image';


const ClientIntro = () => {

  const [progress, setProgress] = useState(33.33)
  
  return (
    <>
      <Layout footerLayout={true}>
        <main className='wrapper--padded__children-intro'>
          <h2>Tell us about our Company</h2>
          <p>We would like you to provide us some information to create your profile and you can edit it later</p>
          
          <div className='form'>
          
              <div className='upload-image'>
            
                <Image className="avatar"
                  src={"profileAvatar"}
                  alt="Selected"
                  extension="svg"
                  width={100} height={100} />
                  <input type="file"
                accept="image/*"
                style={{ display: 'none' }}
              />
              <Button variant="border">Upload company's logo</Button>
              </div>
              
          
            <div>
            <label style={{marginBottom: "0px"}}htmlFor='Name'>Company Name</label>
            <input className='com-name'
            placeholder='Name of your company'/>
            </div>
            <div>
            <label style={{marginBottom: "0px"}}  htmlFor='desc'>Company description</label>
            <textarea className='com-desc'
            placeholder='Tell us what your company is about'/>
            </div>
            

           
            
           
          </div>
        </main>
      </Layout>
      <div className="f-progress-section">
        <ProgressBar progress={progress} />
        <Footer
          prevRoute="/client-get-started"
          nextRoute="/client-profile-setup-page2"
          btnText="Next"
        />
      </div>
    </>
  )
}

export default ClientIntro
