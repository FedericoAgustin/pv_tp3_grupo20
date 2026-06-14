// Aqui va el contexto del usuario, para compartir la informacion del usuario en toda la aplicación
import { createContext, useState } from "react";

export const UsuarioContext = createContext();

export const UsuarioProvider=({ children }) => {
    const [usuario, setUsuario]= useState(() => {
        return{
            nombre: "Lopez Aguila",
            dni: "11111111",
            rol: "Docente",
            institucion: "Universidad Nacional de Jujuy"
        }


    });
    const actualizarPerfil = (datosActualizados) =>{
        setUsuario(datosActualizados);
    }
    return(
        <UsuarioContext.Provider value = {{usuario, actualizarPerfil}}> 
            {children}
        </UsuarioContext.Provider>
    );
}
