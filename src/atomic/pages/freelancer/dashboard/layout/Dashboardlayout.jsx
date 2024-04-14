import React from 'react'
import Image from '../../../../atoms/image/Image'
import Button from '../../../../atoms/button/Button'
import Container from '../../../../atoms/container/Container'

const Dashboardlayout = ({children}) => {
  return (
    <Container>
      <div>nav</div>
      <main>{children}</main>
    </Container>
  )
}

export default Dashboardlayout
