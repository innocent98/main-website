import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Image from '../../../../atoms/image/Image'
import Button from '../../../../atoms/button/Button'
import ClientSignUp from '../accounts/client/ClientSignUp'
import Container from '../../../../atoms/container/Container'
import FreelancerSignUp from '../accounts/freelancer/FreelancerSignUp'

const InteractiveFormComponent = () => {
    // button active states
    const [clientActive, setClientActive] = useState(false)
    const [freelanceActive, setFreelanceActive] = useState(true)

    //handle button active state function
    const handleActiveState = () => {
        setClientActive(!clientActive)
        setFreelanceActive(!freelanceActive)
    }
    return (
        <Container variant="wrapper" className="signup">
            <Container variant="wrapper--flex--center" className="signup--img-container">
                <Image className="" src="logo" extension="svg" width={150} />
            </Container>
            <div className='wrapper--link-container'>
                <Link to="/" className='link'>Back to website</Link>
            </div>
            <Container variant="wrapper--flex--center">
                <Container variant="flex" className="wraper--btn-group">
                    <Button
                        variant="transparent"
                        onClick={handleActiveState}
                        className={freelanceActive ? "wrapper--btn-group__itemOne-active" : "wrapper--btn-group__itemOne"}
                    >
                        Freelancer
                    </Button>
                    <Button
                        variant="transparent"
                        onClick={handleActiveState}
                        className={clientActive ? "wrapper--btn-group__itemTwo-active" : "wrapper--btn-group__itemTwo"}
                    >
                        Client
                    </Button>
                </Container>
            </Container>
            {freelanceActive ? <FreelancerSignUp /> : <ClientSignUp />}
        </ Container>
    )
}

export default InteractiveFormComponent