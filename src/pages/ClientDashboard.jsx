import React from 'react'
import Frame1 from '../components/client-dashboard/frame-1/Frame1'
import TabbedInterface from '../components/client-dashboard/frame-2/Frame2'

const ClientDashboard = () => {
  return (
    <section className='D-section'>
        <Frame1/>
        <TabbedInterface/>
      
    </section>
  )
}

export default ClientDashboard