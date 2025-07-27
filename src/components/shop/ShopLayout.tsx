/**
 * Componente de diseño para la página de la tienda.
 * Organiza una barra lateral y un área de contenido principal.
 *
 * @param {object} props - Propiedades del componente.
 * @param {React.ReactNode} props.sidebar - El componente de la barra lateral.
 * @param {React.ReactNode} props.children - El contenido principal a mostrar.
 * @returns {JSX.Element} El layout de la tienda renderizado.
 */
import React from 'react';

interface ShopLayoutProps {
  sidebar: React.ReactNode;
  children: React.ReactNode;
}

const ShopLayout: React.FC<ShopLayoutProps> = ({ sidebar, children }) => {
  return (
    <div className="flex flex-col md:flex-row mt-12">
      <div className="w-full md:w-1/4 mb-8 md:mb-0">{sidebar}</div>
      <div className="w-full md:w-3/4">{children}</div>
    </div>
  );
};

export default ShopLayout;