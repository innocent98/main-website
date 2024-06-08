import React from 'react'
import Button from '../../../../../../atoms/button/Button'
import Container from '../../../../../../atoms/container/Container'

const CryptoBalance = () => {
  return (
    <main className='wallet-sub-sec'>
    <Container variant="wrapper--flex" className="wallet--flex--header">
        <p>Balance: 0 ZWT</p>
        <Button variant="default--fit">Withdraw</Button>
    </Container>
    <Container variant="wrapper--flex--center" className="wallet--body">
        <p>No history to show</p>
    </Container>
</main>
  )
}

export default CryptoBalance
