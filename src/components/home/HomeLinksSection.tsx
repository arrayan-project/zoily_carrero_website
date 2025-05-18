import React from "react";
import { useNavigate } from "react-router-dom";
import RevealWrapper from "../common/RevealWrapper";
import { useTheme } from "../context/useThemeHook";

import { HEADING_1_CLASS, FONT_FAMILY_PRIMARY, COLOR_TEXT_WHITE, TEXT_CENTER } from "../../constants/styles";
interface Link {
  id: string;
  to: string;
  hash?: string;
  imageSrc: string;
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
            className={`${HEADING_1_CLASS} ${TEXT_CENTER} mb-12`}
            style={{ color: colors.accent }}
          >
            {title}
          </h2>
        </RevealWrapper>
        <RevealWrapper animationClass="fade-in-up-animation">
          <p className={`${FONT_FAMILY_PRIMARY} text-base mb-4`} style={{ color: colors.bannerTitle }}>
            {subtitle}
          </p>
        </RevealWrapper>
        <RevealWrapper animationClass="fade-in-up-animation">
          <p
            className={`${FONT_FAMILY_PRIMARY} text-base mb-24 md:mb-28`}
            style={{ color: colors.bannerTitle }}
          >
            {subtitle1}
          </p>
        </RevealWrapper>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {links.map((link) => (
            <RevealWrapper key={link.id} animationClass="fade-in-up-animation">
              <div
                className="relative w-full aspect-square overflow-hidden hover:shadow-lg transition-shadow duration-300 cursor-pointer group"
                onClick={() => handleClick(link)}
              >
                <img
                  src={link.imageSrc}
                  alt={link.alt}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                  loading="lazy"
                />
                <div
                  className="absolute bottom-0 left-0 w-full h-1/3 flex items-center justify-center transition-opacity duration-300 group-hover:bg-opacity-70"
                  style={{ backgroundColor: colors.bannerImageOverlay }}
                >
                  <p className={`${FONT_FAMILY_PRIMARY} ${COLOR_TEXT_WHITE} text-lg`}>{link.label}</p>
                </div>
              </div>
            </RevealWrapper>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HomeLinksSection;
