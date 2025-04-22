import React, { useState, useMemo, useRef, useEffect } from "react";
import { useLocation } from "react-router-dom";
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
import Footer3 from "../components/common/Footer3";
import { Helmet } from 'react-helmet-async'; // <--- Importa Helmet

export default function Gallery() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [isGalleryTransitioning, setIsGalleryTransitioning] = useState(false);
  const [isModalTransitioning, setIsModalTransitioning] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const location = useLocation();

  const modalContainerRef = useRef<HTMLDivElement>(null);
  const { isMobileView } = useWindowSize();
  const { colors, theme } = useTheme();
  const currentGalleryImages = useMemo(
    () => getImagesForCategory(selectedCategory),
    [selectedCategory]
  );

  // ... (resto de funciones y lógica) ...
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

  useEffect(() => {
    const hash = location.hash;
    if (hash) {
      const element = document.querySelector(hash);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    } else {
      window.scrollTo(0, 0);
    }
  }, [location.hash]);

  if (error) return <p className="error-message">{error}</p>;

  return (
    <main
      className={`min-h-screen`}
      style={{ backgroundColor: colors.background, color: colors.text }}
    >
      <Helmet>
        <title>Galería de Maquillaje Profesional | Zoily Carrero MakeUp</title>
        <meta
          name="description"
          content="Explora la galería de Zoily Carrero MakeUp. Descubre transformaciones impactantes, looks de novia, social y más. ¡Inspírate para tu próximo evento!"
        />
      </Helmet>

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
