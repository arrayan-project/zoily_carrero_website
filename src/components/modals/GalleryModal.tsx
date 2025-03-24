// GalleryModal.tsx
import React, { useEffect, useRef, useState } from "react";
import { X, ChevronLeft, ChevronRight, ZoomIn, ZoomOut } from "lucide-react";
import SmoothImage from "../smoothImages/SmoothImage";

interface GalleryModalProps {
  selectedImage: string | null;
  closeImage: () => void;
  prevImage: () => void;
  nextImage: () => void;
  isModalTransitioning: boolean;
  handleModalClick: (
    event: React.MouseEvent<HTMLDivElement, MouseEvent>
  ) => void;
  modalContainerRef: React.RefObject<HTMLDivElement>;
  isMobileView: boolean;
}

const GalleryModal: React.FC<GalleryModalProps> = ({
  selectedImage,
  closeImage,
  prevImage,
  nextImage,
  isModalTransitioning,
  handleModalClick,
  modalContainerRef,
  isMobileView,
}) => {
  const modalRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLImageElement>(null);
  const [zoom, setZoom] = useState(1);

  //Navegación con Teclado y Cerrar con ESC en el Modal
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "ArrowLeft") {
        prevImage();
      } else if (event.key === "ArrowRight") {
        nextImage();
      } else if (event.key === "Escape") {
        closeImage();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [prevImage, nextImage, closeImage]);

  const handleZoomIn = () => {
    setZoom((prevZoom) => Math.min(prevZoom + 0.1, 2)); // Limitar el zoom máximo a 2x
  };

  const handleZoomOut = () => {
    setZoom((prevZoom) => Math.max(prevZoom - 0.1, 1)); // Limitar el zoom mínimo a 1x
  };

  const resetZoom = () => {
    setZoom(1);
  };

  useEffect(() => {
    if (imageRef.current) {
      imageRef.current.style.transform = `scale(${zoom})`;
    }
  }, [zoom]);

  return (
    selectedImage && (
      <div
        className="fixed inset-0 bg-black bg-opacity-90 flex items-center justify-center p-4 z-50 overflow-auto" // Mantenemos p-4
        onClick={handleModalClick}
        ref={modalContainerRef}
      >
        <button
          aria-label="Cerrar imagen"
          className="absolute top-4 right-4 text-white focus:outline-none focus:ring-2 focus:ring-pink-500 focus:ring-opacity-50 pointer-events-auto z-10" // Mantenemos pointer-events-auto y z-10
          onClick={closeImage}
        >
          <X size={32} />
        </button>
        <button
          aria-label="Imagen anterior"
          className="absolute left-4 text-white top-1/2 transform -translate-y-1/2 focus:outline-none focus:ring-2 focus:ring-pink-500 focus:ring-opacity-50 pointer-events-auto z-10" // Mantenemos pointer-events-auto y z-10
          onClick={prevImage}
        >
          <ChevronLeft size={40} />
        </button>
        <SmoothImage
          key={selectedImage}
          src={selectedImage}
          alt="Selected"
          className={`object-contain ${isMobileView ? "max-h-[80vh] max-w-[80vw]" : "h-full w-full"} transition-transform duration-300 pointer-events-auto`} // Añadimos las clases condicionales
          isTransitioning={isModalTransitioning}
          fallbackSrc="/img/default-image.png"
          imageRef={imageRef}
          isGridImage={false}
        />
        {!isMobileView && (
          <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2 pointer-events-auto"> {/* Mantenemos pointer-events-auto */}
            <button
              aria-label="Zoom In"
              className="text-white focus:outline-none focus:ring-2 focus:ring-pink-500 focus:ring-opacity-50"
              onClick={handleZoomIn}
            >
              <ZoomIn size={24} />
            </button>
            <button
              aria-label="Zoom Out"
              className="text-white focus:outline-none focus:ring-2 focus:ring-pink-500 focus:ring-opacity-50"
              onClick={handleZoomOut}
            >
              <ZoomOut size={24} />
            </button>
            <button
              aria-label="Reset Zoom"
              className="text-white focus:outline-none focus:ring-2 focus:ring-pink-500 focus:ring-opacity-50"
              onClick={resetZoom}
            >
              <X size={24} />
            </button>
          </div>
        )}
        <button
          aria-label="Imagen siguiente"
          className="absolute right-4 text-white top-1/2 transform -translate-y-1/2 focus:outline-none focus:ring-2 focus:ring-pink-500 focus:ring-opacity-50 pointer-events-auto z-10" // Mantenemos pointer-events-auto y z-10
          onClick={nextImage}
        >
          <ChevronRight size={40} />
        </button>
      </div>
    )
  );
};

export default GalleryModal;
