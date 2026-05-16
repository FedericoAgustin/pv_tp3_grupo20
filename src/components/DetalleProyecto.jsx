const DetalleProyecto = ({ proyecto }) => {
  const { titulo, categoria, estado, descripcion } = proyecto;

  return (
    <div className="card" style={{ marginTop: "20px" }}>
      <h2>{titulo}</h2>
      <p><strong>Categoría:</strong> {categoria}</p>
      <p><strong>Estado:</strong> {estado}</p>

      <h3>Descripcion</h3>
      <p>{descripcion}</p>
    </div>
  );
};

export default DetalleProyecto;