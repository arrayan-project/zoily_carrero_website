import { useState, lazy, Suspense, useRef } from "react";
import GalleryTitle from "../components/gallery/GalleryTitle";
import GalleryCategoryMenu from "../components/navigation/GalleryCategoryMenu";
import GalleryImageGrid from "../components/gallery/GalleryImageGrid";
import { imageArrays } from "../assets/images";
import { HOME_LINKS_TITLE_CLASS } from "../constants/styles";
import { galleryTitle } from "../data/galleryData";
import { useTheme } from "../components/context/useThemeHook";
import { Helmet } from "react-helmet-async";
import LazyFooter from "../components/common/LazyFooter";

const GalleryModal = lazy(() => import("../components/modals/GalleryModal"));

const categoryMap: Record<string, string[]> = {
  Novia: imageArrays.galleryBrideImages,
  Social: imageArrays.gallerySocialImages,
  "Peinado + Maquillaje": imageArrays.galleryHairAndMakeupImages,
  "Piel madura": imageArrays.galleryMatureSkinImages,
  Glam: imageArrays.galleryGlamImages,
  Express: imageArrays.galleryExpressImages,
};

const Gallery = () => {
  const [activeCategory, setActiveCategory] = useState("Novia");
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [isModalTransitioning] = useState(false); // por si necesitas en el futuro
  const modalContainerRef = useRef<HTMLDivElement>(null);
  const isMobileView = window.innerWidth <= 768;
  const { colors} = useTheme();
  const galleryRef = useRef<HTMLDivElement>(null);


  const currentGalleryImages = categoryMap[activeCategory] || [];

  const openModal = (index: number) => {
    setCurrentIndex(index);
    setSelectedImage(currentGalleryImages[index] ?? null);
  };

  const closeImage = () => {
    setSelectedImage(null);
  };

  const navigateImage = (offset: number) => {
    const newIndex =
      (currentIndex + offset + currentGalleryImages.length) %
      currentGalleryImages.length;
    setCurrentIndex(newIndex);
    setSelectedImage(currentGalleryImages[newIndex] ?? null);
  };

  const prevImage = () => navigateImage(-1);
  const nextImage = () => navigateImage(1);


  return (
    <main>
    <section id="gallery" 
            className="px-1 py-12 md:px-4 md:py-24"
    style={{ backgroundColor: colors.background, color: colors.text }}>
      <Helmet>
        <title>Galería de Maquillaje Profesional | Zoily Carrero MakeUp</title>
        <meta
          name="description"
          content="Explora la galería de Zoily Carrero MakeUp. Descubre transformaciones impactantes, looks de novia, social y más. ¡Inspírate para tu próximo evento!"
        />
      </Helmet>

      <GalleryTitle title={galleryTitle} className={HOME_LINKS_TITLE_CLASS} />

      <GalleryCategoryMenu
        categories={Object.keys(categoryMap)}
        activeCategory={activeCategory}
        onCategoryChange={(category) => {
          setActiveCategory(category);
          setTimeout(() => {
            galleryRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
          }, 100); // delay breve para esperar el render
        }}
      />

      <div ref={galleryRef}>
        <GalleryImageGrid
          images={currentGalleryImages}
          onImageClick={openModal}
        />
      </div>

      {selectedImage && (
        <Suspense fallback={null}>
          <GalleryModal
            selectedImage={selectedImage}
            closeImage={closeImage}
            prevImage={prevImage}
            nextImage={nextImage}
            isModalTransitioning={isModalTransitioning}
            modalContainerRef={modalContainerRef}
            isMobileView={isMobileView}
          />
        </Suspense>
      )}     
    </section>
    {isMobileView && <LazyFooter />}
    </main>
  );
};

export default Gallery;
