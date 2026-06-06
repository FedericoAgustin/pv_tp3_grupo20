import React from 'react'

const Footer = (props) => {
    let { texto } = props.element
    return (
        <footer className='text-white text-center py-3 mt-5'>
            <p>{texto}</p>
        </footer>
    )
}

export default Footer