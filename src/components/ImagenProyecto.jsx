import {Image} from "react-bootstrap";

export const ImagenProyecto = ({ imagen, titulo }) => {

  return (
    <Image className="imagen-proyecto"
      src={imagen}
      alt={titulo}
      className="imagen-proyecto"
    />
  )
  
}