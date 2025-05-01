// src/pages/About.tsx
import { useState, useEffect } from 'react';
import { useTheme } from '../components/context/useThemeHook';
import '../GlobalStyles.css';
import AboutMainContent from '../components/about/AboutMainContent';
import AboutWhyUsSection from '../components/about/AboutWhyUsSection';
import AboutImagesSection from '../components/about/AboutImagesSection';
import { Helmet } from 'react-helmet-async';

function About() {
  const [, setError] = useState<string | null>(null);
  const { colors } = useTheme();
  const isMobile = typeof window !== 'undefined' ? window.innerWidth < 768 : false;


  useEffect(() => {
    try {
    } catch (err) {
      setError('Error al cargar el tamaño de la ventana.');
      console.error('Error en useEffect:', err);
    }
  }, []);

  return (
    <div className={`min-h-screen`} style={{ backgroundColor: colors.background, color: colors.text }}>
      {!isMobile && (
      <Helmet>
        <title>Sobre Zoily Carrero | Maquilladora Profesional Apasionada</title>
        <meta
          name="description"
          content="Conoce a Zoily Carrero, maquilladora profesional apasionada por realzar tu belleza única. Descubre mi historia, filosofía y por qué elegirme."
        />
      </Helmet>
      )}
      <section id="about" className="max-w-7xl mx-auto px-4 py-16 sm:px-6 lg:px-8">
        <AboutMainContent />
        <AboutWhyUsSection />
        <AboutImagesSection />
      </section>
    </div>
  );
}

export default About;
