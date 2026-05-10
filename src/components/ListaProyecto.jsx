import proyectoService from "../services/proyectoService";
import React, { useState } from "react";

const ListaProyecto = () => {
  const [proyectos, setProyectos] = useState(
    proyectoService.obtenerProyectos(),
  );
  const [titulo, setTitulo] = useState("");
  const [nombreProyecto, setnombreProyecto] = useState("");
  const [categoriaProyecto, setcategoriaProyecto] = useState("");
  const [estadoProyecto, setestadoProyecto] = useState("");

  const handleEliminar = (id) => {
    proyectoService.eliminarProyecto(id);
    setProyectos(proyectoService.obtenerProyectos());
  };

  const handleBuscar = (titulo) => {
    let resultado = proyectoService.buscarProyectos(titulo);
    setProyectos(resultado);
  };

  const handleAgregar = () => {
    const nuevoProyecto = {
      titulo: nombreProyecto,
      categoria: categoriaProyecto,
      estado: estadoProyecto,
    };
    proyectoService.agregarProyecto(nuevoProyecto);
    setProyectos(proyectoService.obtenerProyectos());
    // Limpiamos campos
    setnombreProyecto("");
    setcategoriaProyecto("");
    setestadoProyecto("");
  };

  return (
    /* Contenedor principal que usa el layout global del CSS */
    <main className="index-page">
      <div className="dashboard">
        {/*LISTADO */}
        <section className="card">
          <h2>Lista de Proyectos Educativos</h2>

          {/* Filtro*/}
          <div style={{ marginBottom: "20px", display: "flex", gap: "10px" }}>
            <input type="text" className="titulo" value={titulo} onChange={(e) => setTitulo(e.target.value)} placeholder="Buscar por nombre..."/>
            <button className="link" onClick={() => handleBuscar(titulo)}>Filtrar</button>
          </div>

          <div className="section-proyectos">
            {proyectos.map((p) => (
              <article key={p.id}>
                <h2>{p.titulo}</h2>
                <p className="categoria-p">
                  <strong>Categoría:</strong> {p.categoria}
                </p>
                <p style={{ textAlign: "left" }}>
                  <strong>Estado:</strong> {p.estado}
                </p>
                <button className="Eliminar" style={{ marginTop: "15px", cursor: "pointer" }} onClick={() => handleEliminar(p.id)}> Eliminar Proyecto </button>
              </article>
            ))}
          </div>
        </section>

        {/*FORMULARIO (Usando los estilos de aside-proyectos) */}
        <aside className="aside-proyectos">
          <div>
            <h3>Nuevo Proyecto</h3>
            <div className="form">
              <input type="text" value={nombreProyecto} onChange={(e) => setnombreProyecto(e.target.value)} placeholder="Nombre del proyecto" />
              <input type="text" value={categoriaProyecto} onChange={(e) => setcategoriaProyecto(e.target.value)} placeholder="Categoría"/>
              <select value={estadoProyecto} onChange={(e) => setestadoProyecto(e.target.value)}>
                <option value="">Selecciona un estado</option>
                <option value="En curso">En curso</option>
                <option value="Finalizado">Finalizado</option>
              </select>
              <button className="link" style={{padding: "10px",borderRadius: "5px",marginTop: "10px",}}onClick={() => handleAgregar()}>Agregar Proyecto</button>
            </div>
          </div>
        </aside>
      </div>
    </main>
  );
};

export default ListaProyecto;
