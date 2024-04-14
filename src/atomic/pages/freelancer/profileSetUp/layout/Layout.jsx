import React from 'react'
import Image from '../../../../atoms/image/Image'
import Container from '../../../../atoms/container/Container'

const Layout = ({ children }) => {
  const ext = "svg"

  return (
    <Container variant="wrapper--padded" className="wrapper--padded">
      <div>
        <Image src="logo" alt="logo" extension={ext} />
      </div>
      <section className='wrapper--padded__children'>
        {children}
      </section>
    </Container>
  )
}


export default Layout
