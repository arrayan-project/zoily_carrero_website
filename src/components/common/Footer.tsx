/*
##### Función #####
- Este componente representa el pie de página (footer) de la aplicación. 
- Muestra el nombre de la empresa, el copyright y los enlaces a las redes sociales.
##### Componentes que utiliza #####
- lucide-react: Utiliza Instagram, Facebook y Twitter de esta librería para los iconos de redes sociales.

##### Componentes que lo usan #####
- AppWrapper.tsx: Este es el único componente que importa y renderiza Footer.
*/

// Footer.tsx
import React, { useState } from 'react';
import { Twitter, Instagram, Facebook} from 'lucide-react';

const Footer: React.FC = () => {
  const [error] = useState<string | null>(null);
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      href: "https://www.instagram.com/", // Reemplaza con la URL real
      icon: Instagram,
      label: "Instagram",
    },
    {
      href: "https://www.facebook.com/", // Reemplaza con la URL real
      icon: Facebook,
      label: "Facebook",
    },
    {
      href: "https://www.twitter.com/", // Reemplaza con la URL real
      icon: Twitter,
      label: "Twitter",
    },
  ];

  if (error) {
    return (
      <div className="fixed top-0 left-0 w-full h-full flex justify-center items-center bg-red-500 text-white">
        <p>{error}</p>
      </div>
    );
  }

  return (
    <footer className="bg-gray-800 text-gray-200 py-32">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0 text-center md:text-left">
            <h1 className="text-xl font-bold">ZoilyCarrero MakeUp</h1>
            <p className="text-sm">© {currentYear} MiEmpresa. Todos los derechos reservados.</p>
          </div>

          <div className="space-y-4">
            <h3 className="text-xl font-semibold text-white">Conecta con Nosotros</h3>
            <div className="flex space-x-4">
              {socialLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.href}
                  className="hover:text-white transition-colors"
                  aria-label={link.label}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <link.icon size={24} />
                </a>
              ))}
            </div>
          </div>
        </div>

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
