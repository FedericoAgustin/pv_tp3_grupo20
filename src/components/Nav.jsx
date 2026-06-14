import React from 'react'
import {Link} from "react-router-dom"
import {Navbar} from "react-bootstrap"
import { useAutorizaciones } from '../hook/useAutorizaciones';
import { useNavigate } from 'react-router-dom';

const Nav = () => {
  const {usuarioActivo, cerrarSesion} = useAutorizaciones();
  const navigate = useNavigate();

  const handleCerrarSesion = () => {
    cerrarSesion();
    navigate('/');
  };

  return (
<Navbar expand="lg">
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav">
    <ul className="navbar-nav mx-auto justify-content-center">
      <li className="nav-item">
        <Link className="nav-link text-white" to="/"><strong>Inicio</strong></Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link text-white" to="/proyectos"><strong>Proyectos</strong></Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link text-white" to="/perfil"><strong>Perfil</strong></Link>
      </li>

    { usuarioActivo && (
      < li className="nav-item">
        <button className="btn btn-link nav-link text-white" onClick={handleCerrarSesion}><strong>Cerrar Sesión</strong></button>
      </li>
      )
    }
    </ul>
  </Navbar.Collapse>
</Navbar>
  );
};
export default Nav