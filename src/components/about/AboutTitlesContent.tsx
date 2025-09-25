// src/components/about/AboutTitleContent.tsx
/**
 * Carga subtitulo y titulo principal debajo del hero.
 * Puede mostrar títulos por defecto o personalizados a través de props.
 *
 * @component
 * @param {AboutTitlesContentProps} props - Propiedades opcionales para personalizar los títulos.
 * @property {string} [subtitle] - Subtítulo personalizado.
 * @property {string} [title] - Título principal personalizado.
 * @property {string} [title1] - Segunda línea opcional para el título principal.
 * @property {string} [bigTitle] - Título grande decorativo a la derecha.
 * @returns {JSX.Element} El layout del contenido principal renderizado.
 */
import React from 'react';
import { aboutInfo } from '../../data/aboutData';
import { useTheme } from '../context/themeContext';
import RevealWrapper from '../common/RevealWrapper';
import { HEADING_4_CLASS,FONT_FAMILY_PRIMARY } from '../../constants/styles';

interface AboutTitlesContentProps {
  subtitle?: string;
  title?: string;
  title1?: string;
  bigTitle?: string;
}

const AboutTitlesContent: React.FC<AboutTitlesContentProps> = React.memo(
  ({
    subtitle: propSubtitle,
    title: propTitle,
    title1: propTitle1,
    bigTitle: propBigTitle,
  }) => {
    const { colors } = useTheme();
    const {
      subtitle: defaultSubtitle,
      title: defaultTitle,
      title1: defaultTitle1,
    } = aboutInfo || {};

    const subtitle = propSubtitle ?? defaultSubtitle;
    const title = propTitle ?? defaultTitle;
    const title1 = propTitle1 ?? defaultTitle1; // No fallback for title1, it's optional
    const bigTitle = propBigTitle ?? defaultTitle;

    return (
      <section>
        <div className="text-left mb-8 md:mb-0 flex-shrink-0">
          {subtitle && (
            <RevealWrapper animationClass="fade-in-up-animation">
              <p className={`${HEADING_4_CLASS} text-sm lg:text-base xl:text-lg mb-2`} style={{ color: colors.text }}>
                {subtitle}
              </p>
            </RevealWrapper>
          )}
          {title && (
            <RevealWrapper animationClass="fade-in-up-animation">
              <h2 className={`${FONT_FAMILY_PRIMARY} text-2xl lg:text-4xl xl:text-5xl`} style={{ color: colors.secondaryText }}>
                {title}
              </h2>
            </RevealWrapper>
          )}
          {title1 && (
            <RevealWrapper animationClass="fade-in-up-animation">
              <h2 className={`${FONT_FAMILY_PRIMARY} text-2xl lg:text-4xl xl:text-5xl`} style={{ color: colors.text }}>
                {title1}
              </h2>
            </RevealWrapper>
          )}
        </div>

        {bigTitle && (
          <div className="text-right">
            <RevealWrapper animationClass="fade-in-up-animation">
              <h3 className={`${FONT_FAMILY_PRIMARY} text-4xl md:text-9xl whitespace-nowrap`} style={{ color: `${colors.accent}20` }}>
                {bigTitle}
              </h3>
            </RevealWrapper>
          </div>
        )}
      </section>
    );
  }
);

export default AboutTitlesContent;

