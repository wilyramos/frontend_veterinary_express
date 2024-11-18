import { Link } from "react-router-dom";
import { useState } from "react";
import Alerta from "../components/Alerta";
import clienteAxios from "../config/axios";


export default function Registrar() {

  const [ nombre, setNombre ] = useState('') 
  const [ email, setEmail ] = useState('')
  const [ password, setPassword ] = useState('')
  const [ confirmPassword, setConfirmPassword ] = useState('')

  const [alerta, setAlerta] = useState({})

  const handleSubmit = async (e) => {
    e.preventDefault();
    if([nombre, email, password, confirmPassword].includes('')) {
      setAlerta({ tipo: 'error', msg: 'Todos los campos son obligatorios' })
      return
    }

    if(password !== confirmPassword) {
      setAlerta({ tipo: 'error', msg: 'Las contraseñas no coinciden' })
      return
    }
    if(password.length < 6) {
      setAlerta({ tipo: 'error', msg: 'La contraseña debe tener al menos 6 caracteres' })
      return
    }
    // Enviar la informacion al servidor
    try {
      await clienteAxios.post('/api/veterinarios', { nombre, email, password })
      setAlerta({
        msg: 'Usuario registrado correctamente, revisa tu email',
        tipo: 'success'
      })
    } catch (error) {
      setAlerta({
        msg: error.response.data.msg,
        tipo: 'error'
      })
      console.log(error.response.data.msg)
    }
  }
  
  return (
    <>
      <div>
        <h1 className="text-indigo-600 text-4xl font-bold text-center">Registrar
          <span className="text-indigo-900">Clinica</span>
        </h1>
      </div>

      <div className='mt-20 md:mt-5 shadow-lg px-5 py-10 rounded-2xl'>
        <Alerta alerta={alerta} />
        <form
          onSubmit={handleSubmit}
        >
          <div className="my-5">
            <label className="text-gray-600 block text-xs ">Nombre</label>
            <input
              type="text"
              id="nombre"
              placeholder="Nombre de usuario"
              className="border w-full p-3 bg-gray-50 rounded-xl"
              value={nombre}
              onChange={e => setNombre(e.target.value)}
            />
          </div>

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

          <div className="my-5">
            <label className="text-gray-600 block text-xs ">Password</label>
            <input
              type="password"
              id="password"
              placeholder="Password"
              className="border w-full p-3 bg-gray-50 rounded-xl"
              value={password}
              onChange={e => setPassword(e.target.value)}
            />
          </div>

          <div className="my-5">
            <label className="text-gray-600 block text-xs ">Confirmar Password</label>
            <input
              type="password"
              id="confirmPassword"
              placeholder="Confirmar Password"
              className="border w-full p-3 bg-gray-50 rounded-xl"
              value={confirmPassword}
              onChange={e => setConfirmPassword(e.target.value)}
            />
          </div>

          <input
            type="submit"
            value="Registrar"
            className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-bold p-3 px-10 rounded-xl hover:cursor-pointer md:w-auto "
          />
        </form>
        <nav className='mt-10 flex justify-between'> 
      
          <Link to='/' className='text-indigo-600 hover:text-indigo-900'>
          Ya tienes una cuenta? Iniciar Sesion</Link>

          <Link to='/olvide-password' className='text-indigo-600 hover:text-indigo-900'>Recuperar contraseña </Link>
        </nav>
      </div>


    </>
  )
}
