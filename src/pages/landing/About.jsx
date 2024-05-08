import React from 'react'
import Header from '../../components/aboutpage/header/Header'
import Stats from '../../components/aboutpage/stats-frame/Stats'
import Blogframe from '../../components/aboutpage/blog-frame/Blogframe'
import Testimonial from '../../components/aboutpage/testimony/Testimonial'



const About = () => {
  return (
    <div>
      <Header/>
      <Stats/>
      <Blogframe/>
      <Testimonial/>
    </div>
  )
}

export default About