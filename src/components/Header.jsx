import  { useContext } from 'react';
import Logo from './Logo.jsx';
import { useAutorizaciones } from '../hook/useAutorizaciones.js';

const Header = (props) => {
    // const { usuario }= useContext(UsuarioContext);
    const {usuarioActivo} = useAutorizaciones();
    let { titulo } = props.element;
    return (
        <header className="d-flex align-items-center justify-content-center gap-2 py-3">
            <Logo />
            <h1 className="mb-0">{titulo}</h1>
            <span className='badge' style={{background: "#E3C094", color: "black"}} >{usuarioActivo ? usuarioActivo.nombre : "Invitado"} {usuarioActivo ? usuarioActivo.rol : "limitado"}</span>

        </header>
    )
}

export default Header;