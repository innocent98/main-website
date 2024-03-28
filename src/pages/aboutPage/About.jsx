import React from 'react'
import Navbar from '../../components/landingpage/nav/Navbar'
import Header from '../../components/aboutpage/header/Header'
import Stats from '../../components/aboutpage/stats-frame/Stats'
import Blogframe from '../../components/aboutpage/blog-frame/Blogframe'
import Footer from '../../components/landingpage/footer/Footer'


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