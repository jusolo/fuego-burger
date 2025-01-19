import React from "react";
import Link from "next/link";

const Footer: React.FC = () => {
  const locations = [
    { name: "Medellin, Antioquia", address: "Calle 26 #43G-30", phone: "+57 3137402083" },
    { name: "Bello, Antioquia", address: "Calle 24 #55-04", phone: "+57 3105396799" },
    { name: "Sabaneta, Antioquia", address: "Sabaneta", phone: "+57 3146676786" },
    { name: "Bogota, Cundinamarca", address: "Carrera 16 #63-69", phone: "+57 3202700938" },
    { name: "Bogota, Cundinamarca", address: "Carrera 86 #22F-18", phone: "+57 3202694642" },
    { name: "Bogota, Cundinamarca", address: "Calle 134 A #50-27", phone: "+57 3202694620" },
  ];

  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-semibold mb-4">Nuestras Sedes</h3>
            <ul className="space-y-2">
              {locations.map((location, index) => (
                <li key={index}>
                  <strong>{location.name}:</strong> {location.address}
                  <br />
                  <strong>Teléfono:</strong> {location.phone}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-4">Políticas</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/politica-privacidad"
                  className="hover:text-red-500 transition"
                >
                  Política de Privacidad
                </Link>
              </li>
              <li>
                <Link
                  href="/politica-cookies"
                  className="hover:text-red-500 transition"
                >
                  Política de Cookies
                </Link>
              </li>
              <li>
                <Link
                  href="/politica-devoluciones"
                  className="hover:text-red-500 transition"
                >
                  Política de Devoluciones
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-4">
              Términos y Condiciones
            </h3>
            <p className="mb-2">
              Al utilizar nuestros servicios, aceptas nuestros términos y
              condiciones.
            </p>
            <Link
              href="/terminos-y-condiciones"
              className="text-red-500 hover:underline"
            >
              Leer Términos y Condiciones
            </Link>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-gray-700 text-center">
          <p>&copy; 2025 Fuego Burguer. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
