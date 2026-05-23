import {useState} from "react";

const FormularioProyecto = ({handleAgregar}) => {
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

return(
    <div>
        <h3>Nuevo Proyecto</h3>
            <form onSubmit={handleSubmit}>
                <div className="form">
                    <input type="text" id="nombreProyecto" name="nombreProyecto" value={form.nombreProyecto} onChange={(e) => handleInputChange(e)} placeholder="Nombre del proyecto" />
                    <input type="text" id="categoriaProyecto" name="categoriaProyecto" value={form.categoriaProyecto} onChange={(e) => handleInputChange(e)} placeholder="Categoría" />
                    <input type="text" id="equipoProyecto" name="equipoProyecto" value={form.equipoProyecto} onChange={(e) => handleInputChange(e)} placeholder="Equipo a cargo" />
                    <input type="text" id="rolProyecto" name="rolProyecto" value={form.rolProyecto} onChange={(e) => handleInputChange(e)} placeholder="Rol" />
                    <select id="estadoProyecto" name="estadoProyecto" value={form.estadoProyecto} onChange={(e) => handleInputChange(e)}>
                        <option value="">Selecciona un estado</option>
                        <option value="En curso">En curso</option>
                        <option value="Finalizado">Finalizado</option>
                        <option value="Pendiente">Pendiente</option>
                    </select>
                        <textarea id="descripcionProyecto" name="descripcionProyecto" value={form.descripcionProyecto} onChange={handleInputChange} placeholder="Descripción del proyecto" rows={4}/>
                        <button className="link" style={{ padding: "10px", borderRadius: "5px", marginTop: "10px", }} type="submit">Agregar Proyecto</button>
                </div>
            </form> 
    </div>
);
};
export default FormularioProyecto;