import proyectoService from "../services/proyectoService";
import { useEffect, useState, useRef } from "react";
import ProyectoCard from "./ProyectoCard.jsx";
import DetalleProyecto from "./DetalleProyecto.jsx";
import { CambiarBusqueda } from "./CambiarBusqueda";
import FormularioProyecto from "./FormularioProyecto.jsx";

const ListaProyecto = ({ setMostrarFooter }) => {
  const [proyectos, setProyectos] = useState(
    proyectoService.obtenerProyectos(),
  );
  const [titulo, setTitulo] = useState("");
  const [proyectoseleccionado, setproyectoseleccionado] = useState(null);
  const [cambiarBusqueda, setCambiarBusqueda] = useState(false);
  const [fecha, setFecha] = useState("");
  const omitirPrimero = useRef(0)
  const busquedaRef = useRef(false);

  const formatoFecha=(fechaActual)=>{
    const dia = String(fechaActual.getDate()).padStart(2, "0");
    const mes = String(fechaActual.getMonth() + 1).padStart(2, "0");
    const anio = fechaActual.getFullYear();
    const horas = String(fechaActual.getHours()).padStart(2, "0");
    const minutos = String(fechaActual.getMinutes()).padStart(2, "0");
    const resultado = `${dia}/${mes}/${anio} a las ${horas}:${minutos} hs.`;
    return resultado;
  }

  useEffect(() => {
    if (omitirPrimero.current < 2) {
      omitirPrimero.current += 1;
    } else {
      if (busquedaRef.current == false) {
        const fechaFormateada = formatoFecha(new Date());
        setFecha(fechaFormateada);
      } else {
        busquedaRef.current = false;
      }
    }
  }, [proyectos]);

  const handleEliminar = (id) => {
    proyectoService.eliminarProyecto(id);
    setProyectos(proyectoService.obtenerProyectos());
  };

  const handleBuscar = (titulo) => {
    let resultado = proyectoService.buscarProyectos(titulo);
    setProyectos(resultado);
    busquedaRef.current = true;
  };

  const handleBuscar2 = (e) => {
    let valor = e.target.value;
    setTitulo(valor);
    setProyectos(proyectoService.buscarProyectos(valor));
    busquedaRef.current = true;
  };

  const handleAgregar = (form) => {
    const nuevoProyecto = {
      titulo: form.nombreProyecto,
      categoria: form.categoriaProyecto,
      estado: form.estadoProyecto,
      descripcion: form.descripcionProyecto,
      equipo: form.equipoProyecto,
      rol: form.rolProyecto,
    };
    if (nuevoProyecto.titulo.trim() === "") return;

    proyectoService.agregarProyecto(nuevoProyecto);
    setProyectos(proyectoService.obtenerProyectos());
  };

  const handleVerDetalle = (id) => {
    const proyecto = proyectos.find((p) => p.id === id);
    setproyectoseleccionado(proyecto);
    setMostrarFooter(false);
  };

  if (proyectoseleccionado) {
    return (
      <DetalleProyecto
        proyecto={proyectoseleccionado}
        cambio={setproyectoseleccionado}
        setMostrarFooter={setMostrarFooter}
      />
    );
  }
  return (
    /* Contenedor principal que usa el layout global del CSS */
    <main className="index-page">
      <div className="dashboard">
        {/*LISTADO */}
        <section className="card">
          <h2>Lista de Proyectos Educativos</h2>
          {/* Filtro*/}

          <button
            onClick={() => {
              setCambiarBusqueda(cambiarBusqueda == false);
            }}
          >
            Cambiar Busqueda
          </button>
          <CambiarBusqueda
            cambiarBusqueda={cambiarBusqueda}
            handleBuscar={handleBuscar}
            handleBuscar2={handleBuscar2}
            setTitulo={setTitulo}
            titulo={titulo}
          />
          <div className="section-proyectos">
            {proyectos.map((p) => (
              <ProyectoCard
                key={p.id}
                proyecto={p}
                verDetalle={handleVerDetalle}
                handleEliminar={handleEliminar}
              />
            ))}
          </div>
           {fecha}
        </section>
        {/*FORMULARIO (Usando los estilos de aside-proyectos) */}
        <aside className="aside-proyectos">
          <FormularioProyecto handleAgregar={handleAgregar} />
        </aside>
      </div>
    </main>
  );
};

export default ListaProyecto;
