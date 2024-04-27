import React from 'react'
import Button from '../../atoms/button/Button';
import InputField from '../../atoms/input/InputField';
import Textarea from '../../atoms/textarea/Textarea';
import "./contactform.scss"

const ContactForm = () => (
    <form action='' className='contact-form'>

      <InputField type="text" placeholder="Your Name" label="Full name"/>
      <InputField type="email" placeholder="Your Email" label="Email"/>
      <Textarea placeholder="Your Message" label="Message" type="text" />
      <Button classname="contact-btn" text="Submit" buttonText="Send Message"/>
    </form>
  );

export default ContactForm