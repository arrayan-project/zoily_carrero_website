import React, { useState, useEffect } from 'react';
import './ScrollTopButton.css'; // Importa el archivo CSS para estilos

const ScrollToTopButton = () => {
  // Estado para controlar si el botón debe ser visible
  const [isVisible, setIsVisible] = useState(false);

  // Efecto para añadir y quitar el listener del evento scroll al montar y desmontar el componente
  useEffect(() => {
    const handleScroll = () => {
      // Determina la posición vertical de scroll
      const scrollTop = window.pageYOffset;
      // Define a partir de qué punto de scroll debe aparecer el botón (ej: 300px)
      if (scrollTop > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    // Añade el listener del evento scroll al window
    window.addEventListener('scroll', handleScroll);

    // Función de limpieza que se ejecuta al desmontar el componente
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []); // El array vacío asegura que este efecto se ejecute solo al montar y desmontar

  const scrollToTop = () => {
    // Función para realizar el scroll suave hacia la parte superior
    window.scrollTo({
      top: 0,
      behavior: 'smooth' // 'smooth' para una animación de scroll suave
    });
  };

  // Renderiza el botón solo si isVisible es true
  if (!isVisible) {
    return null; // No renderiza nada si no debe ser visible
  }

  return (
    <button
      onClick={scrollToTop}
      className="scroll-to-top-button" // Clase CSS para aplicar estilos
    >
      ▲ {/* Puedes usar un icono o texto diferente aquí */}
    </button>
  );
};

export default ScrollToTopButton;