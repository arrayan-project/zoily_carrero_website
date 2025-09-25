/**
 * Hook para detectar si el scroll ha superado un umbral dado.
 * Útil para mostrar u ocultar elementos según la posición de scroll (por ejemplo, una barra de navegación sticky).
 *
 * @module useScrollVisibility
 * @param {number} [threshold=200] - Umbral de scroll en píxeles para activar la visibilidad.
 * @returns {boolean} true si el scroll supera el umbral, false en caso contrario.
 */
import { useEffect, useState } from "react";

export function useScrollVisibility(threshold = 200) {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > threshold);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, [threshold]);

  return visible;
}