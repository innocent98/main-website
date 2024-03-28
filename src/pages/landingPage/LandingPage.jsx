import React from 'react'
import Navbar from '../../components/landingpage/nav/Navbar'
import Hero from '../../components/landingpage/herosection/Hero'
import Clientframe from '../../components/landingpage/client-frame/Clientframe'
import FrelancerFrame from '../../components/landingpage/Freelancer-frame/FrelancerFrame'
import Recommend from '../../components/landingpage/recommend/Recommend'
import Benefit from '../../components/landingpage/Benefits/Benefit'
import HowItWorks from '../../components/landingpage/Howitworks/HowItWorks'
import ZealToken from '../../components/landingpage/zealtoken/ZealToken'
import BlogFrame from '../../components/landingpage/blog-frame/BlogFrame'
import Footer from '../../components/landingpage/footer/Footer'




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