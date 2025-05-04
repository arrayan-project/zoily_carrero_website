// src/pages/About.tsx
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { useTheme } from '../components/context/useThemeHook';
import useWindowSize from '../hooks/useWindowSize';
import AboutMainContent from '../components/about/AboutMainContent';
import AboutWhyUsSection from '../components/about/AboutWhyUsSection';
import AboutImagesSection from '../components/about/AboutImagesSection';

const About: React.FC = React.memo(() => {
  const { colors } = useTheme() || {};
  const { isMobileView } = useWindowSize();

  const bgColor = colors?.background ?? '#ffffff';
  const textColor = colors?.text ?? '#000000';

  return (
    <div className="min-h-screen" style={{ backgroundColor: bgColor, color: textColor }}>
      {/* SEO metadata only for non-mobile to avoid SSR flash */}
      {!isMobileView && (
        <Helmet>
          <title>Sobre Zoily Carrero | Maquilladora Profesional Apasionada</title>
          <meta
            name="description"
            content="Conoce a Zoily Carrero, maquilladora profesional apasionada por realzar tu belleza única. Descubre mi historia, filosofía y por qué elegirme."
          />
        </Helmet>
      )}

      <main id="about" className="max-w-7xl mx-auto px-4 py-16 sm:px-6 lg:px-8">
        <AboutMainContent />
        <AboutWhyUsSection />
        <AboutImagesSection />
      </main>
    </div>
  );
});

export default About;