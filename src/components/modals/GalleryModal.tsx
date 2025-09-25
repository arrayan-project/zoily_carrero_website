/**
 * Modal para visualizar imágenes de la galería en pantalla completa.
 * Permite navegar, hacer zoom y cerrar con accesibilidad y animaciones.
 *
 * @component
 * @param {GalleryModalProps} props - Props del modal de galería, incluyendo la imagen seleccionada, callbacks de navegación y referencia del contenedor.
 * @returns {JSX.Element}
 */
import React, { useEffect, useState, useRef } from "react";
import {
  X,
  ChevronLeft,
  ChevronRight,
  ZoomIn,
  ZoomOut,
} from "../../assets/icons";
import { getImageObject } from "../../utils/getImageObject";
import { useModalAccessibility } from "../../hooks/useModalAccessibility";
import { useBodyScrollLock } from "../../hooks/useBodyScrollLock";
import useSwipeNavigation from "../../hooks/useSwipeNavigation"; // Importar el hook


interface GalleryModalProps {
  selectedImage: string;
  closeImage: () => void;
  prevImage: () => void;
  nextImage: () => void;
  isModalTransitioning: boolean;
  modalContainerRef: React.RefObject<HTMLDivElement>;
  isMobileView?: boolean;
}

const GalleryModal: React.FC<GalleryModalProps> = ({
  selectedImage,
  closeImage,
  prevImage,
  nextImage,
  modalContainerRef,
  isMobileView = false,
}) => {
  const [zoom, setZoom] = useState(1);
  const [isClosing, setIsClosing] = useState(false);

  // NUEVO: refs para accesibilidad
  const closeButtonRef = useRef<HTMLButtonElement>(null);
  const openerRef = useRef<HTMLElement | null>(null);

  // NUEVO: guardar el opener y restaurar foco al cerrar
  useEffect(() => {
    openerRef.current = document.activeElement as HTMLElement;
    // Foco inicial en el botón de cerrar
    closeButtonRef.current?.focus();
    return () => {
      openerRef.current?.focus();
    };
  }, []);

  // NUEVO: para transición entre imágenes
  const [displayedImage, setDisplayedImage] = useState(selectedImage);
  const [isImageVisible, setIsImageVisible] = useState(true);

  const triggerClose = () => {
    setIsClosing(true);
    setTimeout(() => {
      closeImage();
      setIsClosing(false);
    }, 300);
  };

  // Transición entre imágenes (fade)
  useEffect(() => {
    if (selectedImage === displayedImage) return;
    setIsImageVisible(false); // fade out actual
    const timeout = setTimeout(() => {
      setDisplayedImage(selectedImage); // cambio de imagen
      setIsImageVisible(true); // fade in nueva
    }, 200); // duración del fade-out
    return () => clearTimeout(timeout);
  }, [selectedImage, displayedImage]);

  useBodyScrollLock(true);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") prevImage();
      if (e.key === "ArrowRight") nextImage();
    };

    const handleTabTrap = (e: KeyboardEvent) => {
      if (e.key !== "Tab") return;
      const modal = modalContainerRef.current;
      if (!modal) return;

      const focusable = modal.querySelectorAll<HTMLElement>(
        'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
      );
      const first = focusable[0];
      const last = focusable[focusable.length - 1];

      if (e.shiftKey && document.activeElement === first) {
        e.preventDefault();
        last.focus();
      } else if (!e.shiftKey && document.activeElement === last) {
        e.preventDefault();
        first.focus();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    window.addEventListener("keydown", handleTabTrap);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      window.removeEventListener("keydown", handleTabTrap);
    };
  }, [prevImage, nextImage, modalContainerRef]);

  useModalAccessibility(true, triggerClose, modalContainerRef);

// Usar el hook de swipe para el modal de galería
  useSwipeNavigation({
    targetRef: modalContainerRef,
    onSwipeLeft: nextImage,  // Swipe a la izquierda -> Siguiente imagen
    onSwipeRight: prevImage, // Swipe a la derecha -> Imagen anterior
    isEnabled: true,         // Siempre habilitado si el modal está abierto
  });

  const handleOverlayClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (modalContainerRef.current && e.target === modalContainerRef.current) {
      triggerClose();
    }
  };

  return (
    <div
      ref={modalContainerRef}
      onClick={handleOverlayClick}
      className={`fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-sm ${
        isClosing ? "modal-fade-out" : "modal-animation"
      }`}
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
      aria-describedby="modal-image"
    >
      <button
        ref={closeButtonRef}
        onClick={(e) => {
          e.stopPropagation();
          triggerClose();
        }}
        className="absolute top-4 right-4 text-white hover:text-red-500 z-50"
        aria-label="Cerrar galería"
      >
        <X size={32} />
      </button>

      {!isMobileView && (
        <>
          <button
            onClick={(e) => {
              e.stopPropagation();
              prevImage();
            }}
            className="absolute left-4 text-white hover:text-pink-400 z-50"
            aria-label="Imagen anterior"
          >
            <ChevronLeft size={40} />
          </button>
          <button
            onClick={(e) => {
              e.stopPropagation();
              nextImage();
            }}
            className="absolute right-4 text-white hover:text-pink-400 z-50"
            aria-label="Siguiente imagen"
          >
            <ChevronRight size={40} />
          </button>
        </>
      )}

      <div
        className="relative flex items-center justify-center max-w-full max-h-full modal-animation"
        onClick={(e) => e.stopPropagation()}
      >
        <h2 id="modal-title" className="sr-only">
          Vista ampliada de imagen
        </h2>
        <img
          id="modal-image"
          src={getImageObject(displayedImage)?.webp}
          alt="Imagen seleccionada de galería"
          loading="lazy"
          key={displayedImage}
          className={`object-contain h-auto max-h-[90vh] w-auto max-w-[95vw] transition-transform duration-300 modal-image-fade ${
            isImageVisible ? "visible" : ""
          }`}
          style={{ transform: `scale(${zoom})` }}
        />

        <div className="absolute bottom-8 flex gap-4 z-40">
          <button
            onClick={() => setZoom((z) => Math.max(1, z - 0.2))}
            className="text-white hover:text-pink-400"
            aria-label="Alejar imagen"
          >
            <ZoomOut size={28} />
          </button>
          <button
            onClick={() => setZoom((z) => Math.min(2, z + 0.2))}
            className="text-white hover:text-pink-400"
            aria-label="Acercar imagen"
          >
            <ZoomIn size={28} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default GalleryModal;
