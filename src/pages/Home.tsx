// src/pages/Home.tsx
import { lazy, Suspense } from "react";
import { useNavigate } from "react-router-dom";
import {homeInfo,homeLinks,homeFeatures,homeBrands,galleryFeatures} from "../data/homeData"; // imageArrays no se usa directamente aquí ahora
import { LazyHelmetProvider, LazyHelmet } from "../utils/LazyHelmet";
import { useTheme } from "../components/context/themeContext";
import HomeButton from "../components/buttons/HomeButton";
import HomeTitle from "../components/home/HomeTitle";
import BackgroundImageHero from "../components/home/BackgroundImageHero"; // Importamos el componente
import ScrollDownArrow from "../components/common/ScrollDownArrow";
import LazySectionLoader from "../components/common/LazySectionLoader";
import useScrollToHash from "../hooks/useScrollToHash";
import { ErrorBoundary } from "react-error-boundary";
import ErrorComponent from "../components/common/ErrorComponent";
import HomeHeroSkeleton from "../components/skeletons/Home/HomeHeroSkeleton";
import HomeBrandsSkeleton from "../components/skeletons/Home/HomeBrandsSkeleton";
import HomeFeaturesSkeleton from "../components/skeletons/Home/HomeFeaturesSkeleton";
import HomeLinksSkeleton from "../components/skeletons/Home/HomeLinksSkeleton";

const HomeLinksSection = lazy(() => import("../components/home/HomeLinksSection"));
const HomeFeaturesSection = lazy(() => import("../components/home/HomeFeaturesSection"));
const HomeBrandsSection = lazy(() => import("../components/home/HomeBrandsSection"));
const HomeGallerySection = lazy(() => import("../components/home/HomeGallerySection"));
const StatsSection = lazy(() => import("../components/StatsSection"));


export default function Home() {
  const navigate = useNavigate();
  const { colors } = useTheme();
  const handleAgendaTuCitaClick = () => navigate("/contact");

  useScrollToHash();

  const handleResetBoundary = () => {
    // Intenta recargar la página. Podrías implementar una lógica más sofisticada
    // como limpiar algún estado específico de la página antes de reintentar.
    window.location.reload();
  };

  return (
    <ErrorBoundary
      FallbackComponent={ErrorComponent}
      onReset={handleResetBoundary}
    >
      <div
        id="home"
        className="relative transition-colors duration-300"
        style={{
          backgroundColor: colors.background,
          color: colors.text,
        }}
      >
        <Suspense fallback={<HomeHeroSkeleton />}>
          <div className="relative w-full min-h-[100dvh] mb-10 md:mb-24 flex items-center justify-center">
            <BackgroundImageHero
              imageKey="backgroundHome2"
              alt="Maquillaje profesional Zoily Carrero"
            />
            <div className="relative z-10 flex flex-col items-center md:items-end justify-center w-full h-full text-center px-4 md:px-24">
              {homeInfo.title && homeInfo.subtitle && (
                <HomeTitle
                  title={homeInfo.title}
                  subtitle={homeInfo.subtitle}
                />
              )}
              <div className="flex flex-col sm:flex-row gap-4 mt-26">
                {homeInfo.button2Text && (
                  <HomeButton onClick={handleAgendaTuCitaClick} primary>
                    {homeInfo.button2Text}
                  </HomeButton>
                )}
              </div>
            </div>
            <div className="absolute bottom-8 w-full flex justify-center z-10">
              <ScrollDownArrow />
            </div>
          </div>
        </Suspense>

        <Suspense fallback={null}>
          <LazyHelmetProvider>
            <LazyHelmet>
              <title>Zoily Carrero MakeUp – Maquillaje Profesional y Cursos</title>
              <meta
                name="description"
                content="Descubre el arte del maquillaje profesional con Zoily Carrero. Servicios personalizados, cursos de automaquillaje y UGC. ¡Agenda tu cita!"
              />
          </LazyHelmet>
        </LazyHelmetProvider>
      </Suspense>

        {/* Secciones Home cargadas bajo demanda */}
        <Suspense fallback={null}>
          <LazySectionLoader
            minHeight="300px"
            rootMargin="200px 0px"
            fallback={<HomeLinksSkeleton />}
          >
            <HomeLinksSection {...homeLinks} />
          </LazySectionLoader>

          <LazySectionLoader>
            <StatsSection >
            </StatsSection> 
          </LazySectionLoader>

          <LazySectionLoader
            minHeight="400px"
            rootMargin="200px 0px"
            fallback={<HomeFeaturesSkeleton />}
          >
            <HomeFeaturesSection {...homeFeatures} />
          </LazySectionLoader>

          <LazySectionLoader
            rootMargin="200px 0px"
            fallback={<HomeBrandsSkeleton />}
          >
            <HomeBrandsSection brands={homeBrands.brands} />
          </LazySectionLoader>

          <LazySectionLoader
            minHeight="400px"
            rootMargin="200px 0px"
            fallback={<HomeBrandsSkeleton />}
          >
            <HomeGallerySection {...galleryFeatures} />
          </LazySectionLoader>
        </Suspense>
      </div>
    </ErrorBoundary>
  );
}
