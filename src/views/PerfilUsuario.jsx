import React from "react";
import { useState, useContext } from "react";
import { Card, Container, ListGroup, Form, Button } from "react-bootstrap";
import { UsuarioContext } from "../context/UsuarioContext";

const PerfilUsuario = () => {
  const { usuario, actualizarPerfil } = useContext(UsuarioContext);
  const [modoEdicion, setModoEdicion] = useState(false);
  const [formulario, setFormulario] = useState({ ...usuario });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormulario({ ...formulario, [name]: value });
  };

  const handleEditar = () => {
    setFormulario({ ...usuario });
    setModoEdicion(true);
  };

  const handleGuardar = (e) => {
    e.preventDefault();
    actualizarPerfil(formulario);
    setModoEdicion(false);
  };

  const handleCancelar = () => {
    setFormulario({ ...usuario });
    setModoEdicion(false);
  };
  return (
    <div className="bg-light min-vh-100 d-flex align-items-center justify-content-center">
      <Container>
        <Card
          className="mx-auto shadow-lg border-0 rounded-4"
          style={{ maxWidth: "500px" }}
        >
          <Card.Body className="p-4">
            <div className="text-center mb-4">
              <div
                className="bg-primary text-white rounded-circle d-flex align-items-center justify-content-center mx-auto mb-3"
                style={{
                  width: "90px",
                  height: "90px",
                  fontSize: "2rem",
                  fontWeight: "bold",
                }}
              >
                {usuario.nombre.charAt(0)}
              </div>
              <h3 className="fw-bold mb-1">{usuario.nombre}</h3>
              <p className="text-muted mb-0">{usuario.rol}</p>
            </div>

            {modoEdicion ? (
              <Form onSubmit={handleGuardar}>
                <Form.Group className="mb-3">
                  <Form.Label className="text-muted small">Nombre</Form.Label>
                  <Form.Control
                    name="nombre"
                    value={formulario.nombre}
                    onChange={handleChange}
                    required
                  />
                </Form.Group>
                <Form.Group className="mb-3">
                  <Form.Label className="text-muted small">DNI</Form.Label>
                  <Form.Control
                    name="dni"
                    value={formulario.dni}
                    onChange={handleChange}
                    required
                  />
                </Form.Group>
                <Form.Group className="mb-3">
                  <Form.Label className="text-muted small">Rol</Form.Label>
                  <Form.Control
                    name="rol"
                    value={formulario.rol}
                    onChange={handleChange}
                    required
                  />
                </Form.Group>
                <Form.Group className="mb-3">
                  <Form.Label className="text-muted small">Institución</Form.Label>
                  <Form.Control
                    name="institucion"
                    value={formulario.institucion}
                    onChange={handleChange}
                    required
                  />
                </Form.Group>
                <div className="d-flex gap-2 mt-2">
                  <Button type="submit" variant="success">
                    Guardar Cambios
                  </Button>
                  <Button variant="secondary" onClick={handleCancelar}>
                    Cancelar
                  </Button>
                </div>
              </Form>
            ) : (
              <>
                <ListGroup variant="flush">
                  <ListGroup.Item className="py-3">
                    <div className="text-muted small">Nombre</div>
                    <div className="fw-semibold">{usuario.nombre}</div>
                  </ListGroup.Item>
                  <ListGroup.Item className="py-3">
                    <div className="text-muted small">DNI</div>
                    <div className="fw-semibold">{usuario.dni}</div>
                  </ListGroup.Item>
                  <ListGroup.Item className="py-3">
                    <div className="text-muted small">Rol</div>
                    <div className="fw-semibold">{usuario.rol}</div>
                  </ListGroup.Item>
                  <ListGroup.Item className="py-3">
                    <div className="text-muted small">Institución</div>
                    <div className="fw-semibold">{usuario.institucion}</div>
                  </ListGroup.Item>
                </ListGroup>
                <div className="text-center mt-4">
                  <Button variant="primary" onClick={handleEditar}>
                    Editar Perfil
                  </Button>
                </div>
              </>
            )}
          </Card.Body>
        </Card>
      </Container>
    </div>
  );
};

export default PerfilUsuario;