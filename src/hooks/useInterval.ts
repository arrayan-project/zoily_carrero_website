/**
 * Hook para ejecutar un callback a intervalos regulares.
 * Permite pausar y reanudar el intervalo dinámicamente.
 *
 * @module useInterval
 * @param {() => void} callback - Función a ejecutar en cada intervalo.
 * @param {number} delay - Duración del intervalo en milisegundos.
 * @param {boolean} [pause=false] - Si es true, pausa la ejecución del intervalo.
 */
import { useEffect, useRef } from "react";

export function useInterval(callback: () => void, delay: number, pause = false) {
  const savedCallback = useRef(callback);

  useEffect(() => {
    savedCallback.current = callback;
  }, [callback]);

  useEffect(() => {
    if (pause) return;
    const id = setInterval(() => savedCallback.current(), delay);
    return () => clearInterval(id);
  }, [delay, pause]);
}