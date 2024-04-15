import React from 'react'
import Layout from '../layout/Layout'
import { Link } from 'react-router-dom'
import Image from '../../../../atoms/image/Image'
import Button from '../../../../atoms/button/Button'
import Container from '../../../../atoms/container/Container'

const Success = () => {
    return (
        <Layout footerLayout={false}>
            <Container variant="wrapper--flex--center__col">
                <div>
                    <Image src="cong 1" alt="congratulations" extension='svg' width={200} height={200} />
                </div>
                <h1>Profile successfully created</h1>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iure dolorem ratione maiores, assumenda blanditiis facilis earum aspernatur perspiciatis cupiditate! Exercitationem.</p>
                <Button variant="fitted">
                    <Link to="/freelancer-dashboard" className='link--white'>
                        Go to Dashboard
                    </Link>
                </Button>
            </Container>
        </Layout>
    )
}

export default Success
