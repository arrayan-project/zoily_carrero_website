/**
 * Hook para manejar gestos táctiles (swipe) en el modal de galería.
 * Permite navegar entre imágenes detectando deslizamientos horizontales en dispositivos táctiles.
 *
 * @module useGalleryModalTouch
 * @param {() => void} prevImage - Callback para mostrar la imagen anterior.
 * @param {() => void} nextImage - Callback para mostrar la siguiente imagen.
 * @param {React.RefObject<HTMLDivElement>} modalContainerRef - Referencia al contenedor del modal.
 */
import { useState, useEffect } from 'react';

interface UseGalleryModalTouchProps {
  prevImage: () => void;
  nextImage: () => void;
  modalContainerRef: React.RefObject<HTMLDivElement>;
}

const SWIPE_THRESHOLD = 50;

const useGalleryModalTouch = ({
  prevImage,
  nextImage,
  modalContainerRef,
}: UseGalleryModalTouchProps) => {
  const [startX, setStartX] = useState(0);
  const [currentX, setCurrentX] = useState(0);
  const [isDragging, setIsDragging] = useState(false);

  const handleModalTouchStart = (e: TouchEvent) => {
    setStartX(e.touches[0].clientX);
    setIsDragging(true);
  };

  const handleModalTouchMove = (e: TouchEvent) => {
    if (!isDragging) return;
    setCurrentX(e.touches[0].clientX);
    const diff = currentX - startX;
    if (Math.abs(diff) > SWIPE_THRESHOLD) {
      if (diff > 0) {
        prevImage();
      } else {
        nextImage();
      }
      setStartX(currentX);
    }
  };

  const handleModalTouchEnd = () => {
    setIsDragging(false);
  };

  useEffect(() => {
    const container = modalContainerRef.current;

    if (container) {
      container.addEventListener("touchstart", handleModalTouchStart);
      container.addEventListener("touchmove", handleModalTouchMove);
      container.addEventListener("touchend", handleModalTouchEnd);
    }

    return () => {
      if (container) {
        container.removeEventListener("touchstart", handleModalTouchStart);
        container.removeEventListener("touchmove", handleModalTouchMove);
        container.removeEventListener("touchend", handleModalTouchEnd);
      }
    };
  }, [isDragging, currentX, startX, prevImage, nextImage]); // Eliminamos isMobileView y agregamos prevImage y nextImage

  return {};
};

export default useGalleryModalTouch;
