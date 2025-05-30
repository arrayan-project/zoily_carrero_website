/**
 * Hook para revelar un elemento al hacer scroll.
 * Usa IntersectionObserver para detectar cuándo el elemento entra en el viewport y activa la visibilidad.
 *
 * @module useRevealOnScroll
 * @param {RevealOptions} [options] - Opciones para el observer (threshold, rootMargin).
 * @returns {{ ref: React.RefObject<T>, isVisible: boolean }} Ref para el elemento y estado de visibilidad.
 */
import { useEffect, useRef, useState } from "react";

interface RevealOptions {
  threshold?: number;
  rootMargin?: string;
}

export function useRevealOnScroll<T extends HTMLElement = HTMLDivElement>(
  options: RevealOptions = {}
) {
  const { threshold = 0.15, rootMargin = "0px" } = options;
  const ref = useRef<T | null>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (!ref.current) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true);
      },
      { threshold, rootMargin }
    );
    observer.observe(ref.current);

    return () => {
      if (ref.current) observer.unobserve(ref.current);
    };
  }, [threshold, rootMargin]);

  return { ref, isVisible };
}