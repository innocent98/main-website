import React from 'react'
import Button from '../../atoms/button/Button';
import InputField from '../../atoms/input/InputField';
import Textarea from '../../atoms/textarea/Textarea';
import "./contactform.scss"

const ContactForm = () => (
    <div className='contact-form'>
      <InputField type="text" placeholder="Your Name" label="Full name"/>
      <InputField type="email" placeholder="Your Email" label="Full name"/>
      <Textarea placeholder="Your Message" label="Message" type="text" />
      <Button text="Submit" buttonText="Send Message"/>
    </div>
  );

export default ContactForm