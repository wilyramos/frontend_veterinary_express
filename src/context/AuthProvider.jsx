import { useState, useEffect, createContext } from "react";
import clienteAxios from "../config/axios";

const AuthContext = createContext();

const AuthProvider = ({ children }) => {

    const [cargando, setCargando] = useState(true);
    const [auth, setAuth] = useState({});

    useEffect(() => {
        const autenticarUsuario = async () => {
            const token = localStorage.getItem('tokenVeterinaria');

            if(!token) {
                setCargando(false);
                return;
            }
            const config = {
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: `Bearer ${token}`
                }
            }

            try {
                const { data } = await clienteAxios('/api/veterinarios/perfil', config);

                setAuth(data); // Poner el usuario en el state de auth
            } catch (error) {
                console.log(error.response.data.msg);
                setAuth({}); // Si hay un error, limpiar el state de auth
            }
            setCargando(false);
        }
        autenticarUsuario();
    }, []);

    const cerrarSesion = () => {
        localStorage.removeItem('tokenVeterinaria');
        setAuth({});
    } 

    const actualizarPerfil = async (datos) => {
        
        const token = localStorage.getItem('tokenVeterinaria');
        if(!token) {
            setCargando(false);
            return;
        }

        const config = {
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${token}`
            }
        }

        try {
            const url = `/api/veterinarios/perfil/${datos._id}`;
            const { data } = await clienteAxios.put(url, datos, config);

            return {
                msg: 'Perfil actualizado correctamente',
                tipo: 'success'
            }

            setAuth(data);
        } catch (error) {
            return {
                msg: error.response.data.msg,
                tipo: 'error'
            }
        }
    
    }

    const guardarPassword = async (datos) => {
        
        const token = localStorage.getItem('tokenVeterinaria');
        if(!token) {
            setCargando(false);
            return;
        }

        const config = {
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${token}`
            }
        }

        try {
            const url = '/api/veterinarios/actualizar-password';
            const { data } = await clienteAxios.put(url, datos, config);

            return {
                msg: data.msg,
                tipo: 'success'
            }

        } catch (error) {
            return {
                msg: error.response.data.msg,
                tipo: 'error'
            }
        }

    }


    return(
        <AuthContext.Provider
            value={{
                auth,
                setAuth,
                cargando,
                cerrarSesion,
                actualizarPerfil,
                guardarPassword
            }}
        >
            {children}
        </AuthContext.Provider>
    )
};

export { AuthProvider}
export default AuthContext;