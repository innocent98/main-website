import React from 'react'
import "./landingpage.scss"
import Navbar from '../../components/nav/Navbar'
import Hero from '../../components/herosection/Hero'
import Clientframe from '../../components/client-frame/Clientframe'
import FrelancerFrame from '../../components/Freelancer-frame/FrelancerFrame'
import Recommend from '../../components/recommend/Recommend'
import Benefit from '../../components/Benefits/Benefit'
import HowItWorks from '../../components/Howitworks/HowItWorks'
import ZealToken from '../../components/zealtoken/ZealToken'
import BlogFrame from '../../components/blog-frame/BlogFrame'
import Footer from '../../components/footer/Footer'




const LandingPage = () => {
  return (
    <>
    <Navbar/>
    <Hero/>
    <Clientframe/>
    <FrelancerFrame/>
    <Recommend/>
    <Benefit/>
    <HowItWorks/>
    <ZealToken/>
    <BlogFrame/>
    <Footer/>
    </>
  )
}

export default LandingPage