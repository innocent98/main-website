import React from 'react'
import "./benefits.scss"
import image1 from "../../../assets/Frame 30.png"
import HowItWorks from "../../../organisms/how-it-works/HowItWorks"
import List from '../../../organisms/list/List'


const Benefit = () => {
  return (
        <div>
            <HowItWorks 
                title="Zealworkers Affiliate Benefits"
                image={image1} 
            />
              
        </div>
  )
}

export default Benefit