import Footer from '../layout/Footer'
import Layout from '../layout/Layout'
import React, { useState, useRef } from 'react'
import ProgressBar from '../layout/ProgressBar'
import Button from '../../../../atomic/atoms/button/Button'
import Container from '../../../../atomic/atoms/container/Container'
import Image from '../../../../atomic/atoms/image/Image'
import ProfileAvatar from "../../../../assets/profileAvatar.svg"
import Modal from '../../../../atomic/molecules/modal/Modal'


const ClientUploadImg = () => {
  //states
  const fileInputRef = useRef(null);
  const [progress, setProgress] = useState(99.99)
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
        <main className='uploadImage'>
          <h2> Your company's details</h2>
          <p>fill in other details of your company</p>
          <Container variant="wrapper--flex" className="uploadImage--wrapper--flex">
          <section className='uploadImage--wrapper--flex__imageSection'>
              <div>
                <Image
                  src={selectedImage ? selectedImage : {ProfileAvatar}}
                  alt="Selected"
                  extension={imageExtension}
                  width={100} height={100} />
              </div>
              <input type="file"
                accept="image/*"
                onChange={handleFileSelect}
                style={{ display: 'none' }}
                ref={fileInputRef}
              />
              <Button variant="border" onClick={handleModalOpen}>Upload Company's logo</Button>
            </section>
            <section className='uploadImage--wrapper--flex__formSection'>
              <form action="">
                <div>
                  <label htmlFor="">Country</label><br />
                  <input type="text" placeholder='Country' className='input' />
                </div>
                <div>
                  <label htmlFor="">Zip/Postal Code</label><br />
                  <input type="text" placeholder='Zip/Postal Code' />
                </div>
                <div>
                  <label htmlFor="">Company's links</label><br />
                  <input type="text" placeholder='URL, Twitter, Linkedin' />
                </div>
              </form>
            </section>
          </Container>
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
        </main>
      </Layout>
      <Container className="progress-section">
        <ProgressBar progress={progress} />
        <Footer
          btnText="Review"
          prevRoute="/client-profile-setup-page2"
          nextRoute="/client-setup_profile/preview_profile"
        />
      </Container>
    </>
  )
}

export default ClientUploadImg  