// src/components/layout/DesktopView.tsx
import React, { useState, useEffect } from 'react';
import MyRoutes from '../../Routes';

interface ContentDesktopProps {
  onSmoothScroll: (sectionId: string) => void;
  isMobileView: boolean;

}

const ContentDesktop: React.FC<ContentDesktopProps> = ({ onSmoothScroll, isMobileView }: ContentDesktopProps) => {
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    try {
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

  return <MyRoutes onSmoothScroll={onSmoothScroll} isMobileView={isMobileView}/>;
};

export default ContentDesktop;
