/**
 * Sección "Por qué elegirnos" para la página "Sobre mí".
 * Muestra un título y una lista de puntos destacados con íconos y animaciones.
 * Los estilos se adaptan al tema actual de la aplicación.
 *
 * @component
 * @returns {JSX.Element | null} La sección "Por qué elegirnos" o null si no hay puntos para mostrar.
 */
import React from 'react';
import { CheckCircle } from '../../assets/icons';
import { whyUsPoints, aboutInfo } from '../../data/aboutData';
import { useTheme } from '../context/themeContext';
import RevealWrapper from '../common/RevealWrapper';
import { FONT_FAMILY_PRIMARY, FONT_WEIGHT_NORMAL, PARAGRAPH_CLASS } from '../../constants/styles'; // Assuming normal weight for this title

const AboutWhyUsSection: React.FC = React.memo(() => {
  const { colors } = useTheme();
  const title = aboutInfo?.whyUsTitle ?? 'Why Choose Us';

  if (!whyUsPoints.length) return null;

  return (
    // Parent component (About.tsx) now controls layout (e.g., width, column placement, vertical spacing via gap).
    // This component focuses on rendering its specific content.
    <section> {/* Removed padding/margin classes like py-16, p-6, lg:ml-32 */}
      <div className="max-w-full mx-auto"> {/* Uses full width of its column. Or use max-w-lg/md etc. if a narrower block is desired */}
        {title && (
          <RevealWrapper animationClass="fade-in-text">
            <h3
              // Using base font family, specific size. Ensuring left alignment on all screens for consistency.
              className={`${FONT_FAMILY_PRIMARY} ${FONT_WEIGHT_NORMAL} text-2xl text-center lg:text-left mb-12`}
              style={{ color: colors.accent }}
            >
              {title}
            </h3>
          </RevealWrapper>
        )}

        <RevealWrapper animationClass="fade-in-text">
          <ul className="space-y-4 mb-12">
            {whyUsPoints.map((point, index) => (
              <li key={`why-us-${index}`} className="flex items-center space-x-6">
                <CheckCircle className="h-6 w-6 flex-shrink-0" style={{ color: colors.accent }} />
                <p
                  className={`${PARAGRAPH_CLASS} leading-relaxed text-center lg:text-left`}
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
