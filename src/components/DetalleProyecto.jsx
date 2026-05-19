const DetalleProyecto = ({ proyecto, cambio, setMostrarFooter }) => {
  const { titulo, categoria, estado, equipo, rol, descripcion } = proyecto;

  return (
    <div className="card" style={{ marginTop: "20px" }}>
      <button  onClick={() => { cambio(null), setMostrarFooter(true) }} >regresar</button>
      <h2>{titulo}</h2>
      <img src={proyecto.imagen} alt={titulo} style={{ width: "30%", height: "auto", borderRadius: "5px" }} />
      <p><strong>Categoría:</strong> {categoria}</p>
      <p><strong>Estado:</strong> {estado}</p>
      <p><strong>Equipo:</strong> {equipo}</p>
      <p><strong>Rol:</strong> {rol}</p>
      <h3>Descripcion</h3>
      <p>{descripcion}</p>
      <h3>Recursos</h3>
      <ul className="link-recursos">
          <li><a href="#">Guía en PDF</a></li>
          <li><a href="#">Carpeta en Google Drive</a></li>
          <li><a href="#">Repositorio en GitHub</a></li>
      </ul>
    </div>
  );
};

export default DetalleProyecto;