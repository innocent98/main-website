import React from 'react'
import Container from '../../atoms/container/Container'
import LeftFrame from '../../organisms/authframe/LeftFrame'
import InteractiveFormComponent from "../../organisms/authframe/authforms/interaciveForm/InteractiveFormComponent"

const Auth = () => {
  return (
    <Container variant="wrapper--flex">
      <LeftFrame/>
      <InteractiveFormComponent/>
    </Container>
  )
}

export default Auth
