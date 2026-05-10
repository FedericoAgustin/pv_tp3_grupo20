import proyectoService from "../services/proyectoService"
import React, { useState } from 'react'

const ListaProyecto = () => {
    const [proyectos,setProyectos]=useState(proyectoService.obtenerProyectos())
    const [titulo, setTitulo]=useState("")// se crea una variable de estado para capturar el input y su estado inicial es blanco
    const [nombreProyecto, setnombreProyecto]=useState("")
    const [categoriaProyecto, setcategoriaProyecto]=useState("")
    const [estadoProyecto, setestadoProyecto]=useState("")

    const handleEliminar=(id)=>{
        proyectoService.eliminarProyecto(id);
        setProyectos(proyectoService.obtenerProyectos());
    }
    const handleBuscar=(titulo)=>{
        let resultado=proyectoService.buscarProyectos(titulo);
        setProyectos(resultado);
    }
    const handleAgregar=()=>{

        const nuevoProyecto={
            titulo:nombreProyecto,
            categoria: categoriaProyecto,
            estado: estadoProyecto

        }
        proyectoService.agregarProyecto(nuevoProyecto);
        setProyectos(proyectoService.obtenerProyectos());
    }
    return (

        <div>
            <h2>Lista de Proyectos Educativos</h2>
        
            <div>
                    <input type="text" className="nombre" value={nombreProyecto} onChange={(e)=>setnombreProyecto(e.target.value)} placeholder="Nombre del proyecto"/>
                <input type="text" className="nombre" value={categoriaProyecto} onChange={(e)=>setcategoriaProyecto(e.target.value)} placeholder="Categoria del proyecto"/>

                <select name="estado" id="estadoID" value={estadoProyecto} onChange={(e)=>setestadoProyecto(e.target.value)}>
                <option value="">Selecciona un estado</option>
                <option value="En curso">En curso</option>
                <option value="Finalizado">Finalizado</option>
                </select>

                <button className="agregar" onClick={()=>handleAgregar()}>Agregar proyecto</button> 
            </div>

            <div>              
                <input type="text" className="titulo" value={titulo} onChange={(e)=>setTitulo(e.target.value)} placeholder="Ingresa el nombre"/>
                <button className="Filtrar" onClick={()=>handleBuscar(titulo)}> Filtrar</button> 
            </div>
            {
            proyectos.map(p=>(
                <article key={p.id}>

                    <h3>{p.titulo}</h3>
                    <p>{p.categoria}</p>
                    <p>{p.estado}</p>

                    <button className="Eliminar" onClick={()=>handleEliminar(p.id)}>Eliminar</button>
                </article>
            )

            )
            }
        </div>
    );
}

export default ListaProyecto