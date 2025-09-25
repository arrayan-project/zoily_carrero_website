/**
 * Hook para bloquear o desbloquear el scroll del body.
 * Útil para modales y overlays que requieren evitar el scroll de fondo.
 *
 * @module useBodyScrollLock
 * @param {boolean} isLocked - Si es true, bloquea el scroll del body; si es false, lo restaura.
 */
import { useEffect } from "react";

export function useBodyScrollLock(isLocked: boolean) {
  useEffect(() => {
    if (isLocked) {
      const original = document.body.style.overflow;
      document.body.style.overflow = "hidden";
      return () => {
        document.body.style.overflow = original;
      };
    }
  }, [isLocked]);
}