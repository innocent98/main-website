import React from 'react'
import "./blogframe.scss"
import StatCard from '../../../organisms/numbers/StatCard'

const Blogframe = () => {
  return (
    <div className='blogframe'>
     <div className='blogframe-content'>
        <h2>Our Mission</h2>
        <p>Empowering individuals to thrive in the digital economy by providing a platform that fosters creativity, collaboration, and flexibility. Our mission is to connect freelancers with opportunities that enable them to showcase their skills, pursue their passions, and achieve financial independence.</p>
    </div>

    <div className='blogframe-content'>
        <h2>Our Vision</h2>
        <p>To create a borderless marketplace where freelancers have unrestricted access to opportunities, resources, and support, regardless of location or background. We envision a future where freelancers are not limited by traditional constraints but are free to pursue their passions, expand their horizons, and make a meaningful impact on the world.</p>
    </div>

    <div className='blogframe-content'>
        <h2>Our Values</h2>
        <p>We measure our success not just by financial metrics but by the positive impact we have on the lives of freelancers around the world. We strive to create value not only for our stakeholders but also for society as a whole, making a difference through our actions, initiatives, and advocacy efforts</p>
    </div>
       
    </div>
  )
}

export default Blogframe