import React from 'react'
import "./landingpage.scss"
import Navbar from '../../components/nav/Navbar'
import Hero from '../../components/herosection/Hero'
import Clientframe from '../../components/client-frame/Clientframe'
import FrelancerFrame from '../../components/Freelancer-frame/FrelancerFrame'
import Recommend from '../../components/recommend/Recommend'
import Benefit from '../../components/Benefits/Benefit'




const LandingPage = () => {
  return (
    <>
    <Navbar/>
    <Hero/>
    <Clientframe/>
    <FrelancerFrame/>
    <Recommend/>
    <Benefit/>
    </>
  )
}

export default LandingPage