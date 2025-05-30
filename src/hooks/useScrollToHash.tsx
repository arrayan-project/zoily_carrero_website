/**
 * Hook para hacer scroll automático al elemento indicado por el hash en la URL.
 * Si no hay hash, hace scroll al inicio de la página.
 *
 * @module useScrollToHash
 */
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const useScrollToHash = () => {
  const location = useLocation();

  useEffect(() => {
    const hash = location.hash;
    if (hash) {
      const element = document.querySelector(hash);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    } else {
      window.scrollTo(0, 0);
    }
  }, [location.hash]);
};

export default useScrollToHash;