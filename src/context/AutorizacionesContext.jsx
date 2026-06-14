import { createContext, useContext, useState } from 'react';

// 1 null no hay nada fuera del contexto
export const AutorizacionesContext = createContext(null);

// 2
export const ProveedorAutorizaciones = ({ children }) => {

    const [usuarioActivo, setUsuarioActivo] = useState(() => {
        const usuarioGuardado = localStorage.getItem("usuario");

        return usuarioGuardado
            ? JSON.parse(usuarioGuardado)
            : null;
    });

    const guardarSesion = (usuario) => {
        setUsuarioActivo(usuario);
        localStorage.setItem("usuario", JSON.stringify(usuario));
    };
    const cerrarSesion  = () => {
        setUsuarioActivo(null);
        localStorage.removeItem("usuario"); 
    }

    return (
        <AutorizacionesContext.Provider value={{ usuarioActivo, guardarSesion, cerrarSesion }}>
            {children}
        </AutorizacionesContext.Provider>
    );
};