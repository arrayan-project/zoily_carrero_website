/**
 * Hook para mejorar la accesibilidad de los modales.
 * Permite cerrar el modal con Escape y clic fuera del contenedor.
 *
 * @module useModalAccessibility
 * @param {boolean} isOpen - Indica si el modal está abierto.
 * @param {(event?: MouseEvent | KeyboardEvent) => void} onClose - Callback para cerrar el modal, puede recibir el evento.
 * @param {React.RefObject<HTMLElement>} modalRef - Referencia al contenedor del modal.
 */
import { useEffect } from "react";

export function useModalAccessibility(
  isOpen: boolean,
  onClose: (event?: MouseEvent | KeyboardEvent) => void,
  modalRef: React.RefObject<HTMLElement>
) {
  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
            if (e.key === "Escape") {
        onClose(e); // Pasar el evento del teclado
      }
    };

    const handleClickOutside = (e: MouseEvent) => {
      if (modalRef.current && !modalRef.current.contains(e.target as Node)) {
        onClose(e);
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen, onClose, modalRef]);
}