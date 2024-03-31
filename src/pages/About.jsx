import React from 'react'
import Header from '../components/aboutpage/header/Header'
import Stats from '../components/aboutpage/stats-frame/Stats'
import Blogframe from '../components/aboutpage/blog-frame/Blogframe'



const About = () => {
  return (
    <div>
      <Header/>
      <Stats/>
      <Blogframe/>
    </div>
  )
}

export default About