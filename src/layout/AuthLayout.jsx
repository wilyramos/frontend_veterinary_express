import { Outlet } from "react-router-dom";

export default function AuthLayout() {
  return (
    <>
        <h1>Administrador </h1>

        <main className="container mx-auto md:grid md:grid-cols-2 mt-10 gap-24 items-center">

        <Outlet />

        </main>

        <h1>Footer</h1>
    </>
  )
}
