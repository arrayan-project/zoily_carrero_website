// src/pages/Gallery.tsx
import React, {
  useState,
  useCallback,
  useEffect,
  useMemo,
  useRef,
} from "react";
import GalleryTitle from "../components/common/GalleryTitle";// Importaciones de componentes
import GalleryCategoryMenu from "../components/navigation/GalleryCategoryMenu";
import GalleryImageGrid from "../components/layout/GalleryImageGrid";
import GalleryModal from "../components/modals/GalleryModal";
import {
  SERVICES_TITLE_CLASS,
  COURSES_TITLE_CLASS,
} from "../constants/styles";
import useGalleryModalTouch from "../hooks/useGalleryModalTouch";// Importaciones de hooks
import useWindowSize from "../hooks/useWindowSize";
import { getImagesForCategory } from "../utils/galleryUtils"; // Importaciones de utilidades
import { getTextColorClass } from "../utils/utils"; // Importaciones de utilidades
import { galleryCategories, galleryTitle } from "../data/galleryData"; // Importaciones de datos
import { useTheme } from "../components/context/useThemeHook";// Importaciones de context
import "../GlobalStyles.css";// Importaciones de estilos

interface ServicesProps {}

export default function Gallery({}: ServicesProps) {
  // Estados del componente
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [isGalleryTransitioning, setIsGalleryTransitioning] = useState(false);
  const [isModalTransitioning, setIsModalTransitioning] = useState(false);

  // Referencia al contenedor del modal
  const modalContainerRef = useRef<HTMLDivElement>(null);

  // Hook personalizado para obtener el tamaño de la ventana
  const { isMobileView } = useWindowSize();

  // Obtener el tema actual
  const { theme } = useTheme();

  // Obtener las imagenes de la categoria seleccionada
  const currentGalleryImages = useMemo(() => {
    return getImagesForCategory(selectedCategory);
  }, [selectedCategory]);

  // Abrir la imagen seleccionada
  const openImage = (index: number) => {
    setCurrentIndex(index);
    setSelectedImage(currentGalleryImages[index] ?? null);
  };

  // Cerrar la imagen seleccionada
  const closeImage = () => {
    setSelectedImage(null);
  };

  // Navegar entre imagenes (anterior y siguiente)
  const navigateImage = (offset: number) => {
    setIsModalTransitioning(true);
    const newIndex =
      (currentIndex + offset + currentGalleryImages.length) %
      currentGalleryImages.length;
    setTimeout(() => {
      setCurrentIndex(newIndex);
      setSelectedImage(currentGalleryImages[newIndex] ?? null);
      setIsModalTransitioning(false);
    }, 500);
  };

  // Imagen siguiente
  const nextImage = () => navigateImage(1);

  // Imagen anterior
  const prevImage = () => navigateImage(-1);

  // Manejar el click en una categoria
  const handleCategoryClick = (categoryValue: string) => {
    setIsGalleryTransitioning(true);
    setSelectedCategory(categoryValue);
    setTimeout(() => {
      setIsGalleryTransitioning(false);
    }, 500);
  };

// Manejar el click fuera del modal
const handleModalClick = (
  event: React.MouseEvent<HTMLDivElement, MouseEvent>
) => {
  if (event.target === modalContainerRef.current) { // Modificación aquí
    closeImage();
  }
};

  // Hook personalizado para el touch en el modal
  useGalleryModalTouch({
    prevImage,
    nextImage,
    modalContainerRef,
  });

  return (
    <div className={`min-h-screen flex flex-col ${getTextColorClass(theme)}`}>
      {/* Banner superior */}

      <main className="flex-grow">
        <div className="mx-auto py-16">
          {/* Titulo de la galeria */}
          <GalleryTitle 
          title={galleryTitle}
          className={SERVICES_TITLE_CLASS}
          />

          {/* Menu de categorias */}
          <GalleryCategoryMenu
            galleryCategories={galleryCategories}
            selectedCategory={selectedCategory}
            handleCategoryClick={handleCategoryClick}
            theme={theme}
          />

          {/* Cuadricula de imagenes */}
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
