import React from 'react'
import "./faq.scss"
import Accordion from '../../organisms/accordion/accordion'


const FAQ = () => {
  return (
    <section className='faq-frame'>
      <h1>Frequently asked Questions</h1>
      <Accordion/>
    </section>
  )
}

export default FAQ