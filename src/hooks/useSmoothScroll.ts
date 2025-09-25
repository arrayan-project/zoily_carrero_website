import { useEffect } from 'react';
import Lenis from '@studio-freight/lenis';

/**
 * Hook personalizado para implementar un scroll suave en toda la aplicación usando la librería Lenis.
 *
 * Este hook inicializa una instancia de Lenis y la actualiza en cada frame de animación,
 * proporcionando un efecto de desplazamiento fluido. Se encarga automáticamente de la limpieza
 * al desmontar el componente para evitar fugas de memoria.
 */
export function useSmoothScroll() {
  useEffect(() => {
    // Inicializa Lenis con algunas opciones de configuración para un efecto agradable.
    const lenis = new Lenis({
      duration: 1.8, // Duración de la animación de scroll
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // Función de easing para la animación
    });

    // Función que se ejecuta en cada frame para actualizar el scroll de Lenis.
    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    // Función de limpieza para destruir la instancia de Lenis cuando el componente se desmonte.
    return () => lenis.destroy();
  }, []);
}

