import React from 'react'
import "./landingpage.scss"
import Navbar from '../../components/nav/Navbar'
import Hero from '../../components/herosection/Hero'
import Clientframe from '../../components/client-frame/Clientframe'




const LandingPage = () => {
  return (
    <>
    <Navbar/>
    <Hero/>
    <Clientframe/>
 
    </>
  )
}

export default LandingPage