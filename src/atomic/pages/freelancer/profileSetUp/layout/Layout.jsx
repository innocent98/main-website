import Footer from './Footer'
import React, { useState } from 'react'
import ProgressBar from './ProgressBar'
import { useNavigate } from 'react-router-dom'
import Image from '../../../../atoms/image/Image'
import Container from '../../../../atoms/container/Container'


// this page is rough and is under serious onstruction. Pleeeaasseeee, don't touch😩😩

const Layout = ({ children, footerLayout }) => {
  const ext = "svg"

  // state
  const navigate = useNavigate()
  const [progress, setProgress] = useState(33.33);
  const [nextButtonText, setNextButtonText] = useState('Next, select your skill(s)');

  // dynamic routes
  const prevRoute =`/profile-setup-page${Math.floor(progress / 33.33)}`
  const nextRoute = `/profile-setup-page${Math.floor(progress / 33.33) + 1}`

  //fnc to increment progress by 1/3 for each section completed
  const handleNext = () => {
    setProgress(prevProgress => prevProgress + 33.33);

    switch (progress) {
      // case 66.66:
      //   setNextButtonText('Next, add a professional photo');
      //   break;
      case 99.99:
        // setNextButtonText('Preview');
        navigate("/setup_profile/preview_profile")
        break;
      // case 99.99:
      //   setNextButtonText('Preview');
      //   break;

      default:
        break;
    }
  };

  //fnc to return to get-started page when back btn is clicked while progress width is 33.33
  const handlePrev = () => {
    setProgress(prevProgress => prevProgress - 33.33);
    // switch (progress) {
    //   // case 33.33:
    //   //   setNextButtonText('Next, select your skill(s)');
    //   //   break;
    //   case 66.66:
    //     setNextButtonText('Next, add a professional photo');
    //     break;
    //   case 99.99:
    //     setNextButtonText('Preview');
    //     break;

    //   default:
    //     break;
    // }
  };


  return (
    <Container variant="wrapper--padded" className="wrapper--padded">
      <div>
        <Image src="logo" alt="logo" extension={ext} />
      </div>
      <section className='wrapper--padded__children'>
        {children}
      </section>
      {footerLayout && <Container className="progress-section">
        <ProgressBar progress={progress} />
        <Footer
          handleNext={handleNext}
          handlePrev={handlePrev}
          btnText={nextButtonText}
          prevRoute={prevRoute}
          nextRoute={nextRoute}
        />
      </Container>}
    </Container>
  )
}


export default Layout
