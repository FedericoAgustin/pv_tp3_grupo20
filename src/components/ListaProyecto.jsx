import proyectoService from "../services/proyectoService";
import React, { useState } from "react";
import ProyectoCard from "./ProyectoCard.jsx";
import DetalleProyecto from "./DetalleProyecto.jsx";
import { CambiarBusqueda } from "./CambiarBusqueda";

const ListaProyecto = ({ setMostrarFooter }) => {
  const [proyectos, setProyectos] = useState(proyectoService.obtenerProyectos(),);
  const [titulo, setTitulo] = useState("");
  const[proyectoseleccionado,setproyectoseleccionado] = useState(null);
  const [form, setForm] = useState({
    nombreProyecto: "",
    categoriaProyecto: "",
    estadoProyecto: "",
    descripcionProyecto: ""
  });
  const[cambiarBusqueda, setCambiarBusqueda] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setForm((prevForm) => ({
      ...prevForm,
      [name]: value,
    }));
  }

  const handleEliminar = (id) => {
    proyectoService.eliminarProyecto(id);
    setProyectos(proyectoService.obtenerProyectos());
  };

  const handleBuscar = (titulo) => {
    let resultado = proyectoService.buscarProyectos(titulo);
    setProyectos(resultado);
  };

  const handleBuscar2 = (e) => {
    let valor = e.target.value;
    setTitulo(valor);
    setProyectos(proyectoService.buscarProyectos(valor));
  };

  const handleAgregar = (e) => {
    e.preventDefault();
    const nuevoProyecto = {
      titulo: form.nombreProyecto,
      categoria: form.categoriaProyecto,
      estado: form.estadoProyecto,
      descripcion: form.descripcionProyecto,
    };
    if (nuevoProyecto.titulo.trim() === "") return

    proyectoService.agregarProyecto(nuevoProyecto);
    setProyectos(proyectoService.obtenerProyectos());
    // Limpiamos campos
    setForm({
      nombreProyecto: "",
      categoriaProyecto: "",
      estadoProyecto: "",
      descripcionProyecto: "",
    });
  };

  const handleVerDetalle = (id) => {
    const proyecto = proyectos.find((p) => p.id === id);
    setproyectoseleccionado(proyecto);
    setMostrarFooter(false);
  };
 
  if (proyectoseleccionado) {
    return <DetalleProyecto proyecto={proyectoseleccionado} cambio={setproyectoseleccionado} setMostrarFooter={setMostrarFooter}/>
  }
  return (
    /* Contenedor principal que usa el layout global del CSS */
    <main className="index-page">
      <div className="dashboard">
        {/*LISTADO */}
        <section className="card">
          <h2>Lista de Proyectos Educativos</h2>
          {/* Filtro*/}

          <button onClick={()=>{setCambiarBusqueda(cambiarBusqueda == false)}}>Cambiar Busqueda</button>
          <CambiarBusqueda hanamichi={cambiarBusqueda} sendo = {handleBuscar} rukawa={handleBuscar2} setAkagi={setTitulo} akagi={titulo}/>

          <div className="section-proyectos">
            {proyectos.map((p) => (
              <ProyectoCard key={p.id} proyecto={p} verDetalle = {handleVerDetalle} handleEliminar = {handleEliminar}/>
            ))}
          </div>

        </section>
        {/*FORMULARIO (Usando los estilos de aside-proyectos) */}
        <aside className="aside-proyectos">
          <h3>Nuevo Proyecto</h3>
          <form onSubmit={handleAgregar}>
            <div className="form">
              <input type="text" id="nombreProyecto" name="nombreProyecto" value={form.nombreProyecto} onChange={(e) => handleInputChange(e)} placeholder="Nombre del proyecto" />
              <input type="text" id="categoriaProyecto" name="categoriaProyecto" value={form.categoriaProyecto} onChange={(e) => handleInputChange(e)} placeholder="Categoría" />
              <select id="estadoProyecto" name="estadoProyecto" value={form.estadoProyecto} onChange={(e) => handleInputChange(e)}>
                <option value="">Selecciona un estado</option>
                <option value="En curso">En curso</option>
                <option value="Finalizado">Finalizado</option>
                <option value="Pendiente">Pendiente</option>
              </select>
              <textarea
                id="descripcionProyecto"
                name="descripcionProyecto"
                value={form.descripcionProyecto}
                onChange={handleInputChange}
                placeholder="Descripción del proyecto"
                rows={4}
              />
              <button className="link" style={{ padding: "10px", borderRadius: "5px", marginTop: "10px", }} type="submit">Agregar Proyecto</button>
            </div>
          </form>
        </aside>
      </div>
    </main>
  );
};

export default ListaProyecto;