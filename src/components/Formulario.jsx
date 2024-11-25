import { useState, useEffect } from "react";
import Alerta from "./Alerta";
import usePacientes from "../hooks/usePacientes";

export default function Formulario() {
    const [nombre, setNombre] = useState('');
    const [propietario, setPropietario] = useState('');
    const [email, setEmail] = useState('');
    const [fecha, setFecha] = useState('');
    const [sintomas, setSintomas] = useState('');
    const [id, setId] = useState('');
    const [alerta, setAlerta] = useState({});

    const { guardarPaciente, paciente } = usePacientes();

    useEffect(() => {
        if (paciente?.nombre) {
            setNombre(paciente.nombre);
            setPropietario(paciente.propietario);
            setEmail(paciente.email);
            setFecha(paciente.fecha);
            setSintomas(paciente.sintomas);
            setId(paciente._id);
        }
    }, [paciente]);

    const handleSubmit = (e) => {
        e.preventDefault();

        if ([nombre, propietario, email, fecha, sintomas].includes('')) {
            setAlerta({ tipo: 'error', msg: 'Todos los campos son obligatorios' });
            return;
        }
        
        guardarPaciente({ nombre, propietario, email, fecha, sintomas, id });
        setAlerta({
            tipo: 'success',
            msg: paciente?.nombre ? 'Paciente actualizado' : 'Paciente agregado'
        });

        // Limpiar el formulario
        setNombre('');
        setPropietario('');
        setEmail('');
        setFecha('');
        setSintomas('');
        setId('');
    };

    return (
        <div className="max-w-4xl mx-auto mt-10 p-6 bg-gray-50 shadow-md rounded-lg">
            <p className="text-2xl text-center font-bold text-gray-700">
                Gestiona tus <span className="text-indigo-600">Pacientes</span>
            </p>

            <form 
                className="bg-white shadow-lg rounded-lg p-8 mt-6 space-y-6"
                onSubmit={handleSubmit}
            >
                <div className="flex flex-col">
                    <label htmlFor="nombre" className="text-gray-600 font-medium uppercase">
                        Nombre Mascota
                    </label>
                    <input
                        type="text"
                        id="nombre"
                        placeholder="Nombre del paciente"
                        className="border-2 border-gray-300 rounded-lg p-3 mt-2 focus:ring-2 focus:ring-indigo-500 focus:outline-none"
                        value={nombre}
                        onChange={(e) => setNombre(e.target.value)}
                    />
                </div>

                <div className="flex flex-col">
                    <label htmlFor="propietario" className="text-gray-600 font-medium uppercase">
                        Nombre Propietario
                    </label>
                    <input
                        type="text"
                        id="propietario"
                        placeholder="Nombre del propietario"
                        className="border-2 border-gray-300 rounded-lg p-3 mt-2 focus:ring-2 focus:ring-indigo-500 focus:outline-none"
                        value={propietario}
                        onChange={(e) => setPropietario(e.target.value)}
                    />
                </div>

                <div className="flex flex-col">
                    <label htmlFor="email" className="text-gray-600 font-medium uppercase">
                        Email
                    </label>
                    <input
                        type="email"
                        id="email"
                        placeholder="Email del propietario"
                        className="border-2 border-gray-300 rounded-lg p-3 mt-2 focus:ring-2 focus:ring-indigo-500 focus:outline-none"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </div>

                <div className="flex flex-col">
                    <label htmlFor="fecha" className="text-gray-600 font-medium uppercase">
                        Fecha
                    </label>
                    <input
                        type="date"
                        id="fecha"
                        className="border-2 border-gray-300 rounded-lg p-3 mt-2 focus:ring-2 focus:ring-indigo-500 focus:outline-none"
                        value={fecha}
                        onChange={(e) => setFecha(e.target.value)}
                    />
                </div>

                <div className="flex flex-col">
                    <label htmlFor="sintomas" className="text-gray-600 font-medium uppercase">
                        Síntomas
                    </label>
                    <textarea
                        id="sintomas"
                        placeholder="Describa los síntomas"
                        className="border-2 border-gray-300 rounded-lg p-3 mt-2 focus:ring-2 focus:ring-indigo-500 focus:outline-none"
                        value={sintomas}
                        onChange={(e) => setSintomas(e.target.value)}
                    ></textarea>
                </div>

                <button
                    type="submit"
                    className="w-full bg-indigo-600 text-white text-lg font-semibold py-3 rounded-lg hover:bg-indigo-700 transition duration-200"
                >
                    {paciente?.nombre ? 'Guardar Cambios' : 'Agregar Paciente'}
                </button>
            </form>

            {alerta.msg && <Alerta alerta={alerta} />}
        </div>
    );
}
