import React from 'react'
import { ImagenProyecto } from './ImagenProyecto';
import { Card, Button, Badge } from "react-bootstrap";
import { Link } from 'react-router-dom';

const ProyectoCard = ({ proyecto, handleEliminar }) => {
  const { id, titulo, categoria, estado, imagen } = proyecto;
  return (
    <Card className="shadow-sm h-100 border-0 card-proyecto">
      <Card.Img variant="top" src={imagen} alt={titulo} style={{ height: "220px", objectFit: "cover" }} />
      <Card.Body className="d-flex flex-column">
        <Card.Title className="fw-bold mb-3">
          {titulo}
        </Card.Title>
        <div className="mb-3">
          <Badge bg="primary" className="me-2">{categoria}</Badge>
          <Badge bg={estado === "Completado" ? "success" : "secondary"}>{estado}</Badge>
        </div>
        <div className="mt-auto d-flex gap-2">
          <Button as={Link} to={`/proyectos/${id}`} variant="info" className="flex-fill">
            Ver detalle
          </Button>

          <Button variant="danger" className="flex-fill" onClick={() => handleEliminar(id)}          >
            Eliminar
          </Button>
        </div>
      </Card.Body>
    </Card>
  )
}
export default ProyectoCard;