// src/components/about/AboutHeroSection.tsx
/**
 * Componente para la sección "Hero" de la página "Sobre Mí".
 * Muestra una imagen de fondo a pantalla completa con un título y subtítulo superpuestos.
 * Utiliza componentes reutilizables como `BackgroundImageHero` y `HomeTitle` para su construcción.
 *
 * @component
 * @param {AboutHeroSectionProps} props - Propiedades para configurar el héroe.
 * @property {HeroInfo} heroInfo - Objeto con el título, subtítulo y texto alternativo para la imagen.
 * @returns {JSX.Element} La sección de héroe renderizada.
 */
import React, { Suspense, lazy } from 'react';
import {
  ABOUT_HERO_TITLE_CLASS,
  ABOUT_HERO_SUBTITLE_CLASS,
} from '../../constants/styles';
import AboutHeroSkeleton from '../skeletons/About/AboutHeroSkeleton';

const BackgroundImageHero = lazy(
  () => import('../home/BackgroundImageHero')
);
const HomeTitle = lazy(() => import('../home/HomeTitle'));

interface HeroInfo {
  title: string;
  subtitle: string;
  imageAlt: string;
}

interface AboutHeroSectionProps {
  heroInfo: HeroInfo;
}

const AboutHeroSection: React.FC<AboutHeroSectionProps> = React.memo(({ heroInfo }) => {
  return (
    <Suspense fallback={<AboutHeroSkeleton />}>
      <div className="relative w-full h-[80vh] flex items-center justify-center text-center mb-12 md:mb-24">
        <BackgroundImageHero
          imageKey="zoilynegrohero" // Podrías pasar esto como prop si varía
          alt={heroInfo.imageAlt}
          overlayOpacityClass="opacity-40" // Podrías pasar esto como prop si varía
          mobileObjectPositionClass="object-[40%_50%]" // Podrías pasar esto como prop si varía
          desktopObjectPositionClass="object-top" // Podrías pasar esto como prop si varía
        />
        <div className="relative z-10 flex flex-col md:items-center justify-center w-full h-full md:text-center">
          <div className="mt-16 md:mt-0">
            <Suspense fallback={<AboutHeroSkeleton />}> {/* Fallback anidado para HomeTitle */}
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
  );
});

export default AboutHeroSection;
