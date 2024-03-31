import React from 'react'
import image from "../../../assets/Asset 4figma 1.png"
import "./frame2.scss"




const Frame2 = () => {
  return (
    <div className='frame-2'>
        <div className='frame-2-contents'>
            <h2>How it Works</h2>
            <ul>
                <li>
                    <h3>Apply To Be An Affilliate</h3>
                    <p>Users who are interested in becoming affiliates need to sign up for the affiliate program through our website either as a client or freelancer.</p>
                </li>

                <li>
                    <h3>Promote Your Affilliate Link</h3>
                    <p>The affiliate then promotes the freelancing platform using their referral link. This can be done through various channels such as social media, blogs, websites, email newsletters, etc.</p>
                </li>

                <li>
                    <h3>Earn A Commission</h3>
                    <p>Once the referred user starts using the freelancing platform, the affiliate earns a commission of 2% fee on each job done by the referred user.</p>
                </li>
            </ul>
        </div>
        <div className='frame-2-image'>
            <img src={image}/>
        </div>

    </div>
  )
}

export default Frame2