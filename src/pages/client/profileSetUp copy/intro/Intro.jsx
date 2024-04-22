
import Footer from '../layout/Footer'
import React, { useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import Container from '../../../../atomic/atoms/container/Container';
import Layout from '../../../../atomic/pages/freelancer/profileSetUp/layout/Layout';
import ProgressBar from '../layout/ProgressBar';
import "../profile.scss"
import Button from '../../../../atomic/atoms/button/Button';
import Image from '../../../../atomic/atoms/image/Image';
import Modal from '../../../../atomic/molecules/modal/Modal';


const ClientIntro = () => {

  const [progress, setProgress] = useState(33.33)
    //states
    const fileInputRef = useRef(null);
    const [isModalOpen, setIsModalOpen] = useState(false)
    const [selectedImage, setSelectedImage] = useState(null);
  
    //dynamic image extensions based on users' selected image
    const imageExtension = "png" || "jpg" || "jpeg" || "svg"
  
  
    //handle toggle modal open fnc
    const handleModalOpen = () => {
      setIsModalOpen(!isModalOpen)
    }
  
    // fnc to handle file selection
    const handleFileSelect = (event) => {
      const file = event.target.files[0];
      if (file) {
        // display selected image in preview frame
        const reader = new FileReader();
        reader.onload = () => {
          setSelectedImage(reader.result);
        };
        reader.readAsDataURL(file);
        console.log(file);
      }
    };
  return (
    <>
      <Layout footerLayout={true}>
        <main className='wrapper--padded__children-intro'>
          <h2>Tell us about our Company</h2>
          <p>We would like you to provide us some information to create your profile and you can edit it later</p>
          
          <div className='form'>
          
              <div className='upload-image'>
            
                <Image className="avatar"
                  src={selectedImage ? selectedImage : "profileAvatar"}
                  alt="Selected"
                  extension={imageExtension}
                  width={100} height={100} />

                <input type="file"
                accept="image/*"
                onChange={handleFileSelect}
                style={{ display: 'none' }}
                ref={fileInputRef}
              />
              <Button variant="border" onClick={handleModalOpen}>Upload company's logo</Button>
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

        {isModalOpen && <Modal className="modal">
            <h2>Your Photo</h2>
            <section className='section'>
              <div className='section--profileImage--wrapper'>
                <Image
                  src="logo"
                  alt="Selected"
                  extension={imageExtension}
                  width={100} height={100} />
              </div>
              <p>This photo must be an actual image of you</p>
            </section>
            <Container variant="wrapper--flex" className="modal--btnSec">
              <Button variant="border--fit" onClick={handleModalOpen}>Cancel</Button>
              <Button variant="default--fit" onClick={() => fileInputRef.current.click()}>Attach Photo</Button>
            </Container>
          </Modal>}


        <Footer/>
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
