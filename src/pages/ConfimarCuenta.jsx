import { Link, useParams } from "react-router-dom"
import { useEffect, useState } from "react"
import Alerta from "../components/Alerta"
import clienteAxios from "../config/axios"



export default function ConfimarCuenta() {

  const [cuentaConfirmada, setCuentaConfirmada] = useState(false)
  const [cargando, setCargando] = useState(true)
  const [alerta, setAlerta] = useState({})

  const params = useParams()
  const { token } = params

  useEffect(() => {
      const confirmarCuenta = async () => {
        console.log(token)
          try {
              const url = `/api/veterinarios/confirmar/${token}`
              const { data } = await clienteAxios(url)
              setCuentaConfirmada(true)
              setAlerta({ tipo: 'success', msg: data.msg });
          } catch (error) {
              console.log(error.response.data)
              setAlerta({ tipo: 'error', msg: error.response.data?.msg || "Error desconocido" });
          }
          setCargando(false)
      }
      confirmarCuenta()
  }, [])

 
  return (
    <>
      <div className="container">
        <h1 className="text-indigo-500 text-2xl font-bold text-center my-8">Confirmar cuenta</h1>
        {" "}
          
        </div>

        <div className='mt-20 md:mt-5 shadow-lg px-5 py-10 rounded-2xl'>
          {cargando && <p className="text-center">Cargando...</p>}
          <Alerta alerta={alerta} />
          {cuentaConfirmada && <Link to="/" className="text-center block text-indigo-600">Iniciar sesión</Link>}
        </div>
    </>
  )
}
