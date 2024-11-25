import Formulario from "../components/Formulario"
import ListadoPacientes from "../components/ListadoPacientes"
import { useState } from "react"


export default function AdministrarPacientes() {

    const [ mostrarFormulario, setMostrarFormulario ] = useState(false)

  return (
    <div className="flex flex-col md:flex-row-2">

        <button
            type="button"
            className="bg-indigo-700 hover:bg-indigo-800 text-white font-bold mx-10 p-3 rounded-lg mb-10 mt-2 md:hidden "
            onClick={() => setMostrarFormulario(!mostrarFormulario)}                   
        >
            {mostrarFormulario ? 'Ocultar formulario' : 'Agregar paciente'}
        </button>

        <div className={` ${mostrarFormulario ? 'block' : 'hidden' } md:block md:w-1/2 lg:w-2/5`}>
            <Formulario />
        </div>

        <div className="md:w-1/2 lg:w-3/5">

            <ListadoPacientes />
        </div>
    </div>
  )
}
