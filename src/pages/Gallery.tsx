import React, { useState, useMemo, useRef } from "react";
import GalleryTitle from "../components/common/GalleryTitle";
import GalleryCategoryMenu from "../components/navigation/GalleryCategoryMenu";
import GalleryImageGrid from "../components/layout/GalleryImageGrid";
import GalleryModal from "../components/modals/GalleryModal";
import { SERVICES_TITLE_CLASS } from "../constants/styles";
import useGalleryModalTouch from "../hooks/useGalleryModalTouch";
import useWindowSize from "../hooks/useWindowSize";
import { getImagesForCategory } from "../utils/galleryUtils";
import { getTextColorClass } from "../utils/utils";
import { galleryCategories, galleryTitle } from "../data/galleryData";
import { useTheme } from "../components/context/useThemeHook";
import "../GlobalStyles.css";

export default function Gallery() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [isGalleryTransitioning, setIsGalleryTransitioning] = useState(false);
  const [isModalTransitioning, setIsModalTransitioning] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const modalContainerRef = useRef<HTMLDivElement>(null);
  const { isMobileView } = useWindowSize();
  const { theme } = useTheme();
  const currentGalleryImages = useMemo(() => getImagesForCategory(selectedCategory), [selectedCategory]);

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
    const newIndex = (currentIndex + offset + currentGalleryImages.length) % currentGalleryImages.length;
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

  if (error) return <p className="error-message">{error}</p>;

  return (
    <main className={`min-h-screen ${getTextColorClass(theme)}`}>
      <section id="gallery" className="mx-auto py-16">
        <GalleryTitle title={galleryTitle} className={SERVICES_TITLE_CLASS} />
        <GalleryCategoryMenu {...{ galleryCategories, selectedCategory, handleCategoryClick, theme }} />
        <GalleryImageGrid {...{ currentGalleryImages, openImage, isGalleryTransitioning }} />
        <GalleryModal {...{ selectedImage, closeImage, prevImage, nextImage, isModalTransitioning, handleModalClick, modalContainerRef, isMobileView }} />
      </section>
    </main>
  );
}