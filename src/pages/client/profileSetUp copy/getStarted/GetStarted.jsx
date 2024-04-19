import Layout from '../layout/Layout'
import React from 'react'

import { FaUser } from "react-icons/fa6";
import { BiSolidEnvelope } from "react-icons/bi";
import Container from '../../../../atomic/atoms/container/Container';
import Button from '../../../../atomic/atoms/button/Button';
import Image from '../../../../atomic/atoms/image/Image';
import { Link } from 'react-router-dom';


const GetStarted = () => {
  const footerLayout = false;

  return (
    <Layout footerLayout={footerLayout}>
      <Link to="" >cancel</Link>
      <h1>Welcome Solomony, Ready for your next big opportunity?</h1>
      <Container variant="wrapper--flex--between">
        <section>
          <p><FaUser /> Build your Profile</p>
          <p><BiSolidEnvelope /> Apply for Jobs</p>
          <p><FaUser /> Get Paid Instantly</p>
          <Container variant="wrapper--flex" className="wrapper--flex__visible">
            <Button variant="default--fit">
              <Link to="/client-profile-setup-page1" className='link'>
                Get Started
              </Link>
            </Button>
            <p className='wrapper--flex--between__text'>It takes only few steps to create your profile and you can edit it later.</p>
          </Container>
        </section>
        <section>
          <Image src="right-img" width={250} extension="svg" alt="profile" />
        </section>
        <Container variant="wrapper--flex" className="wrapper--flex__hidden">
          <Button variant="default--fit">
            <Link to="/client-profile-setup-page1" className='link'>
              Get Started
            </Link>
          </Button>
          <p className='wrapper--flex--between__text'>It takes only few steps to create your profile and you can edit it later.</p>
        </Container>
      </Container>
      {/* <Outlet/> */}
    </Layout>
  )
}

export default GetStarted
