import React from "react";

const Footer = () => {
  return (
    <footer className="bg-blue-600 text-white py-6">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          {/* Logo o Nombre */}
          <div className="text-xl font-bold">VetClinic</div>

          {/* Enlaces rápidos */}
          <div className="flex space-x-4 mt-4 md:mt-0">
            <a
              href="#about"
              className="hover:underline hover:text-blue-300 transition duration-300"
            >
              Acerca de
            </a>
            <a
              href="#services"
              className="hover:underline hover:text-blue-300 transition duration-300"
            >
              Servicios
            </a>
            <a
              href="#contact"
              className="hover:underline hover:text-blue-300 transition duration-300"
            >
              Contacto
            </a>
          </div>

          {/* Derechos reservados */}
          <div className="mt-4 md:mt-0 text-sm">
            © {new Date().getFullYear()} VetClinic. Todos los derechos reservados.
          </div>
        </div>

        {/* Redes sociales */}
        <div className="mt-6 flex justify-center space-x-6">
          <a
            href="#facebook"
            className="hover:text-blue-300 transition duration-300"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M22.676 0H1.324C.594 0 0 .594 0 1.324v21.352C0 23.406.594 24 1.324 24h11.495v-9.294H9.572V10.41h3.247V7.902c0-3.227 1.971-4.986 4.847-4.986 1.376 0 2.559.102 2.903.148v3.37h-1.992c-1.564 0-1.866.743-1.866 1.832v2.404h3.734l-.487 3.296h-3.247V24h6.375c.73 0 1.324-.594 1.324-1.324V1.324C24 .594 23.406 0 22.676 0z" />
            </svg>
          </a>
          <a
            href="#twitter"
            className="hover:text-blue-300 transition duration-300"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M24 4.557a9.847 9.847 0 01-2.828.775 4.93 4.93 0 002.165-2.724 9.865 9.865 0 01-3.127 1.195 4.916 4.916 0 00-8.384 4.482A13.934 13.934 0 011.671 3.149a4.917 4.917 0 001.523 6.555A4.896 4.896 0 01.96 9.39v.062a4.917 4.917 0 003.946 4.827 4.9 4.9 0 01-2.212.084 4.918 4.918 0 004.604 3.417 9.867 9.867 0 01-6.1 2.102c-.396 0-.788-.023-1.175-.069a13.947 13.947 0 007.557 2.212c9.057 0 14.01-7.505 14.01-14.01 0-.213-.005-.426-.014-.637A10.025 10.025 0 0024 4.557z" />
            </svg>
          </a>
          <a
            href="#instagram"
            className="hover:text-blue-300 transition duration-300"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 1.206.056 1.998.24 2.457.405.525.184.902.405 1.296.798.393.394.614.771.798 1.296.165.459.349 1.251.405 2.457.058 1.266.07 1.646.07 4.85s-.012 3.584-.07 4.85c-.056 1.206-.24 1.998-.405 2.457-.184.525-.405.902-.798 1.296-.394.393-.771.614-1.296.798-.459.165-1.251.349-2.457.405-1.266.058-1.646.07-4.85.07s-3.584-.012-4.85-.07c-1.206-.056-1.998-.24-2.457-.405-.525-.184-.902-.405-1.296-.798-.393-.394-.614-.771-.798-1.296-.165-.459-.349-1.251-.405-2.457-.058-1.266-.07-1.646-.07-4.85s.012-3.584.07-4.85c.056-1.206.24-1.998.405-2.457.184-.525.405-.902.798-1.296.394-.393.771-.614 1.296-.798.459-.165 1.251-.349 2.457-.405 1.266-.058 1.646-.07 4.85-.07zm0-2.163c-3.259 0-3.67.014-4.947.072-1.26.058-2.13.25-2.882.532a6.478 6.478 0 00-2.334 1.524A6.478 6.478 0 00.798 4.63c-.282.751-.474 1.621-.532 2.882C.14 8.784.126 9.195.126 12.454c0 3.259.014 3.67.072 4.947.058 1.26.25 2.13.532 2.882a6.478 6.478 0 001.524 2.334 6.478 6.478 0 002.334 1.524c.751.282 1.621.474 2.882.532 1.277.058 1.688.072 4.947.072s3.67-.014 4.947-.072c1.26-.058 2.13-.25 2.882-.532a6.478 6.478 0 002.334-1.524 6.478 6.478 0 001.524-2.334c.282-.751.474-1.621.532-2.882.058-1.277.072-1.688.072-4.947s-.014-3.67-.072-4.947c-.058-1.26-.25-2.13-.532-2.882a6.478 6.478 0 00-1.524-2.334 6.478 6.478 0 00-2.334-1.524c-.751-.282-1.621-.474-2.882-.532C15.67.014 15.259 0 12 0z" />
              <circle cx="12" cy="12" r="3.5" />
            </svg>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
