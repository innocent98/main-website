import Layout from '../layout/Layout'
import Footer from '../layout/Footer'
import React, { useState } from 'react'
import ProgressBar from '../layout/ProgressBar'
import Button from '../../../../atoms/button/Button'
import Container from '../../../../atoms/container/Container'

const SkillSet = () => {
  const [progress, setProgress] = useState(66.66)
  return (
    <>
      <Layout footerLayout={true}>
        <main className='wrapper--padded__children-skills'>
          <h2>select your skill(s)</h2>
          <p>Your skills shows the clients what you can offer and it helps us to choose which work to recommed to you.</p>
          <form action="">
            <label htmlFor="">Your Skill(s)</label><br />
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
            <Button variant="border-zeal" className="wrapper--padded__children-skills_skills--button">UI/UX Designer</Button>
            <Button variant="border-zeal" className="wrapper--padded__children-skills_skills--button">Software Developer</Button>
          </section>
        </main>
      </Layout>
      <Container className="progress-section">

        <ProgressBar progress={progress} />
        <Footer
          prevRoute="/profile-setup-page1"
          nextRoute="/profile-setup-page3"
          btnText="Next, upload a profile photo"
        />
      </Container>
    </>
  )
}

export default SkillSet
