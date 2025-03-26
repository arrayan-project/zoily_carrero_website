// src/pages/Gallery.tsx
import React, {
  useState,
  useCallback,
  useEffect,
  useMemo,
  useRef,
} from "react";
import GalleryTitle from "../components/common/GalleryTitle"; // Importaciones de componentes
import GalleryCategoryMenu from "../components/navigation/GalleryCategoryMenu";
import GalleryImageGrid from "../components/layout/GalleryImageGrid";
import GalleryModal from "../components/modals/GalleryModal";
import {
  SERVICES_TITLE_CLASS,
  COURSES_TITLE_CLASS,
} from "../constants/styles";
import useGalleryModalTouch from "../hooks/useGalleryModalTouch"; // Importaciones de hooks
import useWindowSize from "../hooks/useWindowSize";
import { getImagesForCategory } from "../utils/galleryUtils"; // Importaciones de utilidades
import { getTextColorClass } from "../utils/utils"; // Importaciones de utilidades
import { galleryCategories, galleryTitle } from "../data/galleryData"; // Importaciones de datos
import { useTheme } from "../components/context/useThemeHook"; // Importaciones de context
import "../GlobalStyles.css"; // Importaciones de estilos

interface ServicesProps {}

export default function Gallery({}: ServicesProps) {
  // Estados del componente
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [isGalleryTransitioning, setIsGalleryTransitioning] = useState(false);
  const [isModalTransitioning, setIsModalTransitioning] = useState(false);
  const [error, setError] = useState<string | null>(null); // Estado para manejo de errores

  // Referencia al contenedor del modal
  const modalContainerRef = useRef<HTMLDivElement>(null);

  // Hook personalizado para obtener el tamaño de la ventana
  const { isMobileView } = useWindowSize();

  // Obtener el tema actual
  const { theme } = useTheme();

  // Obtener las imágenes de la categoría seleccionada
  const currentGalleryImages = useMemo(() => {
    return getImagesForCategory(selectedCategory);
  }, [selectedCategory]);

  // Función para abrir la imagen seleccionada
  const openImage = (index: number) => {
    try {
      setCurrentIndex(index);
      setSelectedImage(currentGalleryImages[index] ?? null);
    } catch (err) {
      setError("Error al abrir la imagen.");
      console.error("Error en openImage:", err);
    }
  };

  // Función para cerrar la imagen seleccionada
  const closeImage = () => {
    try {
      setSelectedImage(null);
    } catch (err) {
      setError("Error al cerrar la imagen.");
      console.error("Error en closeImage:", err);
    }
  };

  // Función para navegar entre imágenes (anterior y siguiente)
  const navigateImage = (offset: number) => {
    try {
      setIsModalTransitioning(true);
      const newIndex =
        (currentIndex + offset + currentGalleryImages.length) %
        currentGalleryImages.length;
      setTimeout(() => {
        setCurrentIndex(newIndex);
        setSelectedImage(currentGalleryImages[newIndex] ?? null);
        setIsModalTransitioning(false);
      }, 500);
    } catch (err) {
      setError("Error al navegar entre las imágenes.");
      console.error("Error en navigateImage:", err);
    }
  };

  // Imagen siguiente
  const nextImage = () => navigateImage(1);

  // Imagen anterior
  const prevImage = () => navigateImage(-1);

  // Manejar el click en una categoría
  const handleCategoryClick = (categoryValue: string) => {
    try {
      setIsGalleryTransitioning(true);
      setSelectedCategory(categoryValue);
      setTimeout(() => {
        setIsGalleryTransitioning(false);
      }, 500);
    } catch (err) {
      setError("Error al seleccionar la categoría.");
      console.error("Error en handleCategoryClick:", err);
    }
  };

  // Manejar el click fuera del modal
  const handleModalClick = (
    event: React.MouseEvent<HTMLDivElement, MouseEvent>
  ) => {
    if (event.target === modalContainerRef.current) {
      closeImage();
    }
  };

  // Hook personalizado para el touch en el modal
  useGalleryModalTouch({
    prevImage,
    nextImage,
    modalContainerRef,
  });

  // Si hay un error, mostramos el mensaje de error
  if (error) {
    return <div className="error-message">{error}</div>;
  }

  return (
    <div className={`min-h-screen flex flex-col ${getTextColorClass(theme)}`}>
      {/* Banner superior */}
      <main className="flex-grow">
        <div id="gallery" className="mx-auto py-16">
          {/* Título de la galería */}
          <GalleryTitle title={galleryTitle} className={SERVICES_TITLE_CLASS} />

          {/* Menú de categorías */}
          <GalleryCategoryMenu
            galleryCategories={galleryCategories}
            selectedCategory={selectedCategory}
            handleCategoryClick={handleCategoryClick}
            theme={theme}
          />

          {/* Cuadrícula de imágenes */}
          <GalleryImageGrid
            currentGalleryImages={currentGalleryImages}
            openImage={openImage}
            isGalleryTransitioning={isGalleryTransitioning}
          />

          {/* Modal de imagen */}
          <GalleryModal
            selectedImage={selectedImage}
            closeImage={closeImage}
            prevImage={prevImage}
            nextImage={nextImage}
            isModalTransitioning={isModalTransitioning}
            handleModalClick={handleModalClick}
            modalContainerRef={modalContainerRef}
            isMobileView={isMobileView}
          />
        </div>
      </main>
    </div>
  );
}
