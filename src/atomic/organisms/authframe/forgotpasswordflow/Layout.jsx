import React from 'react'
import Container from '../../../atoms/container/Container'

const Layout = ({ children }) => {
    return (
        <Container variant="wrapper" className="password--layout">
            <section className='password--layout__wrapper'>
                {children}
            </section>
        </Container>
    )
}

export default Layout
