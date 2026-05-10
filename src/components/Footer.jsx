import React from 'react'

const Footer = (props) => {
    let {texto}  = props.element 
    console.log(texto);
    return (
        <footer>
            <p>{texto}</p>
        </footer>

    )
}

export default Footer