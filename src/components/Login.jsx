import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAutorizaciones } from '../hook/useAutorizaciones';
import autorizacionesService from '../services/autorizacionesServices';

const Login = () => {

    const [form, setForm] = useState({ user: '', password: '' });
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);

    // para las validaciones de cada campo o atributo
    const [erroresCampo, setErroresCampo] = useState({});

    const { guardarSesion } = useAutorizaciones();
    const navigate = useNavigate();

    const manejarCambio = (e) => {
        const { name, value } = e.target;
        setForm(prev => ({ ...prev, [name]: value }));

        // agregado
        if (erroresCampo[name]) {
             setErroresCampo(prev => ({ ...prev, [name]: null }));
        };
    };

    // agregada
    const validarForm = ({ user, password }) => {
        const errores = {};

        if (!user.trim()) {
            errores.user = 'El email es obligatorio';
        } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(user)) {
            errores.user = 'El email no tiene un formato válido';
        }

        if (!password.trim()) {
            errores.password = 'La contraseña es obligatoria';
        } else if (password.length < 6) {
            errores.password = 'La contraseña debe tener al menos 6 caracteres';
        }

        return errores;
    };
    

    const manejarEnvio = async (e) => {
        e.preventDefault();
        setError(null);
        
        const errores = validarForm(form);
        if (Object.keys(errores).length > 0) {
             setErroresCampo(errores);
             return; // detiene el envío si hay errores
        }

        setLoading(true);
        try {
            const usuario = await autorizacionesService.login(form.user, form.password);
            guardarSesion(usuario);
            navigate('/perfil');
        } catch (err) {
            setError(err.message);
        } finally {
            setLoading(false);
        }
    };

    const formularioIncompleto = !form.user.trim() || !form.password.trim();

    return (
        <div>
            <h2>Iniciar Sesión</h2>
            <form onSubmit={manejarEnvio} noValidate>
                <div>
                    <label>Email: </label>
                    <input
                        type="text"
                        name="user"
                        value={form.user}
                        onChange={manejarCambio}
                    />
                    {erroresCampo.user && (
                        <p style={{ color: 'red', fontSize: '0.85rem' }}>
                            {erroresCampo.user}
                        </p>
                    )}
                </div>
                <br />
                <div>
                    <label>Contraseña: </label>
                    <input
                        type="password"
                        name="password"
                        value={form.password}
                        onChange={manejarCambio}                      
                    />
                    {erroresCampo.password && (
                        <p style={{ color: 'red', fontSize: '0.85rem' }}>
                            {erroresCampo.password}
                        </p>
                    )}
                </div>
                <br />
                {error && <p style={{ color: 'red' }}>{error}</p>}
                <button type="submit" disabled={loading || formularioIncompleto}>
                    {loading ? 'Verificando...' : 'Ingresar'}
                </button>
            </form>
        </div>
    )
}

export default Login;