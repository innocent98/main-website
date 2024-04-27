import React from 'react'
import Card from './Card'

const Dashboard = () => {
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
        <div><p>Jobs will appear when you are approved</p></div>
        <div><p>View All Jobs</p></div>
    </div>
    </>
  )
}

export default Dashboard