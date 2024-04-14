import React from 'react'
import InputField from '../../../atoms/input/InputField'
import Button from '../../../atoms/button/Button'
import "./frame1.scss"
import { FiSearch } from 'react-icons/fi'

const Frame1 = () => {
  return (
    <div className='frame-1' >

        <h1>Welcome Solomon</h1>
        
    <div className='search-container'>
        <FiSearch/>

      <input 
            className='search-input'
            placeholder='Search for jobs, talents ...'
      />

        <Button 
            buttonText="search"
            classname="search-button"
        />

    </div>


    </div>
  )
}

export default Frame1