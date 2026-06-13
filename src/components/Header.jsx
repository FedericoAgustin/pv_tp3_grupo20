import  { useContext } from 'react';
import Logo from './Logo.jsx';
import { UsuarioContext } from '../context/UsuarioContext.jsx';

const Header = (props) => {
    const { usuario }= useContext(UsuarioContext);
    let { titulo } = props.element;
    return (
        <header className="d-flex align-items-center justify-content-center gap-2 py-3">
            <Logo />
            <h1 className="mb-0">{titulo}</h1>
            <span className='badge' style={{background: "#E3C094", color: "black"}} >{usuario.nombre} {usuario.rol}</span>

        </header>
    )
}

export default Header;