import { Link } from "react-router-dom"
import { useState } from "react"
import Alerta from "../components/Alerta"
import clienteAxios from "../config/axios"
import useAuth from "../hooks/useAuth"


export default function OlvidePassword() {

  const { auth, setAuth } = useAuth()

  console.log(auth)

  const [ email, setEmail ] = useState('')
  const [ alerta, setAlerta ] = useState({})

  const handleSubmit = async e => {
    e.preventDefault()

    if(email.trim() === '') {
      setAlerta({ tipo: 'error', msg: 'El email es obligatorio' })
      return
    }

    try {

      const { data } = await clienteAxios.post('/api/veterinarios/olvide-password', { email })
      setAlerta({ tipo: 'exito', msg: data.msg })
      
    } catch (error) {
      setAlerta({ tipo: 'error', msg: error.response.data.msg })
    }
  }

  const { msg } = alerta

  return (
    <>
      <div>
        <h1 className="text-indigo-600 text-4xl font-bold text-center">Olvide mi contraseña
          <span className="text-indigo-900">{" "}Clinica</span>
        </h1>
      </div>

      <div className='mt-20 md:mt-5 shadow-lg px-5 py-10 rounded-2xl'>

        <form
          onSubmit={handleSubmit}
        >
          { msg && <Alerta
            alerta={alerta}
          /> }

          <div className="my-5">
            <label className="text-gray-600 block text-xs ">Email</label>
            <input
              type="email"
              id="email"
              placeholder="Email de usuario"
              className="border w-full p-3 bg-gray-50 rounded-xl"
              value={email}
              onChange={e => setEmail(e.target.value)}
            />
          </div>

          <input
            type="submit"
            value="Recuperar contraseña"
            className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-bold p-3 px-10 rounded-xl hover:cursor-pointer md:w-auto "
          />

        </form>
        <nav className='mt-10 flex justify-between'>
          <Link to='/' className='text-indigo-600 hover:text-indigo-900'><span className="font-light text-gray-600"> ¿Ya tienes una cuenta? </span>Ingresar</Link>
          <Link to='/registrar' className='text-indigo-600 hover:text-indigo-900'><span className="font-light text-gray-600"> ¿No tienes una cuenta? </span>Crear cuenta</Link>
        </nav>
      </div>



    </>
  )
}
