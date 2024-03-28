import './button.scss'
import clsx from 'clsx'
import React from 'react'

const Button = ({
    onClick = (e) => { },
    children,
    variant,
    className,
    isDisabled,
    isLoading,
    isError,
    ...restProps
}) => {
    let style;

    if (isDisabled) {
        style = clsx(style, "button__disabled");
    } else if (isLoading) {
        style = clsx(style, "button__loading");
    } else if (isError) {
        style = clsx(style, "button__error");
    } else {
        style = clsx(style, "button");
    }
    switch (variant) {
        case "default":
            style = clsx(style, "button--default")
            break;
        case "outlined":
            style = clsx(style, "button--outlined")
            break;
        case "transparent":
            style = clsx(style, "button--transparent")
            break;

        default:
            break;
    }
    return (
        <button onClick={(e) => onClick(e)}
            disabled={isDisabled || isLoading}
            className={clsx(style, className)}
            {...restProps}>
            {children}
        </button>
    )
}

export default Button