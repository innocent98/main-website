import Footer from './Footer'
import ProgressBar from './ProgressBar'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Image from "../../../atoms/image/Image"
import Container from "../../../atoms/container/Container"

const Layout = ({ children, footerLayout }) => {
  // state
  const navigate = useNavigate()
  const [progress, setProgress] = useState(33.33);

  //fnc to increment progress by 1/3 for each section completed
  const handleNext = () => {
    setProgress(prevProgress => prevProgress + 33.33);
  };
  //fnc to return to get-started page when back btn is clicked while progress width is 33.33
  const handlePrev = () => {
    if (progress === 33.33) {
      navigate("/get-started")
    }else{
      setProgress(prevProgress => prevProgress - 33.33);
    }
  };

  return (
    <Container variant="wrapper--padded">
      <div>
        <Image src="logo" alt="logo" extension='svg' />
      </div>
      <section className='wrapper--padded__children'>
        {children}
      </section>
      {footerLayout && <Container>
        <ProgressBar progress={progress} />
        <Footer handleNext={handleNext} handelPrev={handlePrev} />
      </Container>}
    </Container>
  )
}

export default Layout
