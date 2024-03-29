import React from 'react'
import LeftFrame from './authfreme/LeftFrame'
import Container from '../atoms/container/Container'
import InteractiveFormComponent from './authfreme/authforms/interaciveForm/InteractiveFormComponent'

const Auth = () => {
  return (
    <Container variant="wrapper--flex">
      <LeftFrame/>
      <InteractiveFormComponent/>
    </Container>
  )
}

export default Auth
