import React, { useState } from 'react'
import Button from '../../../../atomic/atoms/button/Button'

const Jobs = () => {
  const [firstSection, showFirstSection ] = useState(true)
  const [SecondSection, showSecondSection ] = useState(false)
  const HandleNextClick = () => {
    showFirstSection(!firstSection)
    showSecondSection(!SecondSection)
  }
  const HandleBackClick = () => {
    showFirstSection(true)
    showSecondSection(false)
  }
  return (
   <>
   { firstSection && (
    <div className='jobs_wrapper'>
        <div>
            <label htmlFor='work-category'>Select Work Category</label>
            <select  className='jobs_select' id='work-category' >
            <option disabled value="category" selected>Search to select category...</option>
              <option value="Art and Creative designs">Art and Creative designs</option>
              <option value="Video And Animination">Video And Animination</option>
              <option value="Event Planning"> Event Planning</option>
              <option value="Pending">Pending</option>
              <option value="Pending">Pending</option>
              <option value="Pending">Pending</option>
              <option value="Pending">Pending</option>
              <option value="Pending">Pending</option>
              <option value="Pending">Pending</option>
              <option value="Pending">Pending</option>
              <option value="Pending">Pending</option>
              <option value="Pending">Pending</option>
              <option value="Pending">Pending</option>
              <option value="Pending">Pending</option>
              <option value="Pending">Pending</option>
            </select>
        </div>
        <div>
            <label htmlFor='service-type'>Service type</label>
            <select className='jobs_select' id='service-type' >
            <option disabled  value="service" selected>Search to select category...</option>
              <option value="UI/UX Designs">UI/UX Designs</option>
              <option value="Blockchain Developer">Blockchain Developer</option>
              <option value="Web Design">Web Design</option>
              <option value="Video Editing">Video Editing</option>
              <option value="Translation And Transcription">Translation And Transcription</option>
              <option value="Others">Others</option>
            </select>
        </div>
        <div>
            <label htmlFor=''>Enter a title for your post</label>
            <input  className='jobs_input' placeholder='The  Landing Page for  Elementary School'/>
            <span>Max. 100 characters</span>
        </div>
         <div>
            <label htmlFor=''>Please describe your project as detailed as you can</label>
            <input className='jobs_input'/>
            <span>Max. 100 characters</span>
        </div>
        <div>
            <label htmlFor=''>Required contents</label>
            <span className='special_span'>The Frelancer must have e.g  content in HTML, Figma, JavaScript etc</span>
            <input  className='jobs_input'/>
        </div>
        <div>
            <label htmlFor=''>Number to Hire</label>
            <span className='special_span'>Number of  Frelancer to be hired for this Job</span>
            <input  className='jobs_input' placeholder='1'/>
        </div>
        <Button onClick={HandleNextClick}>Next</Button>

    </div>
        )}

        {SecondSection && (
       <div className='jobs_wrapper'>
        <div>
           <label htmlFor=''>Budget</label>
           <span className='special_span'>Leave blank if not sure</span>
           <input  className='jobs_input' placeholder='The  Landing Page for  Elementary School'/>
          
       </div>
       <div>
           <label htmlFor='work-category'>Select Country</label>
           <select  className='jobs_select' id='select_country' >
           <option disabled value="category" selected>Select Country</option>
             <option value="Pending">Pending</option>
             <option value="Pending">Pending</option>
           </select>
       </div>
       
       
        <div>
           <label htmlFor=''>Propose start date</label>
           <input className='jobs_input'/>
           <span>Max. 100 characters</span>
       </div>
       <div>
           <label htmlFor=''>Duration</label>
           <input  className='jobs_input'/>
       </div>
       <div className='jobs_buttons'>
       <Button onClick=" ">Post Job</Button>
       <Button onClick={HandleBackClick}>Back</Button>
       </div>

   </div>
          )}

    </>
    
  )
}

export default Jobs