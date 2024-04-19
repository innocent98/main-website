import React from 'react'
import Frame1 from '../../../components/client-dashboard/frame-1/Frame1'
import TabbedInterface from '../../../components/client-dashboard/frame-2/Frame2'
import Frame3 from '../../../components/client-dashboard/frame-3/Frame3'

const ClientDashboard = () => {
  return (
    <section className='D-section'>
        <Frame1/>
        <TabbedInterface/>
        <Frame3/>
      
    </section>
  )
}

export default ClientDashboard