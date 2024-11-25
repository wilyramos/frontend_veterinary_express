import { Link, useNavigate } from 'react-router-dom';
import useAuth from '../hooks/useAuth';
import { useState } from 'react';
import Alerta from '../components/Alerta';
import clienteAxios from '../config/axios';


export default function Login() {

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [alerta, setAlerta] = useState({})

  const { setAuth } = useAuth()

  const navigate = useNavigate()

  const { msg } = alerta

  const handleSubmit = async e => {
    e.preventDefault()

    if (email.trim() === '' || password.trim() === '') {
      setAlerta({ tipo: 'error', msg: 'Todos los campos son obligatorios' })
      return
    }

    try {
      const { data } = await clienteAxios.post('/api/veterinarios/login', { email, password })
      localStorage.setItem('tokenVeterinaria', data.token)
      console.log(data)
      setAuth(data)
      navigate('/admin')
      
    } catch (error) {
      setAlerta({ tipo: 'error', msg: error.response.data.msg })
    }
  }


  return (
    <>

      <div>
        <h1 className="text-indigo-600 text-4xl font-bold text-center">Login
          <span className="text-indigo-900">Clinica</span>
        </h1>
      </div>

      <div className='mt-20 md:mt-5 shadow-lg px-5 py-10 rounded-2xl'>

        {msg && <Alerta
          alerta={alerta}
        />}

        <form
          className="mx-4"
          onSubmit={handleSubmit}

        >

          <div className="my-5">
            <label className="text-gray-600 block text-xl font-bold">Email</label>
            <input
              type="email"
              id="email"
              placeholder="Email de usuario"
              className="border w-full p-3 bg-gray-50 rounded-xl mt-2"
              value={email}
              onChange={e => setEmail(e.target.value)}
            />
          </div>

          <div className="my-5">
            <label className="text-gray-600 block text-xl font-bold">Password</label>
            <input
              type="password"
              id="password"
              placeholder="Password"
              className="border w-full p-3 bg-gray-50 rounded-xl mt-2"
              value={password}
              onChange={e => setPassword(e.target.value)}
            />
          </div>

          <input
            type="submit"
            value="Ingresar"
            className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-bold p-3 px-10 rounded-xl hover:cursor-pointer md:w-auto "
          />

        </form>


        <nav className='mt-10 flex justify-between'>
          <Link to='/registrar' className='text-indigo-600 hover:text-indigo-900'><span className="font-light text-gray-600"> ¿No tienes una cuenta? </span>Crear cuenta</Link>
          <Link to='/olvide-password' className='text-indigo-600 hover:text-indigo-900'><span className="font-light text-gray-600"> ¿Olvidaste tu contraseña? </span>Recuperar contraseña</Link>
        </nav>
      </div>
    </>
  )
}
