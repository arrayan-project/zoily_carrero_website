// src/pages/About.tsx
import React, { lazy, Suspense } from "react";
import { LazyHelmetProvider, LazyHelmet } from "../utils/LazyHelmet";
import { useTheme } from "../components/context/themeContext";
import useWindowSize from "../hooks/useWindowSize";
import LazySectionLoader from "../components/common/LazySectionLoader";
import {
  ABOUT_HERO_TITLE_CLASS,
  ABOUT_HERO_SUBTITLE_CLASS,
} from "../constants/styles";
import AboutHeroSkeleton from "../components/skeletons/About/AboutHeroSkeleton";
import useScrollToHash from "../hooks/useScrollToHash";
import { ErrorBoundary } from "react-error-boundary";
import ErrorComponent from "../components/common/ErrorComponent";
import AboutMainContentSkeleton from "../components/skeletons/About/AboutMainContentSkeleton";
import AboutWhyUsSkeleton from "../components/skeletons/About/AboutMainContentSkeleton";
import AboutImagesSkeleton from "../components/skeletons/About/AboutImagesSkeleton";

// Importaciones para la sección Hero
const BackgroundImageHero = lazy(
  () => import("../components/home/BackgroundImageHero")
);
const HomeTitle = lazy(() => import("../components/home/HomeTitle"));
const AboutMainContent = lazy(
  () => import("../components/about/AboutMainContent")
);
const AboutWhyUsSection = lazy(
  () => import("../components/about/AboutWhyUsSection")
);
const AboutImagesSection = lazy(
  () => import("../components/about/AboutImagesSection")
);

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
        <Suspense fallback={<AboutHeroSkeleton />}>
          <div className="relative w-full h-screen flex items-center justify-center text-center">
            <BackgroundImageHero
              imageKey="zoilynegrohero"
              alt={heroInfo.imageAlt}
              overlayOpacityClass="opacity-0"
              mobileObjectPositionClass="object-[80%_50%]"
              desktopObjectPositionClass="object-top"
            />
            <div className="relative z-10 flex flex-col md:items-start justify-center w-full h-full md:text-left px-4 sm:px-6 md:px-12 lg:px-64">
              <div className="mt-16 md:mt-0">
                <Suspense fallback={<AboutHeroSkeleton />}>
                  <HomeTitle
                    title={heroInfo.title}
                    subtitle={heroInfo.subtitle}
                    titleSizeClass={ABOUT_HERO_TITLE_CLASS}
                    subtitleSizeClass={ABOUT_HERO_SUBTITLE_CLASS}
                  />
                </Suspense>
              </div>
            </div>
          </div>
        </Suspense>

        {!isMobileView && (
          <Suspense fallback={null}>
            <LazyHelmetProvider>
              <LazyHelmet>
                <title>
                  Sobre Zoily Carrero | Maquilladora Profesional Apasionada
                </title>
                <meta
                  name="description"
                  content="Conoce a Zoily Carrero, maquilladora profesional apasionada por realzar tu belleza única. Descubre mi historia, filosofía y por qué elegirme."
                />

                {/* ––– Open Graph ––– */}
                <meta
                  property="og:title"
                  content="Sobre Zoily Carrero | Maquilladora Profesional Apasionada"
                />
                <meta
                  property="og:description"
                  content="Conoce a Zoily Carrero, maquilladora profesional apasionada por realzar tu belleza única. Descubre mi historia, filosofía y por qué elegirme."
                />
                <meta
                  property="og:image"
                  content="https://zoilycarrero.web.app/img/zoilynegro.webp"
                />
                {/* Ahora apuntamos a /about o la ruta real de “Sobre” */}
                <meta
                  property="og:url"
                  content="https://zoilycarrero.web.app/about"
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
                  content="Sobre Zoily Carrero | Maquilladora Profesional Apasionada"
                />
                <meta
                  name="twitter:description"
                  content="Conoce a Zoily Carrero, maquilladora profesional apasionada por realzar tu belleza única. Descubre mi historia, filosofía y por qué elegirme."
                />
                <meta
                  name="twitter:image"
                  content="https://zoilycarrero.web.app/img/zoilynegro.webp"
                />

                {/* ––– Canonical ––– */}
                {/* Ahora apuntamos a /about */}
                <link
                  rel="canonical"
                  href="https://zoilycarrero.web.app/about"
                />
              </LazyHelmet>
            </LazyHelmetProvider>
          </Suspense>
        )}

        <main
          id="about-content"
          className="max-w-7xl mx-auto px-4 py-16 sm:px-6 lg:px-8"
        >
          {" "}
          {/* Cambiado el id para evitar duplicados si "about" se usa en el navlink para el hero */}
          <LazySectionLoader
            minHeight="400px"
            fallback={<AboutMainContentSkeleton />}
          >
            <Suspense fallback={<AboutMainContentSkeleton />}>
              <AboutMainContent />
            </Suspense>
          </LazySectionLoader>
          <LazySectionLoader
            minHeight="400px"
            fallback={<AboutWhyUsSkeleton />}
          >
            <Suspense fallback={<AboutWhyUsSkeleton />}>
              <AboutWhyUsSection />
            </Suspense>
          </LazySectionLoader>
          <LazySectionLoader
            minHeight="400px"
            fallback={<AboutImagesSkeleton />}
          >
            <Suspense fallback={<AboutImagesSkeleton />}>
              <AboutImagesSection />
            </Suspense>
          </LazySectionLoader>
        </main>
      </div>
    </ErrorBoundary>
  );
});

export default About;
