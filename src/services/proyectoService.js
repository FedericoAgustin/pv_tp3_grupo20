const proyectoService = (() => {

    let proyectos = [
        { id: 1, titulo: 'Capacitación de Docentes', categoria: 'web', estado: 'En curso' },
        { id: 2, titulo: 'Biblioteca Digital', categoria: 'web', estado: 'Completado' },
        { id: 3, titulo: 'Olimpiadas académicas', categoria: 'mobile', estado: 'En curso' },
        { id: 4, titulo: 'Orientación Vocacional', categoria: 'web', estado: 'Pendiente' },
        { id: 5, titulo: 'Tutoring Académico', categoria: 'mobile', estado: 'En curso' },
    ];

    const obtenerProyectos = () => [...proyectos];

    const agregarProyecto = (proyecto) => {
        const nuevoProyecto = { id: proyectos.length + 1, ...proyecto };
        proyectos.push(nuevoProyecto);
    }

    const eliminarProyecto = (id) => {
        proyectos = proyectos.filter(proyecto => proyecto.id !== id);
    };

    const buscarProyectos = (nombreProyecto) => {
        const proyectoEncontrado = proyectos.filter(proyecto => proyecto.titulo.toLowerCase().includes(nombreProyecto.toLowerCase()));
        return proyectoEncontrado;
    }

    return {
        obtenerProyectos,
        agregarProyecto,
        eliminarProyecto,
        buscarProyectos
    };
})()

export default proyectoService;