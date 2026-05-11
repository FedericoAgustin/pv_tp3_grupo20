import Nav from './components/Nav'
import Footer from './components/Footer'
import ListaProyectos from './components/ListaProyecto'
import "./css/styles.css"
import Header from './components/Header'
const App = () => {
  return (
    <>
      <Header element={{ titulo: "Gestión de Proyectos Educativos" }} />
      <Nav />
      <ListaProyectos />
      <Footer element={{ texto: "Plataforma de Gestión de Proyectos Educativos 2026" }} />
    </>
  )

}
export default App
