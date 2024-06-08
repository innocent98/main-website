import './input.scss'
import clsx from 'clsx'
import React from 'react'

const Input = ({ type, variant, value, placeholder, required, className, onChange = (e) => null }) => {
    let style;
    switch (variant) {
        case "default":
            style = clsx(style, "input--default")
            break;
        default:
            break;
    }
    return (
        <input
            required={required}
            type={type}
            value={value}
            placeholder={placeholder}
            className={clsx(style, className)}
            onChange={(e) => onChange(e)}
        />
    )
}

export default Input
