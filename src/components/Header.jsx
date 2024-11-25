import { Link } from "react-router-dom";
import useAuth from "../hooks/useAuth";

export default function Header() {

    const { cerrarSesion } = useAuth();

  return (

    <header className="py-10 bg-indigo-600">
        <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
            <h1 className="text-2xl font-bold text-indigo-300 text-center">
                VetAdmin
                <span className="text-indigo-100 font-black"> Clinica</span>
            </h1>

            <nav className="flex flex-col md:flex-row gap-1 md:gap-4 mt-5 lg:mt-0 items-center ">
                <Link to="/" className="text-white hover:text-indigo-300">Pacientes</Link>
                <Link to="/login" className="text-white hover:text-indigo-300">Perfil</Link>
                <button 
                    className="bg-indigo-700 hover:bg-indigo-800 text-white font-bold py-2 px-4 rounded-lg"
                    onClick={cerrarSesion}
                    type="button"
                >Cerrar sesión</button>
            </nav>
        </div>
    </header>
    
  )
}
