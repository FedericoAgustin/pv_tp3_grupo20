import imagenDocentes from './../static/imagenes/docente.webp';
import imagenBiblioteca from './../static/imagenes/biblioteca.webp';
import imagenOlimpiadas from './../static/imagenes/olimpiadas.webp';
import imagenOrientacion from './../static/imagenes/orientacion.webp';
import imagenCursos from './../static/imagenes/cursos.webp';
import imagenDefault from './../static/imagenes/default.webp';

const descripcionArreglo = [
    `Este proyecto tiene como objetivo fortalecer las competencias digitales de los docentes
    mediante la incorporación de herramientas tecnológicas en el aula. Se busca promover
    el uso de plataformas educativas, recursos interactivos y metodologías innovadoras
    que mejoren la calidad del proceso de enseñanza-aprendizaje.
     A lo largo de la capacitación, los participantes desarrollarán habilidades prácticas
    para diseñar actividades digitales, evaluar el aprendizaje en entornos virtuales y
    fomentar la participación activa de los estudiantes. Además, se brindará acompañamiento
    continuo para asegurar la implementación efectiva de lo aprendido en contextos reales.`,
    `La biblioteca digital es una alternativa diseñada para almacenar, organizar y facilitar 
    el acceso a una amplia variedad de recursos informativos en formato electrónico.
    En este proyecto, ofrecemos acceder a libros en formato PDF, Drives con videos,
    Reporsitorios Github con proyectos guias.
    Este tipo de biblioteca aprovecha las tecnologías digitales para ofrecer búsquedas rápidas,
    acceso simultáneo a múltiples usuarios y actualización constante de sus contenidos.`,
    `Las olimpiadas académicas son competencias educativas que buscan fomentar el conocimiento,
    el pensamiento crítico y el desarrollo de habilidades en distintas areas.
    En este preyecto Ofrecemos la posibilidad a los estudiantes poner a prueba sus capacidades, resolver problemas
    desafiantes y demostrar su talento.
    Además de promover la excelencia académica, el proyecto busca valorar el esfuerzo,
    la perseverancia y el trabajo en equipo, siendo esto muy importante para el desarrollo como estudiantes.
    Participar en este tipo de actividades permite a los estudiantes ampliar sus horizontes y adquirir nuevas experiencias`,
    `La orientación vocacional es un proceso que ayuda a las personas, especialmente a los jóvenes, a identificar sus intereses,
    habilidades y valores con el fin de tomar decisiones sobre su futuro académico y profesional.
    En este proyecto, ofrecemos distintas herramientas, como entrevistas, test y actividades de reflexión, se busca que cada 
    individuo pueda conocerse mejor y descubrir qué áreas se ajustan más a su perfil.
    En este proyecto, no solo se centra en elegir una carrera, sino también en comprender las oportunidades del entorno`,
    `El tutoría académico es un proceso de acompañamiento educativo que tiene como objetivo apoyar a los estudiantes en su aprendizaje,
     ayudándolos a mejorar su rendimiento, comprender mejor los contenidos y desarrollar hábitos de estudio efectivos.
     A través de la guía de un tutor, los estudiantes pueden resolver dudas, reforzar temas específicos y adquirir estrategias que faciliten su proceso de formación.`
];


const proyectoService = (() => {

    let proyectos = [
        { id: 1, titulo: 'Capacitación de Docentes', categoria: 'web', estado: 'En curso', imagen: imagenDocentes, equipo: 'Juan Pérez', rol: 'Director Principal', descripcion: descripcionArreglo[0] },
        { id: 2, titulo: 'Biblioteca Digital', categoria: 'web', estado: 'Completado', imagen: imagenBiblioteca, equipo: 'Ana Martínez', rol: 'Coordinadora Secundario', descripcion: descripcionArreglo[1] },
        { id: 3, titulo: 'Olimpiadas académicas', categoria: 'mobile', estado: 'En curso', imagen: imagenOlimpiadas, equipo: 'Sofía López', rol: 'Rectora', descripcion: descripcionArreglo[2] },
        { id: 4, titulo: 'Orientación Vocacional', categoria: 'web', estado: 'Pendiente', imagen: imagenOrientacion, equipo: 'Elena Torres', rol: 'Administrativa', descripcion: descripcionArreglo[3] },
        { id: 5, titulo: 'Tutoring Académico', categoria: 'mobile', estado: 'En curso', imagen: imagenCursos, equipo: 'Miguel Herrera', rol: 'Académico', descripcion: descripcionArreglo[4] },
    ];

    const obtenerProyectos = () => [...proyectos];

    const agregarProyecto = (proyecto) => {
        const nuevoProyecto = {
            id: Date.now(),
            ...proyecto,
            imagen: imagenDefault
        };

        proyectos.push(nuevoProyecto);
    }

    const eliminarProyecto = (id) => {
        proyectos = proyectos.filter(proyecto => proyecto.id !== id);
    };

    const buscarProyectos = (nombreProyecto) => {
        const proyectoEncontrado = proyectos.filter(proyecto => proyecto.titulo.toLowerCase().includes(nombreProyecto.toLowerCase()));
        return proyectoEncontrado;
    }
    const obtenerProyectoPorId = (id) => {
        const proyecto = proyectos.find(proyecto => proyecto.id === id);
        return proyecto;
    }

    return {
        obtenerProyectos,
        agregarProyecto,
        eliminarProyecto,
        buscarProyectos,
        obtenerProyectoPorId
    };
})()

export default proyectoService;