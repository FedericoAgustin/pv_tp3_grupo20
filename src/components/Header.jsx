import React from 'react'
import Logo from './Logo.jsx';

const Header = (props) => {
    let { titulo } = props.element;
    return (
        <header style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "10px" }}>
            <Logo />
            <h1>{titulo}</h1>
        </header>
    )
}

export default Header
