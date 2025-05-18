// src/pages/About.tsx
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { useTheme } from '../components/context/useThemeHook';
import useWindowSize from '../hooks/useWindowSize';
import AboutMainContent from '../components/about/AboutMainContent';
import AboutWhyUsSection from '../components/about/AboutWhyUsSection';
import AboutImagesSection from '../components/about/AboutImagesSection';
// Importaciones para la sección Hero
import BackgroundImageHero from '../components/home/BackgroundImageHero';
import HomeTitle from '../components/home/HomeTitle';

const About: React.FC = React.memo(() => {
  const { colors } = useTheme() || {};
  const { isMobileView } = useWindowSize();

  const bgColor = colors?.background ?? '#ffffff';
  const textColor = colors?.text ?? '#000000';

  const heroInfo = {
    title: "Conóceme",
    subtitle: "Pasión y Arte en Cada Maquillaje",
    imageAlt: "Zoily Carrero - Maquilladora Profesional"
  };

  return (
    <div className="min-h-screen" style={{ backgroundColor: bgColor, color: textColor }}>
      
      {/* Hero Section */}
      <div
        className="relative w-full h-screen flex items-center justify-center text-center"
      >
        <BackgroundImageHero
          imageKey="zoilynegrohero" // Clave de la imagen especificada
          alt={heroInfo.imageAlt}
          overlayOpacityClass="opacity-0"
          mobileObjectPositionClass="object-[80%_50%]"
          desktopObjectPositionClass="object-top"
        />
        <div className="relative z-10 flex flex-col md:items-start justify-center w-full h-full md:text-left px-4 sm:px-6 md:px-12 lg:px-64">
          <HomeTitle title={heroInfo.title} subtitle={heroInfo.subtitle} />
          {/* Podrías añadir un botón aquí si lo deseas, similar al de Home.tsx */}
        </div>
      </div>

      {!isMobileView && (
        <Helmet>
          <title>Sobre Zoily Carrero | Maquilladora Profesional Apasionada</title>
          <meta
            name="description"
            content="Conoce a Zoily Carrero, maquilladora profesional apasionada por realzar tu belleza única. Descubre mi historia, filosofía y por qué elegirme."
          />
        </Helmet>
      )}

      <main id="about-content" className="max-w-7xl mx-auto px-4 py-16 sm:px-6 lg:px-8"> {/* Cambiado el id para evitar duplicados si "about" se usa en el navlink para el hero */}
        <AboutMainContent />
        <AboutWhyUsSection />
        <AboutImagesSection />
      </main>
    </div>
  );
});

export default About;