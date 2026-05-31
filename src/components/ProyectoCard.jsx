import React from 'react'
import { ImagenProyecto } from './ImagenProyecto';
import {Card, Button} from "react-bootstrap";

const ProyectoCard = ({ proyecto, handleEliminar, verDetalle }) => {

  const { id, titulo, categoria, estado, imagen } = proyecto;
      {/*revisar estilos de los botones , estilos que incluya el <article> porque se se reemplazo con el card  y espacios con la imagen. Tambien, queda mal Card.Img */}
  return (
          /* <article>*/
      <Card>
        <Card.Body>
          <Card.Title>{titulo}</Card.Title>
          <Card.Img variant='top' src={imagen} alt={titulo}/>
          {/*<ImagenProyecto imagen={imagen} titulo={titulo} />*/}
          <Card.Subtitle className="categoria-p">
          <strong>Categoría:</strong> {categoria}
          </Card.Subtitle>
          <Card.Subtitle style={{ textAlign: "left" }}>
           <strong>Estado:</strong> {estado}
          </Card.Subtitle>
        </Card.Body>
        <Button variant="danger" style={{ marginTop: "15px", cursor: "pointer" }} onClick={() => handleEliminar(id)}> Eliminar Proyecto </Button>
        <Button variant="info" style={{ marginTop: "15px", cursor: "pointer" }} onClick={() => verDetalle(id)}> Ver Detalle </Button>


      </Card>
          /* <article>*/
  )
}
export default ProyectoCard;