import React from 'react'
import profiledata from './dummy'
import Layout from '../layout/Layout'
import { Link } from 'react-router-dom';
import { FaRegEdit } from "react-icons/fa";
import { IoIosAddCircle } from "react-icons/io";
import Image from '../../../../atoms/image/Image'
import { RiDeleteBin6Line } from "react-icons/ri";
import Button from '../../../../atoms/button/Button'
import Container from '../../../../atoms/container/Container'

const Preview = () => {
    const footerLayout = false;
    return (
        <Layout footerLayout={footerLayout}>
            <h2>preview</h2>
            <p>make any edits you want, then submit your profile</p>
            <Container variant="wrapper--flex">
                <Image />
                <div>
                    <p style={{ margin: 0 }}>Solomon Tosin</p>
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
                <Button variant="fitted">
                    <Link to="/setup_profile/success" className='link--white'>
                        Submit Profile
                    </Link>
                </Button>
            </section>
        </Layout>
    )
}

export default Preview
