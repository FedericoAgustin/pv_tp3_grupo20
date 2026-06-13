import React from "react";
import Nav from './Nav'
import Footer from "./Footer";
import "./../static/css/styles.css";
import Header from "./Header";
import { useState } from "react";
import { Navigate } from "react-router-dom";
import Rutas from "./Rutas";
import { Outlet } from "react-router-dom";
import {UsuarioProvider} from '../context/UsuarioContext';
const Layout = ({ mostrarFooter }) => {
  
  return (
    <UsuarioProvider>
    <div>
      <Header element={{ titulo: "Gestión de Proyectos Educativos" }} />
      <Nav />
      <Outlet />
      {mostrarFooter && ( 
        <Footer
          element={{
            texto: "Plataforma de Gestión de Proyectos Educativos 2026",
          }}
        />
      )}
    </div>
    </UsuarioProvider>
  );
};

export default Layout;