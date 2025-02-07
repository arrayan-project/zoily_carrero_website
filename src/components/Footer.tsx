import React from 'react';
import { Github, Twitter, Linkedin, Heart, Instagram, Facebook} from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-800 text-gray-200 py-32">
      <div className="container mx-auto px-4">
        {/* Contenedor principal: se organiza en columna en móvil y en fila en pantallas medianas hacia arriba */}
        <div className="flex flex-col md:flex-row justify-between items-center">
          
          {/* Sección de logo o nombre de la empresa */}
          <div className="mb-4 md:mb-0 text-center md:text-left">
            <h1 className="text-xl font-bold">ZoilyCarrero MakeUp</h1>
            <p className="text-sm">© 2025 MiEmpresa. Todos los derechos reservados.</p>
          </div>

          {/* Social Links */}
          <div className="space-y-4">
            <h3 className="text-xl font-semibold text-white">Conecta con Nosotros</h3>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-white transition-colors">
                <Instagram size={24} />
              </a>
              <a href="#" className="hover:text-white transition-colors">
                <Facebook size={24} />
              </a>
              <a href="#" className="hover:text-white transition-colors">
                <Twitter size={24} />
              </a>
            </div>
          </div>
        </div>

        {/* Sección adicional para redes sociales o información extra */}
        <div className="mt-6 text-center">
          <p className="text-xs">
            Desarrollado con ♥ por <a href="#" className="hover:underline">ZoilyCarrero</a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;