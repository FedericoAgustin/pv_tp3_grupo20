import proyectoService from "../services/proyectoService"
import React, { useState } from 'react'

const ListaProyecto = () => {
    const [proyectos,setProyectos]=useState(proyectoService.obtenerProyectos())
    return (
        <div>
            <h2>Lista de Proyectos Educativos</h2>
            {
            proyectos.map(p=>(
                <article>
                    <h3>{p.titulo}</h3>
                    <p>{p.categoria}</p>
                    <p>{p.estado}</p>
                </article>
            )

            )
            }
        </div>
    );
}

export default ListaProyecto