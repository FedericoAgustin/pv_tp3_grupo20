import React from "react";
import { Routes, Route } from "react-router-dom";
import Dashboard from '../views/Dashboard.jsx'
import DetalleProyecto from '../views/DetalleProyecto.jsx'
import PerfilUsuario from '../views/PerfilUsuario.jsx'
import ListaProyecto from '../views/ListaProyecto.jsx'
import Layout from "./Layout";
import { BrowserRouter } from "react-router-dom";
import RutaProtegida from "./RutaProtegida.jsx";
const Rutas = () => {
  return (
    <div>
        <BrowserRouter>
            <Routes>
                <Route element={<Layout mostrarFooter={true} />}>
                    <Route path="/" element={<Dashboard />} />
                    <Route path="/proyectos" element={<RutaProtegida><ListaProyecto /></RutaProtegida>} />
                    <Route path="/perfil" element={<RutaProtegida><PerfilUsuario /></RutaProtegida>} />
                </Route>
                <Route element={<Layout mostrarFooter={false} />}>
                    <Route path="/proyectos/:id" element={<RutaProtegida><DetalleProyecto /></RutaProtegida>} />
                </Route>

            </Routes>
        </BrowserRouter>
    </div>
  );
};
export default Rutas;
