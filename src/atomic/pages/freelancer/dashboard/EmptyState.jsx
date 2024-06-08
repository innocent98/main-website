import React from 'react'
import Button from '../../../atoms/button/Button'
import Image from "../../../atoms/image/Image"
import Container from '../../../atoms/container/Container'

const EmptyState = ({toggleState, stateTitle, stateDescription}) => {
    return (
        <Container variant="wrapper--flex--center">
            <section className='no-review-text'>
                <Image src="no-review" alt="no-review" extension='png' width={250} />
                <h2>{stateTitle}</h2>
                <p>{stateDescription}</p>
                <Button variant="default" onClick={toggleState}>Click to toggle state</Button>
            </section>
        </Container>
    )
}

export default EmptyState
