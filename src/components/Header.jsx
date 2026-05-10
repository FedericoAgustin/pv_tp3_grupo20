import React from 'react'

const Header = (props) => {
    
    let { titulo } = props.element;
    
    return (

        <header>
            <h1>{titulo}</h1>
        </header>
    )
}

export default Header