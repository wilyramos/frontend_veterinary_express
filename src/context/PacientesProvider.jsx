import { createContext, useState, useEffect } from "react";
import clienteAxios from "../config/axios";
import useAuth from "../hooks/useAuth";

const PacientesContext = createContext();

export const PacientesProvider = ({ children }) => {

    const [pacientes, setPacientes] = useState([]);
    const [paciente, setPaciente] = useState();
    const { auth } = useAuth();

    // Obtener los pacientes de la BD
    useEffect(() => {
        const obtenerPacientes = async () => {

            try {
                const token = localStorage.getItem('tokenVeterinaria');
                if (!token) return;
                const config = {
                    headers: {
                        'Content-Type': 'application/json',
                        Authorization: `Bearer ${token}`
                    }
                }
                const { data } = await clienteAxios.get('/api/pacientes', config);
                setPacientes(data);
            } catch (error) {
                console.log(error);
            }

        }
        obtenerPacientes();
    }, [auth]);

    const guardarPaciente = async (paciente) => {

        const token = localStorage.getItem('tokenVeterinaria');
        const config = {
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${token}`
            }
        }

        console.log(paciente);
        // Si el paciente tiene un id, es porque se está editando
        if (paciente.id) {
            try {
                const { data } = await clienteAxios.put(`/api/pacientes/${paciente.id}`, paciente, config);

                // Actualizar el paciente en el state
                const pacientesActualizados = pacientes.map(pacienteState => pacienteState._id === data.id ? data : paciente);

                setPacientes(pacientesActualizados);

            } catch (error) {
                console.log(error);
            }
        } else {
            try {

                const { data } = await clienteAxios.post('/api/pacientes', paciente, config);

                const { createdAt, updatedAt, __v, ...pacienteGuardado } = data;
                setPacientes([pacienteGuardado, ...pacientes]);
                // agregar el paciente sin createdAt, updatedAt y __v
                // Mostrar alerta
            } catch (error) {
                console.log(error);
                setAlerta({ tipo: 'error', msg: error.response.data.msg });
            }
        }

        // Si el paciente no tiene un id, es porque es un paciente nuevo

    }

    const setEdicion = (paciente) => {
        setPaciente(paciente);
    }

    const eliminarPaciente = async (id) => {
       
        const confirmar = confirm('¿Estás seguro de eliminar?')
        if (confirmar) {
            try {
                const token = localStorage.getItem('tokenVeterinaria');
                const config = {
                    headers: {
                        "Content-Type": "application/json",
                        Authorization: `Bearer ${token}`
                    }
                }
                
                const { data } = await clienteAxios.delete(`/api/pacientes/${id}`, config);

                const pacientesActualizado = pacientes.filter(paciente => paciente._id !== id);
                setPacientes(pacientesActualizado);                
                
            } catch (error) {
                console.log(error);
            }
        }
    }
    return (
        <PacientesContext.Provider
            value={{
                pacientes,
                paciente,
                
                guardarPaciente,
                setEdicion,
                
                eliminarPaciente
            }}
        >
            {children}
        </PacientesContext.Provider>
    )
}

export default PacientesContext;

