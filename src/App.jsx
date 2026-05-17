import Nav from './components/Nav'
import Footer from './components/Footer'
import ListaProyectos from './components/ListaProyecto'
import "./css/styles.css"
import Header from './components/Header'
import { useState } from 'react';
const App = () => {
  const [mostrarFooter, setMostrarFooter] = useState(true);
  return (
    <>
      <Header element={{ titulo: "Gestión de Proyectos Educativos" }} />
      <Nav />
      <ListaProyectos setMostrarFooter={setMostrarFooter}/>
      { mostrarFooter && <Footer element={{ texto: "Plataforma de Gestión de Proyectos Educativos 2026" }} /> }
    </>
  )

}
export default App
