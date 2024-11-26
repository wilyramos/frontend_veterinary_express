import usePacientes from '../hooks/usePacientes';
import Paciente from './Paciente';



export default function ListadoPacientes() {

  const { pacientes } = usePacientes();


  return (
    <>
      {pacientes.length ?
        (
          <>
            <h2 className="mt-5 text-center font-black">Listado de <span className='font-black text-indigo-700'>pacientes</span></h2>

            {pacientes.map(paciente => (

              <Paciente
                key={paciente._id}
                paciente={paciente}
              />

            ))}

          </>


        ) :
        (
          <>
            <h2 className="mt-5 text-center font-black">No hay pacientes registrados</h2 >

            <p className='text-xl mt-5 mb-10 text-center'>
              <span className='font-bold text-indigo-700'>Agrega un paciente</span>
              y aparecerá aquí
            </p>
          </>

        )
      }
    </>
  )
}
