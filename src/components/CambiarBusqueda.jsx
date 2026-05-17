import React from 'react'

export const CambiarBusqueda = ({ cambiarBusqueda, handleBuscar, handleBuscar2, setTitulo, titulo }) => {
    return (
        <>
            {
                cambiarBusqueda == false ? (
                    <div style={{ marginBottom: "20px", display: "flex", gap: "10px" }}>
                        <input type="text" className="titulo" value={titulo} onChange={(e) => setTitulo(e.target.value)} placeholder="Buscar por nombre..." />
                        <button className="link" onClick={() => handleBuscar(titulo)}>Filtrar</button>
                    </div>
                )
                    : (
                        <div style={{ marginBottom: "20px", display: "flex", gap: "10px" }}>
                            <input type="text" className="titulo" value={titulo} onChange={(e) => { handleBuscar2(e) }} placeholder="Buscar por nombre..." />
                        </div>
                    )
            }
        </>
    )
}
