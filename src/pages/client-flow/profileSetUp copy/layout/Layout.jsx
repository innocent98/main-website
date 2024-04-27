import React from 'react'
import Container from '../../../../atomic/atoms/container/Container'
import Image from '../../../../atomic/atoms/image/Image'


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
