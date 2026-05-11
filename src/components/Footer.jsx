import React from 'react'

const Footer = (props) => {
    let { texto } = props.element
    return (
        <footer>
            <p>{texto}</p>
        </footer>

    )
}

export default Footer