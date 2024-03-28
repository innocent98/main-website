import React from 'react'
import StatCard from '../../../organisms/numbers/StatCard'
import "./stats.scss"


const Stats = () => {
  return (
    <div className='numbers'>
        <h1>Trust The Numbers</h1>
        <div className='numbers-content'>
            <StatCard
            number="100k+"
            title="Active clients"
            desc="Join our platform to tap into this expansive network of clients actively seeking top-tier talent."/>

            <StatCard
            number="100k+"
            title="Active talents"
            desc="With over 100,000 active talents, our platform connects you with a vibrant community of freelancers, ensuring you have the talent you need to bring your projects to life."/>
            
            <StatCard
            number="95%"
            title="Success rate"
            desc="With a remarkable 95% success rate, our clients consistently find the right talent, complete projects with precision, and leave a trail of satisfied freelancers."/>
        </div>
    </div>
  )
}

export default Stats