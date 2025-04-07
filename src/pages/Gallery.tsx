import React, { useState, useMemo, useRef, useEffect } from "react";
import { useLocation } from "react-router-dom"; // Importamos useLocation
import GalleryTitle from "../components/gallery/GalleryTitle";
import GalleryCategoryMenu from "../components/navigation/GalleryCategoryMenu";
import GalleryImageGrid from "../components/gallery/GalleryImageGrid";
import GalleryModal from "../components/modals/GalleryModal";
import { HOME_LINKS_TITLE_CLASS } from "../constants/styles";
import useGalleryModalTouch from "../hooks/useGalleryModalTouch";
import useWindowSize from "../hooks/useWindowSize";
import { getImagesForCategory } from "../utils/galleryUtils";
import { galleryCategories, galleryTitle } from "../data/galleryData";
import { useTheme } from "../components/context/useThemeHook";
import "../GlobalStyles.css";
import Footer3 from "../components/common/Footer3"; // Importamos el componente Footer

export default function Gallery() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [isGalleryTransitioning, setIsGalleryTransitioning] = useState(false);
  const [isModalTransitioning, setIsModalTransitioning] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const location = useLocation(); // Obtenemos la ubicación actual

  const modalContainerRef = useRef<HTMLDivElement>(null);
  const { isMobileView } = useWindowSize();
  const { colors, theme } = useTheme();
  const currentGalleryImages = useMemo(
    () => getImagesForCategory(selectedCategory),
    [selectedCategory]
  );

  const openImage = (index: number) => {
    try {
      setCurrentIndex(index);
      setSelectedImage(currentGalleryImages[index] ?? null);
    } catch {
      setError("Error al abrir la imagen.");
    }
  };

  const closeImage = () => setSelectedImage(null);

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

  const prevImage = () => navigateImage(-1);
  const nextImage = () => navigateImage(1);

  const handleCategoryClick = (category: string) => {
    setIsGalleryTransitioning(true);
    setSelectedCategory(category);
    setTimeout(() => setIsGalleryTransitioning(false), 500);
  };

  const handleModalClick = (event: React.MouseEvent<HTMLDivElement>) => {
    if (event.target === modalContainerRef.current) closeImage();
  };

  useGalleryModalTouch({ prevImage, nextImage, modalContainerRef });

  // Nuevo useEffect para manejar el scroll al cargar la página
  useEffect(() => {
    const hash = location.hash; // Obtenemos el hash de la URL
    if (hash) {
      const element = document.querySelector(hash); // Buscamos el elemento con el hash como ID
      if (element) {
        element.scrollIntoView({ behavior: "smooth" }); // Hacemos scroll al elemento
      }
    } else {
      window.scrollTo(0, 0); // Si no hay hash, hacemos scroll al inicio de la página
    }
  }, [location.hash]); // Se ejecuta cada vez que cambia el hash

  if (error) return <p className="error-message">{error}</p>;

  return (
    <main
      className={`min-h-screen`}
      style={{ backgroundColor: colors.background, color: colors.text }}
    >
      <section id="gallery" className="mx-auto py-16">
        <GalleryTitle title={galleryTitle} className={HOME_LINKS_TITLE_CLASS} />
        <GalleryCategoryMenu
          {...{
            galleryCategories,
            selectedCategory,
            handleCategoryClick,
            theme,
          }}
        />
        <GalleryImageGrid
          {...{ currentGalleryImages, openImage, isGalleryTransitioning }}
        />
        <GalleryModal
          {...{
            selectedImage,
            closeImage,
            prevImage,
            nextImage,
            isModalTransitioning,
            handleModalClick,
            modalContainerRef,
            isMobileView,
          }}
        />
      </section>
      {isMobileView && <Footer3 />}
    </main>
  );
}
