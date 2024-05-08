import React from 'react'
import Button from '../../../../atoms/button/Button'
import Image from "../../../../../atomic/atoms/image/Image"
import Container from '../../../../atoms/container/Container'

const EmptyState = ({toggleState}) => {
    return (
        <Container variant="wrapper--flex--center">
            <section className='no-review-text'>
                <Image src="no-review" alt="no-review" extension='png' width={250} />
                <h2>You have no review(s) yet</h2>
                <p>Finish jobs for clients to get reviews</p>
                <Button variant="default" onClick={toggleState}>Click to toggle review state</Button>
            </section>
        </Container>
    )
}

export default EmptyState
