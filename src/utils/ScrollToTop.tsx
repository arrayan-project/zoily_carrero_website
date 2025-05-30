/**
 * Componente utilitario para hacer scroll al inicio de la página al cambiar de ruta.
 * Si no hay hash en la URL, realiza un scroll suave al top al navegar.
 *
 * @module ScrollToTop
 */
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollToTop = () => {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (!hash) {
      window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
    }
  }, [pathname]);

  return null;
};

export default ScrollToTop;
