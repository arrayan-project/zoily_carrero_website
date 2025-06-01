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
    <div className="lg:flex lg:items-start lg:justify-between lg:gap-8 flex-col-reverse lg:flex-row md:mt-24">
      <section className="lg:w-3/5 lg:ml-32 pt-12">
        <div className="max-w-lg">

          <div className="prose prose-lg" style={{ color: colors.text }}>
            {description1 && (
              <RevealWrapper animationClass="fade-in-text">
                <p className={`${PARAGRAPH_CLASS} leading-relaxed`}>
                  {description1}
                </p>
              </RevealWrapper>
            )}
            {description2 && (
              <RevealWrapper animationClass="fade-in-text">
                <p className={`${PARAGRAPH_CLASS} mt-4 leading-relaxed`}>
                  {description2}
                </p>
              </RevealWrapper>
            )}
          </div>
        </div>
      </section>
    </div>
  );
});

export default AboutMainContent;