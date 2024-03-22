import React from 'react'
import "./howitworks.scss"
import icon from "../../assets/60b11850cdadf20969dcbbd9_How_it_Works_1_Post-A-Job_Martin_Nicholausson (1) 1.png"
import icon2 from "../../assets/60b11850cdadf22baadcbbdb_How_it_Works_1_Post-A-Job_Martin_Nicholausson 1.png"
import icon3 from "../../assets/60b11850cdadf22e07dcbbd7_How_it_Works_1_Post-A-Job_Martin_Nicholausson (3) 1.png"
import icon4 from "../../assets/Arrow 2.png"

const HowItWorks = () => {
  return (
    <div className='works'>
        <h2>How it Works</h2>
        <div className='procedure'>
            <div>
                <img src={icon2} alt='icon'/>
                <h3>1.Sign Up</h3>
                <p>Sign Up to get a Free Account</p>
            </div>
            <img className='arrow' src={icon4} alt='icon'/>
            <div>
                <img src={icon} alt='icon'/>
                <h3>2.Share</h3>
                <p>Share Zealworkers with Family and Friends</p>
            </div>
            <img className='arrow' src={icon4} alt='icon'/>
            <div>
                <img src={icon3} alt='icon'/>
                <h3>3.Earn Commision</h3>
                <p>Start earning when the client funds a project.</p>
            </div>
        </div>

    </div>
  )
}

export default HowItWorks