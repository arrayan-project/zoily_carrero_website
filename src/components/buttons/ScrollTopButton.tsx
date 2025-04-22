/*
#### Responsabilidad ####
-  Implementa el botón "Scroll to Top" que aparece cuando el usuario ha 
hecho scroll hacia abajo y permite volver al inicio de la página
*/

import { useState, useEffect } from 'react';
import './ScrollTopButton.css'; // Importa el archivo CSS para estilos
import throttle from 'lodash/throttle';

const ScrollToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = throttle(() => {
      const scrollTop = window.pageYOffset;
      setIsVisible(scrollTop > 300);
    }, 250);

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      handleScroll.cancel();
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  if (!isVisible) {
    return null;
  }

  return (
    <button
      type="button"
      onClick={scrollToTop}
      className={` scroll-to-top-button `}
      aria-label="Volver arriba" // Añadir un aria-label es bueno para accesibilidad
    >
      ▲
    </button>
  );
};

export default ScrollToTopButton;