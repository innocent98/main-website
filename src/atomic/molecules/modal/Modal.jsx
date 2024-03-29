import React from 'react'
import "./modal.scss"

const Modal = ({children}) => {
    return (
        <section className='modal--overlay'>
            <div className='modal--overlay__content'>{children}</div>
        </section>
    )
}

export default Modal
