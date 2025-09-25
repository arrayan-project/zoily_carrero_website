/**
 * Página "Sobre Mí" (About).
 * Este componente actúa como el orquestador principal para la ruta '/about'.
 * Se encarga de:
 * - Ensamblar todas las secciones de la página (Hero, Contenido, Estadísticas, Imágenes).
 * - Gestionar la carga diferida (lazy loading) de las secciones más pesadas.
 * - Proveer los datos necesarios a los componentes hijos.
 * - Configurar los metadatos SEO para la página.
 * - Aplicar el tema (colores de fondo y texto) y manejar la responsividad.
 *
 * @returns {JSX.Element} La página "Sobre Mí" renderizada.
 */
import React, { lazy, Suspense, useState, useRef } from "react";
import { useTheme } from "../components/context/themeContext";
import useWindowSize from "../hooks/useWindowSize";
import useScrollToHash from "../hooks/useScrollToHash";
import { ErrorBoundary } from "react-error-boundary";
import ErrorComponent from "../components/common/ErrorComponent";
import { getImageObject } from "../utils/getImageObject";
import { aboutImages } from "../data/aboutData";
import LazySectionLoader from "../components/common/LazySectionLoader";

// Nuevos componentes componentizados
import AboutHeroSection from "../components/about/AboutHeroSection";
import AboutSeoTags from "../components/about/AboutSeoTags";
import AboutContentLayout from "../components/about/AboutContentLayout";

// Componentes que se cargarán de forma diferida
const StatsSection = lazy(() => import("../components/StatsSection"));
const AboutImagesSection = lazy(
  () => import("../components/about/AboutImagesSection")
);
const GalleryModal = lazy(
  () => import("../components/modals/GalleryModal")
);

// Esqueletos para la carga diferida
const StatsSkeleton = () => (
  <div className="w-full h-40 bg-gray-200 dark:bg-gray-700 animate-pulse" />
);
const AboutImagesSkeleton = () => <div className="w-full h-96 bg-gray-200 dark:bg-gray-700 animate-pulse rounded-lg" />;

const About: React.FC = React.memo(() => {
  const { colors } = useTheme() || {};
  const { isMobileView } = useWindowSize();
  // State and handlers for the image modal
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const modalContainerRef = useRef<HTMLDivElement>(null);

  const bgColor = colors?.background ?? "#ffffff";
  const textColor = colors?.text ?? "#000000";

  const heroInfo = {
    title: "Conóceme",
    subtitle: "Pasión y Arte en Cada Maquillaje",
    imageAlt: "Zoily Carrero - Maquilladora Profesional",
  };

  const seoProps = {
    title: "Sobre Zoily Carrero | Maquilladora Profesional Apasionada",
    description:
      "Conoce a Zoily Carrero, maquilladora profesional apasionada por realzar tu belleza única. Descubre mi historia, filosofía y por qué elegirme.",
    imageUrl: "https://zoilycarrero.web.app/img/zoilynegro.webp",
    url: "https://zoilycarrero.web.app/about",
    siteName: "SoyZoilyCarrero MakeUp",
    locale: "es_CL",
  };

  // Obtener la imagen destacada de aboutData
  const featuredImageData = aboutImages.find(
    (img) => img.key === "zoilywhite2"
  );
  const featuredImageObject = featuredImageData
    ? getImageObject(featuredImageData.key)
    : null;

  // Filtrar las imágenes para la galería, excluyendo la imagen destacada para no repetirla.
  const galleryImages = aboutImages.filter(
    (img) => img.key !== "zoilywhite2"
  );

  // Crear un array de claves de imágenes para el modal.
  // El modal espera la 'key' para luego buscar el objeto de imagen completo.
  const galleryImageKeys = galleryImages.map((imgInfo) => imgInfo.key);

  const openModal = (index: number) => {
    setCurrentIndex(index);
    // Pasamos la clave de la imagen, no la ruta.
    setSelectedImage(galleryImageKeys[index] ?? null);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  const navigateImage = (offset: number) => {
    const newIndex =
      (currentIndex + offset + galleryImageKeys.length) %
      galleryImageKeys.length;
    setCurrentIndex(newIndex);
    setSelectedImage(galleryImageKeys[newIndex] ?? null);
  };

  useScrollToHash();

  const handleResetBoundary = () => {
    window.location.reload();
  };

  const prevImage = () => navigateImage(-1);
  const nextImage = () => navigateImage(1);

  return (
    <ErrorBoundary
      FallbackComponent={ErrorComponent}
      onReset={handleResetBoundary}
    >
      <div
        className="min-h-screen"
        style={{ backgroundColor: bgColor, color: textColor }}
      >
        {/* Hero Section */}
        <AboutHeroSection heroInfo={heroInfo} />

        {/* SEO Tags */}
        {!isMobileView && <AboutSeoTags {...seoProps} />}

        <main
          id="about-content"
          className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
        >
          {/* Seccion que agrupa 3 compontentes: AboutMainContent, AboutWhyUsSection y AboutFeaturedImage */}
          <AboutContentLayout
            imageObject={featuredImageObject}
            featuredImageAlt={featuredImageData?.alt || "Imagen destacada sobre Zoily Carrero"}
          />
        </main>

        {/* Stats Section - Full Width */}
        <LazySectionLoader minHeight="150px" fallback={<StatsSkeleton />}>
          <Suspense fallback={<StatsSkeleton />}>
            <div className="w-full">
              <StatsSection />
            </div>
          </Suspense>
        </LazySectionLoader>

        {/* Certificates Image Section */}
        <main
          className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
        >
          <LazySectionLoader minHeight="200px" fallback={<AboutImagesSkeleton />}>
            <Suspense fallback={<AboutImagesSkeleton />}>
              <div className="py-12 md:py-16">
                <AboutImagesSection
                  images={galleryImages}
                  onImageClick={openModal}
                />
              </div>
            </Suspense>
          </LazySectionLoader>
        </main>

        {/* Modal para imágenes en pantalla completa */}
        {selectedImage && (
          <Suspense
            fallback={
              <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
                <p className="text-white">Cargando imagen...</p>
              </div>
            }
          >
            <GalleryModal
              selectedImage={selectedImage}
              closeImage={closeModal}
              prevImage={prevImage}
              nextImage={nextImage}
              isModalTransitioning={false} // Asumiendo que no se necesita estado de transición aquí
              modalContainerRef={modalContainerRef}
              isMobileView={isMobileView}
            />
          </Suspense>
        )}
      </div>
    </ErrorBoundary>
  );
});

export default About;
