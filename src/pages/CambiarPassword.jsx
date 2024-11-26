import { useState } from "react";
import AdminNav from "../components/AdminNav";
import Alerta from "../components/Alerta";
import useAuth from "../hooks/useAuth";

export default function CambiarPassword() {

  const { guardarPassword } = useAuth();

  const [alerta, setAlerta] = useState({});
  const [password, setPassword] = useState({
    password: '',
    newPassword: ''
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (Object.values(password).some(value => value === '')) {
      setAlerta({
        msg: 'Todos los campos son obligatorios',
        tipo: 'error'
      });
      return;
    }

    if (password.newPassword.length < 6) {
      setAlerta({
        msg: 'La nueva contraseña debe tener al menos 6 caracteres',
        tipo: 'error'
      });
      return;
    }


    const respuesta = await guardarPassword(password)
    setAlerta(respuesta);

  }

  const { msg } = alerta;
  return (

    <>
      <AdminNav />

      <h2 className="font-black text-3xl text-center mt-10">Cambiar contraseña</h2>
      <p className="text-center mt-2">Ingresa tu nueva
        <span className="font-bold text-indigo-600"> contraseña</span>
      </p>

      <div className="flex justify-center">
        <div className="w-full md:w-1/2 bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
          {msg && <Alerta alerta={alerta} />}
          <form onSubmit={handleSubmit} className="">
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
                Contraseña actual
              </label>
              <input
                type="password"
                name="password"
                className="border bg-gray-50 w-full p-2 mt-5 rounded-lg"
                onChange={e => setPassword({
                  ...password, [e.target.name]: e.target.value
                })}
              />
            </div>

            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="newPassword">
                Nueva contraseña
              </label>
              <input
                type="password"
                name="newPassword"
                className="border bg-gray-50 w-full p-2 mt-5 rounded-lg"
                onChange={e => setPassword({
                  ...password, [e.target.name]: e.target.value
                })}
              />
            </div>


            <div className="flex items-center justify-between">
              <button
                className="bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                type="submit"
              >
                Cambiar contraseña
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  )
}
