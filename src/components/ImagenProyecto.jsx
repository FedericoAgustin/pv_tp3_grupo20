import React from 'react'

export const ImagenProyecto = ({ imagen, titulo }) => {
  return (
    <img className="imagen-proyecto"
      src={imagen}
      alt={titulo}
      className="imagen-proyecto"
    />
  )
}