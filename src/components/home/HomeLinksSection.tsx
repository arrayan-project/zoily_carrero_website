/**
 * Sección de enlaces destacados en el Home.
 * Muestra un título, subtítulos y una grilla de enlaces con imágenes y animaciones.
 *
 * @component
 * @param {HomeLinksSectionProps} props - Props del componente, incluyendo título, subtítulos y array de enlaces.
 * @returns {JSX.Element}
 */
import React from "react";
import { useNavigate } from "react-router-dom";
import RevealWrapper from "../common/RevealWrapper";
import { useTheme } from "../context/themeContext";;
import { HOME_LINKS_SECTION_TITLE_CLASS, HOME_LINKS_SECTION_SUBTITLE_CLASS, HOME_LINKS_SECTION_SUBTITLE_DETAIL_CLASS, HOME_LINKS_CARD_LABEL_CLASS } from "../../constants/styles";
import { getImageObject } from "../../utils/getImageObject";

interface Link {
  id: string;
  to: string;
  hash?: string;
  imageKey: string;
  alt: string;
  label: string;
}

interface HomeLinksSectionProps {
  title: string;
  subtitle: string;
  subtitle1: string;
  links: Link[];
}

const HomeLinksSection: React.FC<HomeLinksSectionProps> = ({
  title,
  subtitle,
  subtitle1,
  links,
}) => {
  const navigate = useNavigate();
  const { colors } = useTheme();

  const handleClick = (link: Link) => {
    const path = link.hash ? `${link.to}${link.hash}` : link.to;
    navigate(path);
  };

  return (
    <section
      className="py-16 px-4"
      style={{ backgroundColor: colors.background, color: colors.text }}
    >
      <div
        className="container mx-auto text-center mb-8 md:mb-18"
        style={{ color: colors.text }}
      >
        <RevealWrapper animationClass="fade-in-up-animation">
          <h2
            className={HOME_LINKS_SECTION_TITLE_CLASS}
            style={{ color: colors.accent }}
          >
            {title}
          </h2>
        </RevealWrapper>
        <RevealWrapper animationClass="fade-in-up-animation">
          <p
            className={HOME_LINKS_SECTION_SUBTITLE_CLASS}
            style={{ color: colors.bannerTitle }}
          >
            {subtitle}
          </p>
        </RevealWrapper>
        <RevealWrapper animationClass="fade-in-up-animation">
          <p
            className={HOME_LINKS_SECTION_SUBTITLE_DETAIL_CLASS}
            style={{ color: colors.bannerTitle }}
          >
            {subtitle1}
          </p>
        </RevealWrapper>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-8">
          {links.map((link) => {
            const imageObject = getImageObject(link.imageKey);
            return (
              <RevealWrapper
                key={link.id}
                animationClass="fade-in-up-animation"
              >
                <div
                  className="relative w-full aspect-square overflow-hidden hover:shadow-lg transition-shadow duration-300 cursor-pointer group"
                  onClick={() => handleClick(link)}
                >
                  <img
                    src={imageObject.webp}
                    alt={link.alt}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                    loading="lazy"
                  />
                  <div
                    className="absolute bottom-0 left-0 w-full h-1/3 flex items-center justify-center transition-opacity duration-300 group-hover:bg-opacity-70"
                    style={{ backgroundColor: colors.bannerImageOverlay }}
                  >
                    <p
                    className={HOME_LINKS_CARD_LABEL_CLASS}
                    >
                      {link.label}
                    </p>
                  </div>
                </div>
              </RevealWrapper>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default HomeLinksSection;
