import { useState } from "react";

export default function Navbar() {

  const [isOpen, setIsOpen] = useState(false);
  return (
    <nav className="bg-blue-600 shadow-md">
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        {/* Logo */}
        <div className="text-white text-2xl font-bold">VetClinic</div>

        {/* Hamburger Menu */}
        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-white focus:outline-none"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
              />
            </svg>
          </button>
        </div>

        {/* Menu Items */}
        <div
          className={`${
            isOpen ? "block" : "hidden"
          } w-full md:flex md:items-center md:justify-end md:space-x-6`}
        >
          <a
            href="#dashboard"
            className="block text-white px-3 py-2 rounded-md hover:bg-blue-700 transition duration-300"
          >
            Dashboard
          </a>
          <a
            href="#patients"
            className="block text-white px-3 py-2 rounded-md hover:bg-blue-700 transition duration-300"
          >
            Pacientes
          </a>
          <a
            href="#appointments"
            className="block text-white px-3 py-2 rounded-md hover:bg-blue-700 transition duration-300"
          >
            Citas
          </a>
          <a
            href="#profile"
            className="block text-white px-3 py-2 rounded-md hover:bg-blue-700 transition duration-300"
          >
            Perfil
          </a>
        </div>
      </div>
    </nav>
  );
};