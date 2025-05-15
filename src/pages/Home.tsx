// src/pages/Home.tsx
import { lazy, Suspense } from 'react';
import { useNavigate } from 'react-router-dom';
import { homeInfo, homeLinks, homeFeatures, homeBrands, galleryFeatures } from '../data/homeData';
import { imageArrays } from '../assets/images';
import { Helmet } from 'react-helmet-async';
import { useTheme } from '../components/context/useThemeHook';
import HomeButton from '../components/buttons/HomeButton';
import HomeTitle from '../components/home/HomeTitle';
import ScrollDownArrow from '../components/common/ScrollDownArrow';
import LazySectionLoader from '../components/common/LazySectionLoader';

const HomeLinksSection    = lazy(() => import('../components/home/HomeLinksSection'));
const HomeFeaturesSection = lazy(() => import('../components/home/HomeFeaturesSection'));
const HomeBrandsSection   = lazy(() => import('../components/home/HomeBrandsSection'));
const HomeGallerySection  = lazy(() => import('../components/home/HomeGallerySection'));

export default function Home() {
  const navigate = useNavigate();
  const { colors } = useTheme();
  const bg = imageArrays.backgrounds[0]; // "/img/background-home/background0.webp"

  const handleVerServiciosClick = () => navigate('/services');
  const handleAgendaTuCitaClick  = () => navigate('/contact');

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
      <div
        className="relative w-full h-screen bg-cover bg-center mb-10 md:mb-24"
        style={{ backgroundImage: `url(${bg})` }}
      >


        <div className="relative z-10 flex flex-col items-center justify-center w-full h-full text-center px-4">
          {homeInfo.title && homeInfo.subtitle && (
            <HomeTitle title={homeInfo.title} subtitle={homeInfo.subtitle} />
          )}
          <div className="flex flex-col sm:flex-row gap-4 mt-6">
            {homeInfo.button1Text && (
              <HomeButton onClick={handleVerServiciosClick}>
                {homeInfo.button1Text}
              </HomeButton>
            )}
            {homeInfo.button2Text && (
              <HomeButton onClick={handleAgendaTuCitaClick} primary>
                {homeInfo.button2Text}
              </HomeButton>
            )}
          </div>
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
        <LazySectionLoader minHeight="300px" rootMargin="200px 0px" fallback={<div className="h-72" />}>
          <HomeLinksSection {...homeLinks} />
        </LazySectionLoader>

        <LazySectionLoader minHeight="400px" rootMargin="200px 0px">
          <HomeFeaturesSection {...homeFeatures} />
        </LazySectionLoader>

        <LazySectionLoader minHeight="400px" rootMargin="200px 0px">
          <HomeBrandsSection brands={homeBrands.brands} />
        </LazySectionLoader>

        <LazySectionLoader minHeight="400px" rootMargin="200px 0px">
          <HomeGallerySection {...galleryFeatures} />
        </LazySectionLoader>
      </Suspense>
    </div>
  );
}
