import {Navbar, ListGroup} from "react-bootstrap";
import {Link} from "react-router-dom";

const Nav = () => {
  return (
      <Navbar>
        <ListGroup>
            <ListGroup.Item><Link to= "/">Inicio</Link></ListGroup.Item>
            <ListGroup.Item><Link to="/proyectos">Proyectos</Link></ListGroup.Item> 
            <ListGroup.Item><Link to="/perfil">Perfil</Link></ListGroup.Item>
        </ListGroup>
      </Navbar>
  );
};
export default Nav