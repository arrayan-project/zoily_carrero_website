// src/pages/About.tsx
import React, { lazy, Suspense} from "react";
import { Helmet } from "react-helmet-async";
import { useTheme } from "../components/context/themeContext";
import useWindowSize from "../hooks/useWindowSize";
import LazySectionLoader from "../components/common/LazySectionLoader";
import AboutSkeleton from "../components/skeletons/AboutSkeleton";
import useScrollToHash from "../hooks/useScrollToHash";

// Importaciones para la sección Hero
const BackgroundImageHero = lazy(() => import("../components/home/BackgroundImageHero"));
const HomeTitle = lazy(() => import("../components/home/HomeTitle"));
const AboutMainContent = lazy(() => import("../components/about/AboutMainContent"));
const AboutWhyUsSection = lazy(() => import("../components/about/AboutWhyUsSection"));
const AboutImagesSection = lazy(() => import("../components/about/AboutImagesSection"));

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

  return (
    <div
      className="min-h-screen"
      style={{ backgroundColor: bgColor, color: textColor }}
    >
      {/* Hero Section */}
      <Suspense fallback={<AboutSkeleton />}>
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
              <Suspense fallback={<AboutSkeleton />}>
                <HomeTitle
                  title={heroInfo.title}
                  subtitle={heroInfo.subtitle}
                  titleSizeClass="text-4xl md:text-5xl"
                  subtitleSizeClass="text-xl md:text-xl"
                />
              </Suspense>
            </div>
          </div>
        </div>
      </Suspense>

      {!isMobileView && (
        <Helmet>
          <title>
            Sobre Zoily Carrero | Maquilladora Profesional Apasionada
          </title>
          <meta
            name="description"
            content="Conoce a Zoily Carrero, maquilladora profesional apasionada por realzar tu belleza única. Descubre mi historia, filosofía y por qué elegirme."
          />
        </Helmet>
      )}

      <main
        id="about-content"
        className="max-w-7xl mx-auto px-4 py-16 sm:px-6 lg:px-8"
      >
        {" "}
        {/* Cambiado el id para evitar duplicados si "about" se usa en el navlink para el hero */}
        <LazySectionLoader minHeight="400px" fallback={<AboutSkeleton />}>
          <Suspense fallback={<AboutSkeleton />}>
            <AboutMainContent />
          </Suspense>
        </LazySectionLoader>
        <LazySectionLoader minHeight="400px" fallback={<AboutSkeleton />}>
          <Suspense fallback={<AboutSkeleton />}>
            <AboutWhyUsSection />
          </Suspense>
        </LazySectionLoader>
        <LazySectionLoader minHeight="400px" fallback={<AboutSkeleton />}>
          <Suspense fallback={<AboutSkeleton />}>
            <AboutImagesSection />
          </Suspense>
        </LazySectionLoader>
      </main>
    </div>
  );
});

export default About;
