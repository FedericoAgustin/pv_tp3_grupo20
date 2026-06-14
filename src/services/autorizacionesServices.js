const autorizacionesService = (() => {

    // BD simulada
    const usuarios = [
        { id: 1, nombre: 'Nehuel', user: 'nehuel@mail.com', password: '123456', dni: '10', rol: 'enganche', institucion: 'real madrid' },
        { id: 2, nombre: 'Nicolas', user: 'nicolas@mail.com', password: '123456', dni: '24', rol: 'volante central', institucion: 'river' },
        { id: 3, nombre: 'Fede', user: 'fede@mail.com', password: '123456', dni: '23', rol: 'portero', institucion: 'barcelona' },
        { id: 4, nombre: 'Bruno', user: 'bruno@mail.com', password: '123456', dni: '9', rol: 'mediapunta', institucion: 'river' },
    ];

    // buscar usuario
    const login = (user, password) => {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                const encontrado = usuarios.find(
                    u => u.user === user && u.password === password
                );
                if (encontrado) {
                    resolve({ id: encontrado.id, nombre: encontrado.nombre, dni: encontrado.dni, rol: encontrado.rol, institucion: encontrado.institucion });
                } else {
                    reject(new Error('Usuario o contraseña incorrectos'));
                }
            }, 800);
        });
    };

    return { login };

})();

export default autorizacionesService;