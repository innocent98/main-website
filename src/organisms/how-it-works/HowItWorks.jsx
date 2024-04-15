import React from 'react'
import "./howitworks.scss"
import image1 from "../../assets/Frame 30.png"
import List from '../list/List'



const Benefit = ({title}) => {
  return (
    <div className='benefit'>
        <div className='benefit-contents'>
            <h2>{title}</h2>
            <ul>
                <List
                subTittle="Commisions"
                text="Get 70% of the first contract have a share of upto $150 on every new client refer to the network."
                />
            
                <List
                subTittle="Support"
                text="With the help of zealworkers dedicated affiliate team, you will have your questions answered and receive which ever help you need."
                />
                
                <List
                subTittle="Resources"
                text="As an affiliate, you will have access to regularly refresh logo, ads and banners to help optimize conversation."
                />
              
            </ul>
        </div>
        <div className='benefit-image'>
            <img src={image1}/>
        </div>

    </div>
  )
}

export default Benefit