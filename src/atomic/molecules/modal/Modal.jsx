import React from 'react'
import "./modal.scss"
import clsx from 'clsx'

const Modal = ({ children, className }) => {
    return (
        <section className='modal--overlay'>
            <div className={clsx(className, 'modal--overlay__content')}>{children}</div>
        </section>
    )
}

export default Modal
