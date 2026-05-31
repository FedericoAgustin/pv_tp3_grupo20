import React from 'react'
import { Card, Container, ListGroup } from 'react-bootstrap';

const PerfilUsuario = () => {
    return (
        <div className="bg-light min-vh-100 d-flex align-items-center justify-content-center"        >
            <Container>
                <Card className="mx-auto shadow-lg border-0 rounded-4" style={{ maxWidth: "500px" }}                >
                    <Card.Body className="p-4">
                        <div className="text-center mb-4">
                            <div className="bg-primary text-white rounded-circle d-flex align-items-center justify-content-center mx-auto mb-3" style={{ width: "90px", height: "90px", fontSize: "2rem", fontWeight: "bold" }}>
                            </div>
                            <h3 className="fw-bold mb-1">Federico Salinas</h3>
                            <p className="text-muted mb-0">Administrador</p>
                        </div>
                        <ListGroup variant="flush">
                            <ListGroup.Item className="py-3">
                                <div className="text-muted small">Nombre</div>
                                <div className="fw-semibold">Federico Salinas</div>
                            </ListGroup.Item>

                            <ListGroup.Item className="py-3">
                                <div className="text-muted small">Rol</div>
                                <div className="fw-semibold">Administrador </div>
                            </ListGroup.Item>

                            <ListGroup.Item className="py-3">
                                <div className="text-muted small">Institución</div>
                                <div className="fw-semibold">UnJu</div>
                            </ListGroup.Item>
                        </ListGroup>
                    </Card.Body>
                </Card>
            </Container>
        </div>
    );
}

export default PerfilUsuario