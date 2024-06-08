import React from 'react'
import Button from '../../../../../../atoms/button/Button'
import Container from '../../../../../../atoms/container/Container'

const RefBalance = () => {
    return (
        <main className='wallet-sub-sec'>
            <Container variant="wrapper--flex" className="wallet--flex--header">
                <p>Balance: 0.00</p>
                <Button variant="default--fit">Withdraw</Button>
            </Container>
            <Container variant="wrapper--flex--center" className="wallet--body">
                <p>No history to show</p>
            </Container>
        </main>
    )
}

export default RefBalance
