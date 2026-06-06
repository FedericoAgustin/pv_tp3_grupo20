import React from 'react'
import Logo from './Logo.jsx';

const Header = (props) => {
    let { titulo } = props.element;
    return (
        <header classname="d-flex align-items-center justify-content-center gap-2 py-3">
            <Logo />
            <h1 classname="mb-0">{titulo}</h1>
        </header>
    )
}

export default Header
 