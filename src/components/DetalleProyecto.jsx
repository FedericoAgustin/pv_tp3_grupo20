const DetalleProyecto = ({ proyecto, cambio, setMostrarFooter }) => {
  const { titulo, categoria, estado, descripcion } = proyecto;

  return (
    
    <div className="card" style={{ marginTop: "20px" }}>
      <button onClick={()=>{

        cambio(null)
        setMostrarFooter(true)

        }}>regresar</button>

      <h2>{titulo}</h2>
      <p><strong>Categoría:</strong> {categoria}</p>
      <p><strong>Estado:</strong> {estado}</p>

      <h3>Descripcion</h3>
      <p>{descripcion}</p>
    </div>
  );
};

export default DetalleProyecto;