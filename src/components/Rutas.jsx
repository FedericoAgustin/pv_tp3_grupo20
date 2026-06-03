import React from "react";
import { Routes, Route } from "react-router-dom";
import Dashboard from '../views/Dashboard.jsx'
import DetalleProyecto from '../views/DetalleProyecto.jsx'
import PerfilUsuario from '../views/PerfilUsuario.jsx'
import ListaProyecto from '../views/ListaProyecto.jsx'
import Layout from "./Layout";
import { BrowserRouter } from "react-router-dom";
const Rutas = () => {
  return (
    <div>
        <BrowserRouter>
            <Routes>
                <Route element={<Layout mostrarFooter={true} />}>
                    <Route path="/" element={<Dashboard />} />
                    <Route path="/proyectos" element={<ListaProyecto />} />
                    <Route path="/perfil" element={<PerfilUsuario />} />
                </Route>
                <Route element={<Layout mostrarFooter={false} />}>
                    <Route path="/proyectos/:id" element={<DetalleProyecto />} />
                </Route>

            </Routes>
        </BrowserRouter>
    </div>
  );
};
export default Rutas;
