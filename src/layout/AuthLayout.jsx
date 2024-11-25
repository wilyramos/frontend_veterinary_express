import { Outlet } from "react-router-dom";
import AdministrarPacientes from "../pages/AdministrarPacientes";
import Footer from "../components/Footer";

export default function AuthLayout() {
  return (
    <>
        <h1>Administradodasdasr </h1>

        <main className="container mx-auto md:grid md:grid-cols-2 mt-10 gap-24 items-center">
        
        <Outlet />       

        </main>

        <Footer />
    </>
  )
}
