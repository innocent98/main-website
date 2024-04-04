import React from 'react';
import clsx from 'clsx';
import "./container.scss"

const Container = ({ variant, children, className }) => {
    let style = ""
    switch (variant) {
        case "wrapper":
            style = clsx(style, "container--wrapper")
            break;
        case "wrapper--flex":
            style = clsx(style, "container--flex")
            break;
        case "wrapper--flex--center":
            style = clsx(style, "container--flexcenter")
            break;
        case "wrapper--flex--between":
            style = clsx(style, "container--flexbetween")
            break;
        case "wrapper--flex--fit":
            style = clsx(style, "container--flexfit")
            break;
        case "wrapper--gridColsTwo":
            style = clsx(style, "container--gridColsTwo")
            break;
        case "wrapper--padded":
            style = clsx(style, "container--padded")
            break;
        default:
            break;
    }
    return (
        <main className={clsx(style, className)}>
            {children}
        </main>
    )
}

export default Container







