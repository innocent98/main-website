import { Link } from "react-router-dom"
import avatar from "../../../assets/Frame 133776(1).png"
import profileProject from "../../../assets/profile-project.png"
import "./profile.scss"
import { GrLocation } from "react-icons/gr";
import {  Rating} from '@mui/material'


const Profile = () => {
  return (
    <div className='freelancer-profile_container'>
     <Link to="/client-dashboard"><p>Go back</p></Link>
      <div className='freelancer-profile_layout'>

      <div className='freelancer-profile-left'>

        <div className='freelancer-info'>
         <img src={avatar} alt=''/>
            <div>
             <h3>Surname Solomon</h3> 
              <p>New</p>
            </div>
        </div>

        <div className='freelancer-CTA'>
          <button>Accept</button>
          <button>Ignore</button>
        </div>

        <div className='freelancer-bio'>
          <h4>Bio</h4>
          <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aspernatur, obcaecati esse? Dignissimos, voluptates labore! Quas nobis reiciendis, minima et, rerum, qui ducimus autem animi eaque fugit molestiae? Odio, voluptates est.</p>

        </div>

        <div className='freelancer-skills'>
        <h4>Skills</h4>
        <div className="skill">
        <div>UI/UX Designer</div>
        <div>Framer Developer</div>
        </div>
       
        </div>

        <div className='freelancer-location'>
        <h4> Location</h4>
        <div> <GrLocation style={{fontSize:"30px"}}/> <span style={{fontWeight:"600"}}>Lagos, Nigeria</span></div>
        
        </div>

       
        
        </div>
        <div className='freelancer-profile-right'>

            <div className='fp-top'>
              <div className='myworks'>
              <h2 style={{marginBottom: "10px"}}>My works</h2>
              <div className='myworks-content'>
               
              <div  className='work'>
                    <img src={profileProject}/>
                      <div className='work-info'>
                        <p>Project name</p>
                        <p>Project description</p>
                      </div>
                </div>


                <div  className='work'>
                    <img src={profileProject}/>
                      <div className='work-info'>
                        <p>Project name</p>
                        <p>Project description</p>
                      </div>
                </div>

              </div>
              
              </div>

             
          
              
            </div>
            <div className='fp-bottom'>
            <div className='reviews'>
                <h2>Reviews</h2>
                
                <div className='review-box'>
                  <div className='reviewer-info'>
                  <div> <div><img src={profileProject}/> <p>Mustapha Costa</p></div></div>
                 <div>  <Rating className="rating"  name="read-only" value={4} readOnly /> <span className="span">November 21 2023</span></div>
                  </div>
                  <div className='review-content '>
                  I had the pleasure of working with Ojay on a recent project and I am beyond impressed with their skills and professionalism. He demonstrated a deep understanding of the task at hand and delivered high-quality work within the agreed-upon timeframe.
                  </div>
              </div>


              <div className='review-box'>
                  <div className='reviewer-info'>
                  <div> <div><img src={profileProject}/> <p>Costa Costa</p></div></div>
                 <div>  <Rating className="rating"  name="read-only" value={4} readOnly /> <span className="span">November 21 2023</span></div>
                  </div>
                  <div className='review-content '>
                  Ojay is a clear communicator, providing regular updates and promptly addressing any questions or concerns. He exceeded my expectations with their attention to detail and innovative approach to solving challenges. I highly recommend Freelancer's Name for anyone seeking a dedicated and talented professional.
                  </div>
              </div>
            </div>
          
                

        </div>

      </div>

       
    </div>
    </div>
  )
}

export default Profile