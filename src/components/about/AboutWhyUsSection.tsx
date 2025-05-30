/**
 * Sección "Por qué elegirnos" para la página "Sobre mí".
 * Muestra una lista de puntos destacados con íconos y animaciones, usando estilos adaptados al tema.
 *
 * @component
 * @returns {JSX.Element | null}
 */
import React from 'react';
import { CheckCircle } from '../../assets/icons';
import { whyUsPoints, aboutInfo } from '../../data/aboutData';
import { useTheme } from '../context/themeContext';
import RevealWrapper from '../common/RevealWrapper';
import { FONT_FAMILY_PRIMARY, FONT_WEIGHT_NORMAL, PARAGRAPH_CLASS, TEXT_CENTER } from '../../constants/styles'; // Assuming normal weight for this title

const AboutWhyUsSection: React.FC = React.memo(() => {
  const { colors } = useTheme();
  const title = aboutInfo?.whyUsTitle ?? 'Why Choose Us';

  if (!whyUsPoints.length) return null;

  return (
    <section className="mt-24 lg:mt-32 py-16 px-4 md:px-6 lg:px-8 xl:px-16 2xl:px-24">
      <div className="max-w-screen-lg mx-auto">
        {title && (
          <RevealWrapper animationClass="fade-in-text">
            <h3
              // Using base font family, specific size, and TEXT_CENTER. Assuming normal weight.
              className={`${FONT_FAMILY_PRIMARY} ${FONT_WEIGHT_NORMAL} text-2xl ${TEXT_CENTER} md:text-left mb-12`}
              style={{ color: colors.accent }}
            >
              {title}
            </h3>
          </RevealWrapper>
        )}

        <RevealWrapper animationClass="fade-in-text">
          <ul className="space-y-4">
            {whyUsPoints.map((point, index) => (
              <li key={`why-us-${index}`} className="flex items-center space-x-6">
                <CheckCircle className="h-6 w-6 flex-shrink-0" style={{ color: colors.accent }} />
                <p
                  className={`${PARAGRAPH_CLASS} leading-relaxed`}
                  style={{ color: colors.text }}
                >
                  {point}
                </p>
              </li>
            ))}
          </ul>
        </RevealWrapper>
      </div>
    </section>
  );
});

export default AboutWhyUsSection;
