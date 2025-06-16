/**
 * Componente principal de contenido para la página "Sobre mí".
 * Muestra el título, descripciones y la imagen principal con animaciones y estilos adaptados al tema.
 *
 * @component
 * @returns {JSX.Element}
 */
import React from 'react';
import { aboutInfo } from '../../data/aboutData';
import { useTheme } from '../context/themeContext';
import RevealWrapper from '../common/RevealWrapper';
import { PARAGRAPH_CLASS } from '../../constants/styles';


const AboutMainContent: React.FC = React.memo(() => {
  const { colors } = useTheme();
  const { description1, description2 } = aboutInfo || {};

  return (
    // Parent component (About.tsx) now controls layout (e.g., width, column placement).
    // This component focuses on rendering its specific content.
    <section> {/* Removed layout-specific classes like lg:w-1/2, lg:ml-32, p-6 and the outer flex div */}
        {/* The 'prose' class often defines its own max-width. mx-auto will center it. */}
        <div className="prose prose-lg mx-auto" style={{ color: colors.text }}>
            {description1 && (
              <RevealWrapper animationClass="fade-in-text">
                <p className={`${PARAGRAPH_CLASS} leading-relaxed text-center lg:text-left`}>
                  {description1}
                </p>
              </RevealWrapper>
            )}
            {description2 && (
              <RevealWrapper animationClass="fade-in-text">
                <p className={`${PARAGRAPH_CLASS} mt-4 leading-relaxed text-center lg:text-left`}>
                  {description2}
                </p>
              </RevealWrapper>
            )}
        </div>
      </section>
  );
});

export default AboutMainContent;