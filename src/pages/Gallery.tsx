//src/pages/Gallery.tsx
import { useState, lazy, Suspense, useRef } from "react";
import { imageArrays } from "../assets/images";
import { galleryTitle } from "../data/galleryData";
import { useTheme } from "../components/context/themeContext";
import { LazyHelmetProvider, LazyHelmet } from "../utils/LazyHelmet";
import LazySectionLoader from "../components/common/LazySectionLoader";
import GalleryGridSkeleton from "../components/skeletons/Gallery/GalleryGridSkeleton";
import GalleryTitleSkeleton from "../components/skeletons/Gallery/GalleryTitleSkeleton";
import GalleryCategoryMenuSkeleton from "../components/skeletons/Gallery/GalleryCategoryMenuSkeleton";
import useScrollToHash from "../hooks/useScrollToHash";
import { ErrorBoundary } from "react-error-boundary";
import ErrorComponent from "../components/common/ErrorComponent";

const GalleryModal = lazy(() => import("../components/modals/GalleryModal"));
const GalleryImageGrid = lazy(
  () => import("../components/gallery/GalleryImageGrid")
);
const GalleryTitle = lazy(() => import("../components/gallery/GalleryTitle"));
const GalleryCategoryMenu = lazy(
  () => import("../components/navigation/GalleryCategoryMenu")
);

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
  const { colors } = useTheme();
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

  useScrollToHash();

  const handleResetBoundary = () => {
    // Intenta recargar la página.
    window.location.reload();
  };

  return (
    <ErrorBoundary
      FallbackComponent={ErrorComponent}
      onReset={handleResetBoundary}
    >
      <main>
        <section
          id="gallery"
          className="px-1 py-12 md:px-4 md:py-24"
          style={{ backgroundColor: colors.background, color: colors.text }}
        >
          <Suspense fallback={null}>
            <LazyHelmetProvider>
              <LazyHelmet>
                {/* Título y descripción */}
                <title>
                  Galería de Maquillaje Profesional | Zoily Carrero MakeUp
                </title>
                <meta
                  name="description"
                  content="Explora la galería de Zoily Carrero MakeUp. Descubre transformaciones impactantes, looks de novia, social y más. ¡Inspírate para tu próximo evento!"
                />

                {/* ––– Open Graph ––– */}
                <meta
                  property="og:title"
                  content="Galería de Maquillaje Profesional | Zoily Carrero MakeUp"
                />
                <meta
                  property="og:description"
                  content="Explora la galería de Zoily Carrero MakeUp. Descubre transformaciones impactantes, looks de novia, social y más. ¡Inspírate para tu próximo evento!"
                />
                <meta
                  property="og:image"
                  content="https://zoilycarrero.web.app/img/zoilynegro.webp"
                />
                <meta
                  property="og:url"
                  content="https://zoilycarrero.web.app/gallery"
                />
                <meta property="og:type" content="website" />
                <meta
                  property="og:site_name"
                  content="SoyZoilyCarrero MakeUp"
                />
                <meta property="og:locale" content="es_CL" />

                {/* ––– Twitter Card ––– */}
                <meta name="twitter:card" content="summary_large_image" />
                <meta
                  name="twitter:title"
                  content="Galería de Maquillaje Profesional | Zoily Carrero MakeUp"
                />
                <meta
                  name="twitter:description"
                  content="Explora la galería de Zoily Carrero MakeUp. Descubre transformaciones impactantes, looks de novia, social y más. ¡Inspírate para tu próximo evento!"
                />
                <meta
                  name="twitter:image"
                  content="https://zoilycarrero.web.app/img/zoilynegro.webp"
                />

                {/* ––– Canonical ––– */}
                <link
                  rel="canonical"
                  href="https://zoilycarrero.web.app/gallery"
                />
              </LazyHelmet>
            </LazyHelmetProvider>
          </Suspense>

          <Suspense fallback={<GalleryTitleSkeleton />}>
            <GalleryTitle title={galleryTitle} />
          </Suspense>

          <Suspense fallback={<GalleryCategoryMenuSkeleton />}>
            <GalleryCategoryMenu
              categories={Object.keys(categoryMap)}
              activeCategory={activeCategory}
              onCategoryChange={(category) => {
                setActiveCategory(category);
                setTimeout(() => {
                  galleryRef.current?.scrollIntoView({
                    behavior: "smooth",
                    block: "start",
                  });
                }, 100);
              }}
            />
          </Suspense>

          <div ref={galleryRef}>
            <LazySectionLoader
              minHeight="400px"
              fallback={<GalleryGridSkeleton />}
            >
              <Suspense fallback={<GalleryGridSkeleton />}>
                <GalleryImageGrid
                  images={currentGalleryImages}
                  onImageClick={openModal}
                />
              </Suspense>
            </LazySectionLoader>
          </div>

          {selectedImage && (
            <Suspense
              fallback={
                <div className="min-h-[400px] flex items-center justify-center">
                  Cargando imagen...
                </div>
              }
            >
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
      </main>
    </ErrorBoundary>
  );
};

export default Gallery;
