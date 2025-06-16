// src/pages/About.tsx
import React from "react";
import { useTheme } from "../components/context/themeContext";
import useWindowSize from "../hooks/useWindowSize";
import useScrollToHash from "../hooks/useScrollToHash";
import { ErrorBoundary } from "react-error-boundary";
import ErrorComponent from "../components/common/ErrorComponent";
import { getImageObject } from "../utils/getImageObject"; // Importar getImageObject
import { aboutImages } from "../data/aboutData"; // Importar aboutImages

// Nuevos componentes componentizados
import AboutHeroSection from "../components/about/AboutHeroSection";
import AboutSeoTags from "../components/about/AboutSeoTags";
import AboutContentLayout from "../components/about/AboutContentLayout";
import FullWidthStatsSection from "../components/about/FullWidthStatsSection";
import ContainedImagesSection from "../components/about/ContainedImagesSection";

const About: React.FC = React.memo(() => {
  const { colors } = useTheme() || {};
  const { isMobileView } = useWindowSize();
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

  const featuredImageProps = {
    src:
      featuredImageObject?.webp ||
      featuredImageObject?.avif ||
      "/img/default-image.png", // Usar webp o avif, con fallback
    alt: featuredImageData?.alt || "Imagen destacada sobre Zoily Carrero",
  };

  useScrollToHash();

  const handleResetBoundary = () => {
    window.location.reload();
  };

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
          className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" // Container for overall page content
        >
          <AboutContentLayout
            featuredImageSrc={featuredImageProps.src}
            featuredImageAlt={featuredImageProps.alt}
          />
        </main>

        {/* Stats Section - Full Width */}
        <FullWidthStatsSection />

        {/* Contained Images Section */}
        <main
          className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" // Container for overall page content
        >
          <ContainedImagesSection />
        </main>
      </div>
    </ErrorBoundary>
  );
});

export default About;
