import  { useState } from 'react';
import "./accordion.scss"
import accordionData from "./FaqData"
import { LuPlus } from "react-icons/lu";
import { HiMiniMinus } from "react-icons/hi2";

const Accordion = () => {
  const [openIndex, setOpenIndex] = useState(null);
  
  const toggleAccordion = (index) => {
    setOpenIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  return (
    <div>
      {accordionData.map((item, index) => (
        <div key={index} className="accordion-item">
          <div
            className={`accordion-title ${openIndex === index ? 'open' : ''}`}
            onClick={() => toggleAccordion(index)}
          >
            <span>{item.title}</span>
            <span className="accordion-icon">
              {openIndex === index ? < HiMiniMinus/>  : <LuPlus/>}
            </span>
          </div>
          {openIndex === index && (
            <div className="accordion-content">{item.content}</div>
          )}
        </div>
      ))}
    </div>
  );
}

export default Accordion;
