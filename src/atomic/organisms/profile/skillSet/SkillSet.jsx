import React from 'react'
import { Link } from 'react-router-dom'
import Button from '../../../atoms/button/Button'

const SkillSet = () => {
  return (
    <div>
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
        <Button variant="border">UI/UX Designer</Button> 
        <Button variant="border">Software Developer</Button>
      </section>
      <Link to="/setup_profile/upload_profile_image">Upload image </Link>
    </div>
  )
}

export default SkillSet
