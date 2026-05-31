import Nav from './components/Nav'
import Footer from './components/Footer'
import ListaProyectos from './views/ListaProyecto'
import "./static/css/styles.css"
import Header from './components/Header'
import { useState } from 'react';
import { Routes, Route, Navigate } from "react-router-dom";
import Dashboard from './views/Dashboard.jsx'
import DetalleProyecto from './views/DetalleProyecto'
import PerfilUsuario from './views/PerfilUsuario'
const App = () => {
  const [mostrarFooter, setMostrarFooter] = useState(true);
  return (
    <>
      <Header element={{ titulo: "Gestión de Proyectos Educativos" }} />
      <Nav />
      <Routes> 
        <Route path="/" element={<Dashboard />} />
        <Route path="/proyectos" element={<ListaProyectos setMostrarFooter={setMostrarFooter}/>} />
        <Route path="/proyectos/:id" element={<DetalleProyecto />} />
        <Route path="/perfil" element={<PerfilUsuario />} />
      </Routes>
       { mostrarFooter && <Footer element={{ texto: "Plataforma de Gestión de Proyectos Educativos 2026" }} /> }
    </>
  )

}
export default App
