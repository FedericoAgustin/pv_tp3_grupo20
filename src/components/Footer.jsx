import React from 'react'

const Footer = ({texto, ...rest}) => {
    return (
        <footer>
            <p>{texto}</p>
        </footer>

    )
}

export default Footer