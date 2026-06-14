import { useState } from "react";
import { Form, Button } from "react-bootstrap";
import  proyectoService  from "../services/proyectoService";
const FormularioProyecto = ({ handleAgregar, setProyectos }) => {
    const [form, setForm] = useState({
        nombreProyecto: "",
        categoriaProyecto: "",
        estadoProyecto: "",
        descripcionProyecto: "",
        equipoProyecto: "",
        rolProyecto: "",
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setForm((prevForm) => ({
            ...prevForm,
            [name]: value,
        }));
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        if (form.nombreProyecto.trim() === "") return;
        handleAgregar(form);
        setForm({
            nombreProyecto: "",
            categoriaProyecto: "",
            estadoProyecto: "",
            descripcionProyecto: "",
            equipoProyecto: "",
            rolProyecto: "",
        });
    };

    return (    
        <div>
                  {/*revisar el color de los botones para que mantengan la estetica de la anteorir version */}
            <h3>Nuevo Proyecto</h3>
            <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3">
                    <Form.Label>Nombre del proyecto</Form.Label>
                    <Form.Control type="text" id="nombreProyecto" name="nombreProyecto" value={form.nombreProyecto} onChange={(e) => handleInputChange(e)} placeholder="Nombre del proyecto" required/>
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label> Categoria del proyecto</Form.Label>
                    <Form.Control type="text" id="categoriaProyecto" name="categoriaProyecto" value={form.categoriaProyecto} onChange={(e) => handleInputChange(e)} placeholder="Categoría" required/>
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label> Equipo a acargo</Form.Label>
                    <Form.Control type="text" id="equipoProyecto" name="equipoProyecto" value={form.equipoProyecto} onChange={(e) => handleInputChange(e)} placeholder="Equipo a cargo" required />
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label> Rol</Form.Label>
                    <Form.Control type="text" id="rolProyecto" name="rolProyecto" value={form.rolProyecto} onChange={(e) => handleInputChange(e)} placeholder="Rol" required  />
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label> Estado</Form.Label>
                    <Form.Select id="estadoProyecto" name="estadoProyecto" value={form.estadoProyecto} onChange={(e) => handleInputChange(e)} required>
                        <option value="">Selecciona un estado</option>
                        <option value="En curso">En curso</option>
                        <option value="Finalizado">Finalizado</option>
                        <option value="Pendiente">Pendiente</option>
                    </Form.Select>
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label> Descripcion</Form.Label>
                    <Form.Control as="textarea" id="descripcionProyecto" name="descripcionProyecto" value={form.descripcionProyecto} onChange={handleInputChange} placeholder="Descripción del proyecto" rows={4} required   />
                </Form.Group>
                <Button variant="dark" type="submit"> Agregar proyecto</Button>
                <Button onClick={()=>{
                    proyectoService.listarProyectosOriginales();
                    setProyectos(proyectoService.obtenerProyectos());
                }} variant="secondary" className="ms-2"> Listar proyectos originales</Button>
            </Form>
        </div>
    );
};
export default FormularioProyecto;