import React from 'react'

export const Card = ({ proyecto, handleEliminar, verDetalle }) => {

  const {id,titulo,categoria,estado} = proyecto;

  return (
 
              <article key={id}>
                <h2>{titulo}</h2>
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
