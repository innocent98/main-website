import React from 'react'
import Card from './Card'
import { Link } from 'react-router-dom'

const Dashboard = () => {

    const jobAvailable = true
  return (
    <>
    <div className='dashboard_wrapper'>
        <Card 
            cardColor="#007AFF"
            cardTitle="Post Jobs"
            postJobNumber="0"
        />
        <Card 
            cardColor=" #53C546"
            cardTitle="Pending Jobs"
            postJobNumber="0"
        />
        <Card 
            cardColor="#2D432C"
            cardTitle="Approved Jobs"
            postJobNumber="0"
        />
        <Card 
            cardColor="#7E6F84"
            cardTitle="Sucessful Jobs"
            postJobNumber="0"
        />
    </div>
    <div className='groupB_wrapper'>
       
        <div><p>Post Jobs</p></div>
        { jobAvailable?
        <div className='job-details'>
            <div className='job-details_content'>
            <div>
                <div><p>Product Designer</p> <span>LOVECLIP | Lagos, Nigeria</span></div>
                <div>$1,000 - $2,000</div>
            </div>

            <div>
                <div> <p>Freelancer's Name</p> <span>Surname Solomon</span></div>
              
            </div>

            <div>
            
                <button className='btn'>Mark as complete</button>
                <button style={{background:"none", color:"#B304FD", border:"1px solid #B304FD"}} className='btn'>Report</button>
            </div>
            </div>
            
        </div>
        :
        <div><p>Jobs will appear when you are approved</p></div>
        }
        <div><Link className='link' to="/"><p>View All Jobs</p></Link></div>
    </div>
    </>
  )
}

export default Dashboard