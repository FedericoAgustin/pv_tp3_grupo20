import Nav from './components/Nav'
import Footer from './components/Footer'
import ListaProyectos from './components/ListaProyecto'
import "./css/styles.css"
import Header from './components/Header'
const App=()=>{
  return(
    <>
    <Header element={{titulo:"Bienvenido a la Gestión de Proyectos"}}/>
    <Nav/>
    <ListaProyectos/>
    <Footer element={{texto:"Plataforma de Gestion de Proyectos Educativos 2026"}}/>
    </>
  )

}
export default App
