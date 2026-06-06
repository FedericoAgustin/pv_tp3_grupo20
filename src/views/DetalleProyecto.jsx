import { useParams } from 'react-router-dom';
import proyectoService from '../services/proyectoService.js';
import { Link } from 'react-router-dom';
import { Button, Row,Col, Card } from 'react-bootstrap';

const DetalleProyecto = () => {
  const { id } = useParams();
  const proyecto = proyectoService.obtenerProyectoPorId(Number(id));
  const { titulo, categoria, estado, equipo, rol, descripcion } = proyecto || {};

  return (
    <>
    <Button as={Link} to="/proyectos" variant="danger" className="flex-fill">regresar</Button>
    {
      proyecto ? (
        <div className="card" style={{ marginTop: "20px" }}>
          <h2>{titulo}</h2>
          <Row>
            <Col md={5}>
              <Card.Img variant="top" src={proyecto.imagen} alt={titulo} style={{ height: "220px", objectFit: "cover" }} />
              <p><strong>Categoría:</strong> {categoria}</p>
              <p><strong>Estado:</strong> {estado}</p>
              <p><strong>Equipo:</strong> {equipo}</p>
              <p><strong>Rol:</strong> {rol}</p>
            </Col>
            <Col md={7}>
            <h3>Descripcion</h3>
          <p>{descripcion}</p>
            </Col>
          </Row>
          <ul className="link-recursos">
              <li><a href="#">Guía en PDF</a></li>
              <li><a href="#">Carpeta en Google Drive</a></li>
              <li><a href="#">Repositorio en GitHub</a></li>
          </ul>
        </div>
        )
          :
          (
            <p>NO EXISTE EL PROYECTO</p>
          )
      }
    </>

  );
};

export default DetalleProyecto;