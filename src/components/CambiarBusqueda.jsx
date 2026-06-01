import { Button, Card } from "react-bootstrap";

export const CambiarBusqueda = ({ cambiarBusqueda, handleBuscar, handleBuscar2, setTitulo, titulo }) => {
    return (
        <>
            {
                !cambiarBusqueda ? (
                    <Card className='caja-boton' style={{ marginBottom: "20px", display: "flex", gap: "10px" }}>
                        <input type="text" className="titulo" value={titulo} onChange={(e) => setTitulo(e.target.value)} placeholder="Buscar por nombre..." />
                        <Button className="link" onClick={() => handleBuscar(titulo)}>Filtrar</Button>
                    </Card>
                )
                    : (
                        <Card className='caja-boton'  style={{ marginBottom: "20px", display: "flex", gap: "10px" }}>
                            <input type="text" className="titulo" value={titulo} onChange={(e) => { handleBuscar2(e) }} placeholder="Buscar por nombre..." />
                        </Card>
                    )
            }
        </>
    )
}
