import usePacientes from "../hooks/usePacientes";


export default function Paciente({ paciente }) {

    // Extraer los datos del paciente PARA EDITAR

    const { setEdicion, eliminarPaciente } = usePacientes();
    const { nombre, propietario, fecha, email, sintomas, _id } = paciente;
    const formatearFecha = (fecha) => {
        const nuevaFecha = new Date(fecha);

        return new Intl.DateTimeFormat('es-ES', {
            dateStyle: 'full',
        }).format(nuevaFecha);
    }

    return (
        <>
            <div className="bg-gradient-to-br from-indigo-900 to-indigo-500 rounded-xl p-6 m-4 border shadow-lg">
                <div className="space-y-2 flex justify-between">
                    <div>
                        <p className="font-semibold text-gray-200">
                            Nombre:
                            <span className="ml-2 text-gray-300 font-normal"> {nombre}</span>
                        </p>
                        <p className="text-sm font-medium text-gray-200">
                            Propietario:
                            <span className="ml-2 text-gray-300 font-light"> {propietario}</span>
                        </p>

                        <p className="text-sm font-medium text-gray-200">
                            Fecha:
                            <span className="ml-2 text-gray-300 font-light">{formatearFecha(fecha)}</span>
                        </p>

                        <p className="text-sm font-medium text-gray-200">
                            Email:
                            <span className="ml-2 text-gray-300 font-light"> {email}</span>
                        </p>

                        <p className="text-sm font-medium text-gray-200">
                            Síntomas:
                            <span className="ml-2 text-gray-300 font-light"> {sintomas}</span>
                        </p>
                    </div>

                    <div className="flex gap-1 h-10">
                        <button
                            type="button"
                            className=" py-2 px-8 bg-green-600 hover:bg-green-700 text-white rounded-lg"
                            onClick={() => setEdicion(paciente)}
                        > Editar </button>
                        <button
                            type="button"
                            className="py-2 px-6 mx-1 bg-red-600 hover:bg-red-700 text-white rounded-lg"
                            onClick={() => eliminarPaciente(_id)}

                        > Eliminar </button>
                    </div>
                </div>
            </div>
        </>
    );
}
