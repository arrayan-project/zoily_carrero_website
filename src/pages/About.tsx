// src/pages/About.tsx
import { useState, useEffect } from 'react';
import { useTheme } from '../components/context/useThemeHook';
import '../GlobalStyles.css';
import AboutMainContent from '../components/about/AboutMainContent';
import AboutWhyUsSection from '../components/about/AboutWhyUsSection';
import AboutImagesSection from '../components/about/AboutImagesSection';
import ErrorComponent from '../components/common/ErrorComponent';

interface AboutProps {}

function About({}: AboutProps) {
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    try {
      // Código de inicialización o manejo de tamaño de ventana, si es necesario
    } catch (err) {
      setError('Error al cargar el tamaño de la ventana.');
      console.error('Error en useEffect:', err);
    }
  }, []);

  if (error) {
    return <ErrorComponent error={new Error(error)} resetErrorBoundary={() => setError(null)} message={error} />;
  }

  const {colors} = useTheme();

  return (
    <div className={`min-h-screen`} style={{ backgroundColor: colors.background, color: colors.text }}>
      <section id="about" className="max-w-7xl mx-auto px-4 py-16 sm:px-6 lg:px-8">
        <AboutMainContent />
        <AboutWhyUsSection />
        <AboutImagesSection />
      </section>
    </div>
  );
}

export default About;
