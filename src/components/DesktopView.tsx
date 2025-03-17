/*
#### Responsabilidad ####
-  Define las rutas y renderiza las secciones en la vista de escritorio.

#### Componentes que renderiza ####
- MyRoutes.

#### Lógica Clave ####
- MyRoutes: Renderiza las rutas, que son las que renderizan las diferentes secciones.
*/

import React, { useState, useEffect } from 'react';
import MyRoutes from './Routes';

interface ContentDesktopProps {
  onSmoothScroll: (sectionId: string) => void;
}

const ContentDesktop: React.FC<ContentDesktopProps> = ({ onSmoothScroll }: ContentDesktopProps) => {
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    try {
      // Aquí iría el código que podría fallar, como cargar las rutas o hacer una llamada a una API
      // Por ejemplo:
      // const routes = await loadRoutes();
      // Si loadRoutes() falla, se lanzará un error y se capturará en el catch
    } catch (err) {
      setError("Error al cargar las rutas de la aplicación.");
      console.error("Error en ContentDesktop:", err);
    }
  }, []);

  if (error) {
    return (
      <div className="fixed top-0 left-0 w-full h-full flex justify-center items-center bg-red-500 text-white">
        <p>{error}</p>
      </div>
    );
  }

  return <MyRoutes onSmoothScroll={onSmoothScroll} />;
};

export default ContentDesktop;
