import { BrowserRouter, Routes, Route } from 'react-router-dom'
import AuthLayout from './layout/AuthLayout'
import RutaProtegida from './layout/RutaProtegida'
import Login from './pages/Login'
import Registrar from './pages/Registrar'
import OlvidePassword from './pages/OlvidePassword'
import ConfimarCuenta from './pages/ConfimarCuenta'
import Navbar from './components/Navbar'
import NuevoPassword from './pages/NuevoPassword'
import AdministrarPacientes from './pages/AdministrarPacientes'
import Footer from './components/Footer'


import NavBarAdmin from './layout/NavBarAdmin'

import { AuthProvider } from './context/AuthProvider'
import { PacientesProvider } from './context/PacientesProvider'

function App() {


  return (
    <BrowserRouter>
      <AuthProvider>
        <Navbar />
        <PacientesProvider>
          <Routes>
            <Route path="/" element={<AuthLayout />}>
              <Route index element={<Login />} />
              <Route path="registrar" element={<Registrar />} />
              <Route path="olvide-password" element={<OlvidePassword />} />
              <Route path="olvide-password/:token" element={<NuevoPassword />} />
              <Route path="confirmar/:token" element={<ConfimarCuenta />} />
            </Route>

            <Route path="/admin" element={<RutaProtegida />}>
              <Route index element={<NavBarAdmin />} />
              <Route index element={<AdministrarPacientes />} />
            </Route>

            <Route path="*" element={<div>Not Found</div>} />
          </Routes>
        </PacientesProvider>
      </AuthProvider>
    </BrowserRouter>
  );
}

export default App
