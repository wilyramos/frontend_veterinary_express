import AdminNav from "../components/AdminNav";
import useAuth from "../hooks/useAuth";
import { useEffect, useState } from "react";
import Alerta from "../components/Alerta";


export default function EditarPerfil() {

  const { auth, actualizarPerfil } = useAuth();
  const [alerta, setAlerta] = useState({});
  const [perfil, setPerfil] = useState({
    nombre: "",
    sitioWeb: "",
    telefono: "",
    email: ""
  });

  useEffect(() => {

    setPerfil(auth);
  }, [auth]);

  const handleSubmit = async (e) => {
      e.preventDefault();
      const { nombre, email } = perfil;
      if (nombre.trim() === '' || email.trim() === '') {
        setAlerta({
          tipo: 'error',
          msg: 'El nombre y email son obligatorios'

        })
        return;
      }

      const resultado = await actualizarPerfil(perfil);
      setAlerta(resultado);

  }

  const { msg } = alerta;

  return (
    <>
      <AdminNav />

      <h2 className="font-black text-3xl text-center mt-10">Editar Perfil</h2>
      <p className="text-center mt-2">Modifica tu
        <span className="font-bold text-indigo-600"> informacion aqui</span>
      </p>


      <div className="flex justify-center">
        <div className="w-full md:w-1/2 bg-white shadow-md rounded-lg p-5 ">
          {msg && <Alerta alerta={alerta} />}
          <form
            onSubmit={handleSubmit}
          >
            <div className="my-3">
              <label className="text-sm font-bold text-gray-600 uppercase" htmlFor="nombre">Nombre</label>
              <input
                type="text"
                id="nombre"
                name="nombre"
                className="w-full border border-gray-300 p-2 rounded-md"
                value={perfil.nombre || ''}
                onChange={(e) => setPerfil({
                  ...perfil,
                  [e.target.name]: e.target.value
                })}
              />
            </div>

            <div className="my-3">
              <label className="text-sm font-bold text-gray-600 uppercase" htmlFor="sitioWeb">Sitio Web</label>
              <input
                type="text"
                id="sitioWeb"
                name="sitioWeb"
                className="w-full border border-gray-300 p-2 rounded-md"
                value={perfil.sitioWeb || ''}
                onChange={(e) => setPerfil({
                  ...perfil,
                  [e.target.name]: e.target.value
                })}
              />
            </div>

            <div className="my-3">
              <label className="text-sm font-bold text-gray-600 uppercase" htmlFor="telefono">Telefono</label>
              <input
                type="text"
                id="telefono"
                name="telefono"
                className="w-full border border-gray-300 p-2 rounded-md"
                value={perfil.telefono || ''}
                onChange={(e) => setPerfil({
                  ...perfil,
                  [e.target.name]: e.target.value
                })}
              />
            </div>

            <div className="my-3">
              <label className="text-sm font-bold text-gray-600 uppercase" htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                className="w-full border border-gray-300 p-2 rounded-md"
                value={perfil.email || ''}
                onChange={(e) => setPerfil({
                  ...perfil,
                  [e.target.name]: e.target.value
                })}
              />
            </div>

            <input
              type="submit"
              value="Guardar Cambios"
              className="w-full bg-blue-600 hover:bg-blue-500 text-white uppercase text-lg rounded-md p-2 mt-3"
            ></input>

          </form>
        </div>
      </div>
    </>

  )
}
