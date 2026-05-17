const DetalleProyecto = ({ proyecto, cambio, setMostrarFooter }) => {
  const { titulo, categoria, estado, equipo, rol, descripcion } = proyecto;

  return (
    <div className="card" style={{ marginTop: "20px" }}>
      <button onClick={() => { cambio(null), setMostrarFooter(true) }}>regresar</button>
      <h2>{titulo}</h2>
      <img src={proyecto.imagen} alt={titulo} style={{ width: "30%", height: "auto", borderRadius: "5px" }} />
      <p><strong>Categoría:</strong> {categoria}</p>
      <p><strong>Estado:</strong> {estado}</p>
      <p><strong>Equipo:</strong> {equipo}</p>
      <p><strong>Rol:</strong> {rol}</p>
      <h3>Descripcion</h3>
      <p>{descripcion}</p>
    </div>
  );
};

export default DetalleProyecto;