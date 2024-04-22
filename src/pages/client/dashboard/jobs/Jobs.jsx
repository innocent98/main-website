import React from 'react'
import Button from '../../../../atomic/atoms/button/Button'

const Jobs = () => {
  return (
    <div className='jobs_wrapper'>
        <div>
            <label htmlFor='work-category'>Select Work Category</label>
            <select  className='jobs_select' id='work-category' >
            <option value="category" selected>Search to select category...</option>
              <option value="cat1">content1</option>
              <option value="cat2">content2</option>
              <option value="cat3">content3</option>
              <option value="cat4">content4</option>
            </select>
        </div>
        <div>
            <label htmlFor='service-type'>Select Work Category</label>
            <select className='jobs_select' id='service-type' >
            <option value="service" selected>Search to select category...</option>
              <option value="service1">content1</option>
              <option value="service2">content2</option>
              <option value="service3">content3</option>
              <option value="service4">content4</option>
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
        <Button>Next</Button>
    </div>
  )
}

export default Jobs