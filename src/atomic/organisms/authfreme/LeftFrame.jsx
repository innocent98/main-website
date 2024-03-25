import React from 'react'
import Image from '../../atoms/image/Image'
import Container from '../../atoms/container/Container'

const LeftFrame = () => {
    return (
        <Container variant="wrapper" className="left-frame">
            <Image src="logo" extension="svg" width={160} alt="logo" className="left-frame--img" />
            <section className='left-frame--info'>
                <h3 className='left-frame--info__masthead'>Find the right freelance service, right away!</h3>
                <div className='left-frame--textsection'>
                    <p>placeholder text</p>
                    <p>placeholder text</p>
                    <p>placeholder text</p>
                </div>
            </section>
        </Container>
    )
}

export default LeftFrame
