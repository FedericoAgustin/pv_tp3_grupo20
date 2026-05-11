import proyectoService from "../services/proyectoService";
import React, { useState } from "react";

const ListaProyecto = () => {
  const [proyectos, setProyectos] = useState(proyectoService.obtenerProyectos(),);
  const [titulo, setTitulo] = useState("");
  const [form, setForm] = useState({
    nombreProyecto: "",
    categoriaProyecto: "",
    estadoProyecto: ""
  });

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

  const handleAgregar = (e) => {
    e.preventDefault();
    const nuevoProyecto = {
      titulo: form.nombreProyecto,
      categoria: form.categoriaProyecto,
      estado: form.estadoProyecto,
    };
    if (nuevoProyecto.titulo.trim() === "") return

    proyectoService.agregarProyecto(nuevoProyecto);
    setProyectos(proyectoService.obtenerProyectos());
    // Limpiamos campos
    setForm({
      nombreProyecto: "",
      categoriaProyecto: "",
      estadoProyecto: ""
    });
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
            <input type="text" className="titulo" value={titulo} onChange={(e) => setTitulo(e.target.value)} placeholder="Buscar por nombre..." />
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
              <button className="link" style={{ padding: "10px", borderRadius: "5px", marginTop: "10px", }} type="submit">Agregar Proyecto</button>
            </div>
          </form>
        </aside>
      </div>
    </main>
  );
};

export default ListaProyecto;
