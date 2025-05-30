/**
 * Hook para animar un contador numérico hasta un valor objetivo.
 * Incrementa el valor mostrado de forma animada durante la duración especificada cuando está activo.
 *
 * @module useCounterAnimation
 * @param {number} target - Valor final al que debe llegar el contador.
 * @param {boolean} isActive - Si es true, inicia la animación del contador.
 * @param {number} [duration=4000] - Duración total de la animación en milisegundos.
 * @returns {number} Valor actual del contador animado.
 */
import { useEffect, useState } from "react";

export function useCounterAnimation(target: number, isActive: boolean, duration = 4000) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isActive) {
      setCount(0);
      return;
    }
    let start = 0;
    const interval = Math.max(10, duration / target);

    const timer = setInterval(() => {
      start += 1;
      setCount(start);
      if (start >= target) clearInterval(timer);
    }, interval);

    return () => clearInterval(timer);
  }, [target, isActive, duration]);

  return count;
}