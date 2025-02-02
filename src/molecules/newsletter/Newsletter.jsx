import React from 'react'
import InputField from '../../atoms/input/InputField';
import Button from '../../atoms/button/Button';
import "./newsletterform.scss"


const NewsletterForm = () => (
    <form action='' className='newsletter-form'>
      <p>Stay ahead of the curve with our newsletter, packed with exclusive content, expert insights, and curated resources delivered straight to your inbox</p>
      <InputField type="email" placeholder="Your Email" label="Email Address" />
      <Button classname="contact-btn"  text="Subscribe" buttonText="Subscribe"/>
      <div className='alternative'>
        <p>Alternatively Contact Us at:</p>
        <p>support@zealworkers.com</p>
      </div>
    </form>
  );

export default NewsletterForm