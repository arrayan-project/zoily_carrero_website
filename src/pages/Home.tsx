// src/pages/Home.tsx
import { lazy, Suspense } from "react";
import {
  homeInfo,
  homeLinks,
  homeFeatures,
  homeBrands,
  galleryFeatures,
} from "../data/homeData"; // imageArrays no se usa directamente aquí ahora
import { Helmet } from "react-helmet-async";
import { useTheme } from "../components/context/themeContext";
import HomeTitle from "../components/home/HomeTitle";
import BackgroundImageHero from "../components/home/BackgroundImageHero"; // Importamos el componente
import ScrollDownArrow from "../components/common/ScrollDownArrow";
import LazySectionLoader from "../components/common/LazySectionLoader";
import HomeSkeleton from "../components/skeletons/Home/HomeBrandsSkeleton";
import useScrollToHash from "../hooks/useScrollToHash";

const HomeLinksSection = lazy(
  () => import("../components/home/HomeLinksSection")
);
const HomeFeaturesSection = lazy(
  () => import("../components/home/HomeFeaturesSection")
);
const HomeBrandsSection = lazy(
  () => import("../components/home/HomeBrandsSection")
);
const HomeGallerySection = lazy(
  () => import("../components/home/HomeGallerySection")
);

export default function Home() {
  const { colors } = useTheme();

  useScrollToHash();

  return (
    <div
      id="home"
      className="relative transition-colors duration-300"
      style={{
        backgroundColor: colors.background,
        color: colors.text,
      }}
    >
      {/* Hero ajustado a viewport */}
      <div className="relative w-full h-screen mb-10 md:mb-24 flex items-center justify-center">
        {/* BackgroundImageHero ahora está dentro del div del hero y es absolute */}
        <BackgroundImageHero
          imageKey="backgroundHome2"
          alt="Maquillaje profesional Zoily Carrero"
          overlayOpacityClass="opacity-60"
          publicSrcOverride="/img/background-home/bg-home2.avif" // ← matches your HEAD preload
        />
        <div className="relative z-10 flex flex-col items-center justify-center w-full h-full text-center">
          {homeInfo.title && homeInfo.subtitle && (
            <HomeTitle title={homeInfo.title} subtitle={homeInfo.subtitle} />
          )}
        </div>

        {/* Flecha al pie del hero */}
        <div className="absolute bottom-8 w-full flex justify-center z-10">
          <ScrollDownArrow />
        </div>
      </div>

      <Helmet>
        <title>Zoily Carrero MakeUp – Maquillaje Profesional y Cursos</title>
        <meta
          name="description"
          content="Descubre el arte del maquillaje profesional con Zoily Carrero. Servicios personalizados, cursos de automaquillaje y UGC. ¡Agenda tu cita!"
        />
      </Helmet>

      {/* Secciones Home cargadas bajo demanda */}
      <Suspense fallback={null}>
        <LazySectionLoader
          minHeight="300px"
          rootMargin="200px 0px"
          fallback={<HomeSkeleton />}
        >
          <HomeLinksSection {...homeLinks} />
        </LazySectionLoader>

        <LazySectionLoader
          minHeight="400px"
          rootMargin="200px 0px"
          fallback={<HomeSkeleton />}
        >
          <HomeFeaturesSection {...homeFeatures} />
        </LazySectionLoader>

        <LazySectionLoader
          minHeight="400px"
          rootMargin="200px 0px"
          fallback={<HomeSkeleton />}
        >
          <HomeBrandsSection brands={homeBrands.brands} />
        </LazySectionLoader>

        <LazySectionLoader
          minHeight="400px"
          rootMargin="200px 0px"
          fallback={<HomeSkeleton />}
        >
          <HomeGallerySection {...galleryFeatures} />
        </LazySectionLoader>
      </Suspense>
    </div>
  );
}
