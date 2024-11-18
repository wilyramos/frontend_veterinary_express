import { useEffect, useState } from "react"
import { useParams, Link } from "react-router-dom"
import Alerta from "../components/Alerta"
import clienteAxios from "../config/axios"

export default function NuevoPassword() {

  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [alerta, setAlerta] = useState({})
  const [passwordModificado, setPasswordModificado] = useState(false)

  const [tokenValido, setTokenValido] = useState(false)

  const params = useParams()
  const { token } = params
  const { msg } = alerta

  useEffect(() => {
    const comprobarToken = async () => {
      try {
        await clienteAxios(`/api/veterinarios/olvide-password/${token}`)
        setAlerta({
          msg: 'Ingresa tu nueva contraseña',
          tipo: 'success'
        })

        setTokenValido(true)

      } catch (error) {
        setAlerta({
          msg: "El codigo no es valido o el enlace ha expirado",
          tipo: 'error'
        })
      }
    }
    comprobarToken()
  }, []);

  const handleSubmit = async e => {
    console.log('Enviando formulario')
    e.preventDefault()

    if (password.trim() === '') {
      setAlerta({ tipo: 'error', msg: 'La contraseña es obligatoria' })
      return
    }
    if (password.length < 6) {
      setAlerta({ tipo: 'error', msg: 'La contraseña debe tener al menos 6 caracteres' })
      return
    }
    if (password !== confirmPassword) {
      setAlerta({ tipo: 'error', msg: 'Las contraseñas no coinciden' })
      return
    }

    try {
      const url = `/api/veterinarios/olvide-password/${token}`
      const { data } = await clienteAxios.post(url, { password })
      setPasswordModificado(true)
      setAlerta({ tipo: 'success', msg: data.msg })

    } catch (error) {
      setAlerta({ tipo: 'error', msg: error.response.data.msg })
    }
  }





  return (
    <>
      <div className="container">
        <h1 className="text-indigo-500 text-2xl font-bold text-center my-8">Reestablece tu contraseña <span className="text-indigo-900">en Veterinaria</span></h1>
        {" "}

      </div>

      <div className='mt-20 md:mt-5 shadow-lg px-5 py-10 rounded-2xl'>
        {msg && <Alerta alerta={alerta} />}

        {tokenValido && (
          <>
            <form
              onSubmit={handleSubmit}
            >
              <div className="my-5">
                <label className="text-gray-600 block text-xs ">Nueva contraseña</label>
                <input
                  type="password"
                  id="password"
                  placeholder="Nueva contraseña"
                  className="border w-full p-3 bg-gray-50 rounded-xl"
                  value={password}
                  onChange={e => setPassword(e.target.value)}
                />
              </div>

              <div className="my-5">
                <label className="text-gray-600 block text-xs ">Confirmar contraseña</label>
                <input
                  type="password"
                  id="confirmPassword"
                  placeholder="Confirmar contraseña"
                  className="border w-full p-3 bg-gray-50 rounded-xl"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                />
              </div>

              <button
                type="submit"
                className="bg-indigo-600 hover:bg-indigo-700 w-full p-3 text-white uppercase font-bold rounded-xl"
              >
                Guardar
              </button>

            </form>


          </>

        )}

        {passwordModificado &&
          <Link to="/" className="text-center block text-indigo-600">Iniciar sesión</Link>
        }

      </div>
    </>
  )
}
