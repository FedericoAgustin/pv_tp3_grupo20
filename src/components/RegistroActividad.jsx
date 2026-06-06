import React from 'react'
import {Alert} from 'react-bootstrap'
const RegistroActividad = ({ fecha }) => {

  return (
    <Alert variant='ligth'>
      <strong>Última actualización de la lista:</strong> {fecha}
    </Alert>
  )
}
export default RegistroActividad;

