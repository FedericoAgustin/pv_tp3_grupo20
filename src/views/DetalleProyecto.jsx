import { Button, ListGroup, Image, Card} from "react-bootstrap";
/**
 * style={{ marginTop: "20px" }} remplazado
 * ..., height: "auto", borderRadius: "5px" }} remplazo
 */
const DetalleProyecto = ({ proyecto, cambio, setMostrarFooter }) => {
  const { titulo, categoria, estado, equipo, rol, descripcion } = proyecto;

  return (

    <Card className="card mt-3" >
      <Button variant="success" onClick={() => { cambio(null), setMostrarFooter(true) }} >regresar</Button>
      <Card.Body>
          <h2>{titulo}</h2>
          <Image className="rounded" src={proyecto.imagen} alt={titulo} style={{ width: "30%", height: "auto", borderRadius: "5px" }} />
          <p><strong>Categoría:</strong> {categoria}</p>
          <p><strong>Estado:</strong> {estado}</p>
          <p><strong>Equipo:</strong> {equipo}</p>
          <p><strong>Rol:</strong> {rol}</p>
          <h3>Descripcion</h3>
          <p>{descripcion}</p>
          <h3>Recursos</h3>
          <ListGroup className="link-recursos">
              <ListGroup.Item><a href="#">Guía en PDF</a></ListGroup.Item>
              <ListGroup.Item><a href="#">Carpeta en Google Drive</a></ListGroup.Item>
              <ListGroup.Item><a href="#">Repositorio en GitHub</a></ListGroup.Item>
          </ListGroup>
      </Card.Body>
    </Card>

  );
};

export default DetalleProyecto;