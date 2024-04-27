import Layout from '../layout/Layout'
import Footer from '../layout/Footer'
import React, { useState } from 'react'
import ProgressBar from '../layout/ProgressBar'
import Button from '../../../../atomic/atoms/button/Button'
import Container from '../../../../atomic/atoms/container/Container'


const ClientSkillSet = () => {
  const [progress, setProgress] = useState(66.66)
  return (
    <>
      <Layout footerLayout={true}>
        <main className='wrapper--padded__children-skills'>
          <h2>Your Company's Interest</h2>
          <p>What talents are you looking out for to hire.</p>
          <form action="">
            <label htmlFor="">Company’s interest</label><br />
            <select name="" id="" className='select'>
              <option value="skill" selected>e.g Software Developer, Digital Marketer</option>
              <option value="skill1">skill1</option>
              <option value="skill2">skill2</option>
              <option value="skill3">skill3</option>
              <option value="skill4">skill4</option>
            </select><br />
          </form>
          <section>
            <p>Suggested skill</p>
            <Button variant="border" className="wrapper--padded__children-skills_skills--button">UI/UX Designer</Button>
            <Button variant="border" className="wrapper--padded__children-skills_skills--button">Software Developer</Button>
          </section>
        </main>
      </Layout>
      <Container className="progress-section">

        <ProgressBar progress={progress} />
        <Footer
          prevRoute="/client-profile-setup-page1"
          nextRoute="/client-profile-setup-page3"
          btnText="Next"
        />
      </Container>
    </>
  )
}

export default ClientSkillSet
