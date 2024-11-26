import { Link } from "react-router-dom"


export default function AdminNav() {
  return (
    <nav className="flex gap-3 p-2">

        <Link to="/admin/perfil" className="font-bold uppercase text-gray-500 hover:text-gray-700">Perfil</Link>

        <Link to="/admin/cambiar-password" className="font-bold uppercase text-gray-500 hover:text-gray-700">Cambiar contraseña</Link>

    </nav>
  )
}
