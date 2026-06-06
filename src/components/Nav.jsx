import React from 'react'
import {Link} from "react-router-dom";
import {Navbar} from "react-bootstrap"

const Nav = () => {
  return (
<Navbar expand="lg">
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav">
    <ul className="navbar-nav mx-auto justify-content-center">
      <li className="nav-item">
        <Link className="nav-link" to="/">Inicio</Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link" to="/proyectos">Proyectos</Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link" to="/perfil">Perfil</Link>
      </li>
    </ul>
  </Navbar.Collapse>
</Navbar>
  );
};
export default Nav