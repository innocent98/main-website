import React, { useState } from 'react'
import profiledata from './dummy'
import { Link } from 'react-router-dom';
import { FaRegEdit } from "react-icons/fa";
import { IoIosAddCircle } from "react-icons/io";
import { RiDeleteBin6Line } from "react-icons/ri";
import Container from '../../../../atomic/atoms/container/Container';
import Image from '../../../../atomic/atoms/image/Image';
import Button from '../../../../atomic/atoms/button/Button';
import Layout from '../../../../atomic/pages/freelancer/profileSetUp/layout/Layout';
import ProgressBar from '../layout/ProgressBar';
import Footer from '../layout/Footer';


const ClientPreview = () => {
    const footerLayout = false;
    const [progress, setProgress] = useState(33.33)
    return (
        <>
        <Layout footerLayout={footerLayout}>
            <h2>preview</h2>
            <p>make any edits you want, then submit your profile</p>
            <Container variant="wrapper--flex">
                <Image />
                <div>
                    <p style={{ margin: 0 }}>Lookingfor</p>
                    <p style={{ margin: 0 }}>Lagos, Nigeria</p>
                </div>
            </Container>
            <section className='layout--data-section'>
                {profiledata.map((data) => {
                    return (
                        <div className='data--wrapper'>
                            <Container variant="wrapper--flex--between" className="preview--container__custom">
                                <h3>{data.title}</h3>
                                <div>
                                    {data.addIcon && <IoIosAddCircle className='preview--icon' />}
                                    <FaRegEdit className='preview--icon' />
                                </div>
                            </Container>
                            <Container variant="wrapper--flex--between" className="preview--container__custom">
                                <p>{data.body}</p>
                                {data.addIcon && <RiDeleteBin6Line className='preview--icon' />}
                            </Container>
                        </div>
                    )
                })}
                
            </section>
        </Layout>
        <Container className="progress-section">
        <Footer
          prevRoute="/client-profile-setup-page3"
          nextRoute="/client-setup_profile/success"
          btnText="Done"
        />
      </Container>
        </>
    )
}

export default  ClientPreview 
