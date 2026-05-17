import imagenDocentes from './../static/imagenes/docente.webp';
import imagenBiblioteca from './../static/imagenes/biblioteca.webp';
import imagenOlimpiadas from './../static/imagenes/olimpiadas.webp';
import imagenOrientacion from './../static/imagenes/orientacion.webp';
import imagenCursos from './../static/imagenes/cursos.webp';
import imagenDefault from './../static/imagenes/default.webp';

const proyectoService = (() => {

    let proyectos = [
        { id: 1, titulo: 'Capacitación de Docentes', categoria: 'web', estado: 'En curso', imagen: imagenDocentes, equipo: 'Juan Pérez', rol: 'Director Principal' },
        { id: 2, titulo: 'Biblioteca Digital', categoria: 'web', estado: 'Completado', imagen: imagenBiblioteca, equipo: 'Ana Martínez', rol: 'Coordinadora Secundario' },
        { id: 3, titulo: 'Olimpiadas académicas', categoria: 'mobile', estado: 'En curso', imagen: imagenOlimpiadas, equipo: 'Sofía López', rol: 'Rectora' },
        { id: 4, titulo: 'Orientación Vocacional', categoria: 'web', estado: 'Pendiente', imagen: imagenOrientacion, equipo: 'Elena Torres', rol: 'Administrativa' },
        { id: 5, titulo: 'Tutoring Académico', categoria: 'mobile', estado: 'En curso', imagen: imagenCursos, equipo: 'Miguel Herrera', rol: 'Académico' },
    ];

    const obtenerProyectos = () => [...proyectos];

    const agregarProyecto = (proyecto) => {
        const nuevoProyecto = { id: proyectos.length + 1, ...proyecto, imagen: imagenDefault };
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