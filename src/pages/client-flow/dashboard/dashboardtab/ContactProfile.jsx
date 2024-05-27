import { Link } from "react-router-dom"
import avatar from "../../../../assets/Frame 133776(1).png"
import profileProject from "../../../../assets/profile-project.png"
import "../../freelancer-profile/profile.scss"
import { GrLocation } from "react-icons/gr";



const ContactProfile = () => {
  return (
    <div className='freelancer-profile_container'>
     <Link to="/client-dashboard"><p>Go back</p></Link>
      <div className='freelancer-profile_layout'>

      <div className='freelancer-profile-left'>

        <div className='freelancer-info'>
         <img src={avatar} alt=''/>
         <h3>Surname Solomon</h3>
            <div>
            <span style={{fontSize:"16px", color: "#777777",fontWeight: "500"}}>360 reviews</span>
            <p style={{display:"none"}}></p>
            </div>
        </div>

        <div className='freelancer-CTA'>
          <button style={{width:"111px"}}>Contact</button>
          <button style={{display:"none"}}></button>
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
           
          
                

       

      </div>

       
    </div>
    </div>
  )
}

export default ContactProfile;