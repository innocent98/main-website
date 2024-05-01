import React from 'react'
import "./contact.scss"
import NewsLetterSection from '../../../organisms/newsletter/NewsLetterSection'
import ContactUsSection from '../../../organisms/contact/ContactUsSection'

const Contact = () => {
  return (
    <section className='contact--wrapper'>
      <div className='contact'>
        <ContactUsSection />
        <NewsLetterSection />
      </div>
    </section>
  )
}

export default Contact