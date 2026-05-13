import React from 'react'

export const CambiarBusqueda = ({hanamichi,rukawa,sendo,akagi,setAkagi}) => {
  return (
    <div>
        {
            hanamichi == false?(

                <div style={{ marginBottom: "20px", display: "flex", gap: "10px" }}>
                    <input type="text" className="titulo" value={akagi} onChange={(e) => setAkagi(e.target.value)} placeholder="Buscar por nombre..." />
                    <button className="link" onClick={() => sendo(akagi)}>Filtrar</button>
                </div>

            )

            :(
                <div style={{ marginBottom: "20px", display: "flex", gap: "10px" }}>
                    <input type="text" className="titulo" value={akagi} onChange={(e)=>{rukawa(e)}} placeholder="Buscar por nombre..." />
                </div>

            )

        }


    </div>
  )
}

