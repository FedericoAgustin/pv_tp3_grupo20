import { Card, Col, Container, Row, Carousel, Badge } from "react-bootstrap";
import proyectoService from "../services/proyectoService";
import { useEffect, useState } from "react";

const Dashboard = () => {
  const [proyectos] = useState(proyectoService.obtenerProyectos());
  return (
    <Container className="py-4">
      {/*Card de descripción*/}
      <Row className="mt-4">
        <Col>
          <Card style={{ backgroundColor: "#E3C094", color: "#2B231E" }}>
            <Card.Body className="text-center">
              <h1 style={{ fontSize: "1.4rem", color: "#2B231E" }}>
                Bienvenido a la Plataforma de Gestión de Proyectos Educativos
              </h1>
              <p
                className="mt-3"
                style={{ fontSize: "0.95rem", lineHeight: "1.6" }}
              >
                Desde esta pagina podés gestionar, visualizar y hacer
                seguimiento de todos los proyectos educativos de la institución.
                Esta plataforma permite agregar nuevos proyectos, consultar su
                estado actual, ver el detalle de cada uno. Navegá por el menú
                superior para acceder a la lista de proyectos y tu perfil.
              </p>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      {/*Carrusel con Proyectos*/}
      <Row className="mt-4">
        <Col>
          <Card style={{ backgroundColor: "#E3C094", color: "#2B231E" }}>
            <Card.Body>
              <Card.Title style={{ fontSize: "1.5rem" }}>
                Proyectos Destacados
              </Card.Title>
              <Carousel interval={2000} indicators={true}>
                {proyectos.map((proyecto) => (
                  <Carousel.Item key={proyecto.id}>
                    <div className="d-flex justify-content-center align-items-center" style={{ height: "200px", padding: "2rem" }}>
                      <div className="text-center" style={{ color: "#2B231E" }}>
                        <h4 style={{ fontWeight: "bold" }}>{proyecto.titulo}</h4>
                        <p style={{ fontSize: "0.95rem" }}> {proyecto.equipo} — {proyecto.rol}</p>
                        <Badge bg="primary" className="me-2"> {proyecto.categoria}</Badge>
                        <Badge> {proyecto.estado} </Badge>
                      </div>
                    </div>
                  </Carousel.Item>
                ))}
              </Carousel>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      {/*Card de estadísticas*/}
      <Row className="mt-4">
        <Col>
          <Card style={{ backgroundColor: "#E3C094", color: "#2B231E" }}>
            <Card.Body>
              <Card.Title style={{ fontSize: "1.5rem", color: "#2B231E" }}>
                Estadísticas
              </Card.Title>
              <Row className="mt-3" xs={1} sm={2} md={4}>
                <Col className="mb-3">
                  <Card style={{ backgroundColor: "#f5e0c1" }}>
                    <Card.Body>
                      <Card.Title>Total de Proyectos</Card.Title>
                      <Card.Text
                        style={{ fontSize: "2.5rem", fontWeight: "bold" }}
                      >
                        5
                      </Card.Text>
                    </Card.Body>
                  </Card>
                </Col>
                <Col className="mb-3">
                  <Card style={{ backgroundColor: "#f5e0c1" }}>
                    <Card.Body>
                      <Card.Title>Proyectos en Curso</Card.Title>
                      <Card.Text
                        style={{ fontSize: "2.5rem", fontWeight: "bold" }}
                      >
                        3
                      </Card.Text>
                    </Card.Body>
                  </Card>
                </Col>
                <Col className="mb-3">
                  <Card style={{ backgroundColor: "#f5e0c1" }}>
                    <Card.Body>
                      <Card.Title>Proyectos Completados</Card.Title>
                      <Card.Text
                        style={{ fontSize: "2.5rem", fontWeight: "bold" }}
                      >
                        1
                      </Card.Text>
                    </Card.Body>
                  </Card>
                </Col>
                <Col className="mb-3">
                  <Card style={{ backgroundColor: "#f5e0c1" }}>
                    <Card.Body>
                      <Card.Title>Proyectos Pendientes</Card.Title>
                      <Card.Text
                        style={{ fontSize: "2.5rem", fontWeight: "bold" }}
                      >
                        1
                      </Card.Text>
                    </Card.Body>
                  </Card>
                </Col>
              </Row>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default Dashboard;
