//src/pages/Gallery.tsx
import { useState, lazy, Suspense, useRef, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom"; // Importar hooks de react-router-dom
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
  Quinceañera: imageArrays.galleryQuinceañeraImages,
};

// Helper para normalizar texto a formato slug (minúsculas, guiones por espacios)
const normalizeTextToSlug = (text: string = ""): string => text.toLowerCase().replace(/\s+/g, '-');

// Helper para obtener el nombre de la categoría a partir de un slug normalizado
const getCategoryNameFromSlug = (slug: string | undefined): string | undefined => {
  if (!slug) return undefined;
  const normalizedSlug = normalizeTextToSlug(slug); // Asegurarse que el slug de entrada también esté normalizado
  return Object.keys(categoryMap).find(catName => normalizeTextToSlug(catName) === normalizedSlug);
};

const Gallery = () => {
  const { categorySlug } = useParams<{ categorySlug?: string }>(); // Leer el slug de la URL
  const navigate = useNavigate(); // Hook para la navegación programática

  // Determinar la categoría inicial basada en el slug de la URL o usar "Novia" como default
  const initialCategoryName = getCategoryNameFromSlug(categorySlug) || "Novia";
  const [activeCategory, setActiveCategory] = useState<string>(initialCategoryName);

  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [isModalTransitioning] = useState(false); // por si necesitas en el futuro
  const modalContainerRef = useRef<HTMLDivElement>(null);
  const isMobileView = window.innerWidth <= 768;
  const { colors } = useTheme();
  const galleryRef = useRef<HTMLDivElement>(null);

  // Efecto para sincronizar activeCategory con el categorySlug de la URL
  useEffect(() => {
    const categoryNameFromUrl = getCategoryNameFromSlug(categorySlug);

    if (categorySlug) { // Si hay un slug en la URL
      if (categoryNameFromUrl) { // Y es un slug de categoría válido
        if (activeCategory !== categoryNameFromUrl) {
          setActiveCategory(categoryNameFromUrl); // Sincronizar el estado interno
        }
      } else {
        // Slug inválido en la URL, redirigir a la galería por defecto o a home
        console.warn(`Slug de categoría desconocido: ${categorySlug}. Redirigiendo a galería por defecto.`);
        navigate("/gallery", { replace: true }); // Redirige a /gallery (que mostrará "Novia")
      }
    } else { // No hay slug en la URL (ej. se navegó a /gallery)
      if (activeCategory !== "Novia") { // Establecer la categoría por defecto
        setActiveCategory("Novia");
      }
    }
  }, [categorySlug, navigate, activeCategory]);

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
              onCategoryChange={(newCategoryName) => {
                const newSlug = normalizeTextToSlug(newCategoryName);
                // Solo navegar si la categoría seleccionada es diferente a la activa (basado en slug)
                if (normalizeTextToSlug(activeCategory) !== newSlug) {
                  navigate(`/galeria/${newSlug}`, { replace: true });
                }
                // El useEffect se encargará de actualizar setActiveCategory basado en el cambio de URL
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
