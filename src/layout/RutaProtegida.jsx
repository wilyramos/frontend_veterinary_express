import { Outlet, Navigate } from "react-router-dom"
import useAuth from "../hooks/useAuth"

import Header from "../components/Header";
import Footer from "../components/Footer";
import AdministrarPacientes from "../pages/AdministrarPacientes";


// EN esta seccion redirigir si es admin o no


export default function RutaProtegida() {
    const { auth, cargando } = useAuth();
    if (cargando) return <div>Cargando...</div>
    return (
        <>
            <Header />
            {auth?._id ?
                (
                    <main className="container mx-auto mt-10">
                        <Outlet />
                    </main>
                ) : <Navigate to="/" />
            }
            {/* <AdministrarPacientes /> */}
            
            <Footer />
        </>
    )
}
