import React from 'react'
import "./blogframe.scss"
import Button from '../../../atoms/button/Button'

const BlogFrame = () => {
  return (
    <div className='blog-frame'>
        <div className='blogframe-texts'>
            <h1>Try Zealworkers for FREE</h1>
            <p>Everything you need to start your <br/> freelancing career</p>
            <Button buttonText="Get Started"
            classname="blog-btn"/>
        </div>
    </div>
  )
}

export default BlogFrame