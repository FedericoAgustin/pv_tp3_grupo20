import React from 'react'
import { ImagenProyecto } from './ImagenProyecto';

const ProyectoCard = ({ proyecto, handleEliminar, verDetalle }) => {

  const { id, titulo, categoria, estado, imagen } = proyecto;

  return (
    <article >
      <h2>{titulo}</h2>
      <ImagenProyecto imagen={imagen} titulo={titulo} />
      <p className="categoria-p">
        <strong>Categoría:</strong> {categoria}
      </p>
      <p style={{ textAlign: "left" }}>
        <strong>Estado:</strong> {estado}
      </p>
      <div>
        <button className="Eliminar" style={{ marginTop: "15px", cursor: "pointer" }} onClick={() => handleEliminar(id)}> Eliminar Proyecto </button>
        <button className="Detalles" style={{ marginTop: "15px", cursor: "pointer" }} onClick={() => verDetalle(id)}> Ver Detalle </button>
      </div>
    </article>
  )
}
export default ProyectoCard;