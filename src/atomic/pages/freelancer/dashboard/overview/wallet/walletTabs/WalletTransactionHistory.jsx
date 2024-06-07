import React from 'react'
import Container from '../../../../../../atoms/container/Container'
import Button from '../../../../../../atoms/button/Button'

const WalletTransactionHistory = () => {
  return (
    <main className='wallet-sub-sec'>
            <Container variant="wrapper--flex" className="wallet--flex--header">
                <p>Balance: 0.00</p>
                <Button variant="default--fit">Withdraw</Button>
            </Container>
            <Container variant="wrapper--flex--center" className="wallet--body">
                <p>No transaction history to display</p>
            </Container>
        </main>
  )
}

export default WalletTransactionHistory
