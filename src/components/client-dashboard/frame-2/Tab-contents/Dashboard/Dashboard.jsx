import React from 'react'
import "./dashboard.scss"
import { FiDownload } from 'react-icons/fi'
import DashCard from '../../../../../organisms/DashCard/DashCard'

const Dashboard = () => {
  return (
    <div className='dashboard'>
       <DashCard 
       NumberElement={0}
       CardTitle="Post Jobs"
       background="#007AFF"
      />
       <DashCard 
       NumberElement={0}
       CardTitle="Pending Jobs"
       background="#53C546"
      />
       <DashCard 
       NumberElement={0}
       CardTitle="Approved Jobs"
       background="#2D432C"
      />
       <DashCard 
       NumberElement={0}
       CardTitle="Sucessful Jobs"
       background="
       #7E6F84"
      />
    </div>
  )
}

export default Dashboard