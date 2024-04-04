import "../profile.scss"
import React from 'react'
import Button from '../../../atoms/button/Button'
import Container from '../../../atoms/container/Container'
import { Link } from "react-router-dom"

const Footer = ({handleNext, handelPrev}) => {
    return (
        <main>
            {/* <hr /> */}
            <Container variant="wrapper--flex--between">
                <Button variant="border" onClick={handelPrev}>Back</Button>
                <Button variant="fitted" onClick={handleNext}>
                    <Link to="/setup_profile/select_skills">next</Link>
                </Button>
            </Container>
        </main>
    )
}

export default Footer
