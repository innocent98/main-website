import React from 'react'
import Image from '../../atoms/image/Image'
import { IoCheckmarkOutline } from "react-icons/io5";
import Container from '../../atoms/container/Container'

const LeftFrame = () => {
    return (
        <Container variant="wrapper" className="left-frame">
            <Image src="logo" extension="svg" width={160} alt="logo" className="left-frame--img" />
            <section className='left-frame--info'>
                <h3 className='left-frame--info__masthead'>Find the right freelance service, right away!</h3>
                <div className='left-frame--textsection'>
                    <Container variant="wrapper--flex" className="left-frame--textsection__child"><IoCheckmarkOutline /> Over 100 Categories</Container>
                    <Container variant="wrapper--flex" className="left-frame--textsection__child"><IoCheckmarkOutline /> Pay Per Project, Not Per Hour</Container>
                    <Container variant="wrapper--flex" className="left-frame--textsection__child"><IoCheckmarkOutline /> Access To Talents And Bussinesses Accross The Globe</Container>
                </div>
            </section>
        </Container>
    )
}

export default LeftFrame
