import React, { useState, useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import RevealWrapper from "../common/RevealWrapper";
import { useTheme } from "../context/themeContext";
import { HEADING_4_CLASS, FONT_FAMILY_PRIMARY } from "../../constants/styles";
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
  links: Link[];
}

const HomeLinksSection: React.FC<HomeLinksSectionProps> = ({
  title,
  subtitle,
  links,
}) => {
  const navigate = useNavigate();
  const { colors } = useTheme();
  const sliderRef = useRef<HTMLDivElement>(null);
  const [isAtStart, setIsAtStart] = useState(true);
  const [isAtEnd, setIsAtEnd] = useState(false);
  const [isLeftHovered, setIsLeftHovered] = useState(false);
  const [isRightHovered, setIsRightHovered] = useState(false);

  const handleClick = (link: Link) => {
    const path = link.hash ? `${link.to}${link.hash}` : link.to;
    navigate(path);
  };

  const handleScroll = (direction: "left" | "right") => {
    if (sliderRef.current) {
      const scrollAmount = sliderRef.current.clientWidth * 0.8; // aún desplazamos 80% del viewport
      sliderRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };

  useEffect(() => {
    const slider = sliderRef.current;
    if (!slider) return;

    const checkScrollPosition = () => {
      const { scrollLeft, scrollWidth, clientWidth } = slider;
      setIsAtStart(scrollLeft < 10);
      setIsAtEnd(scrollLeft + clientWidth >= scrollWidth - 10);
      if (scrollWidth <= clientWidth) setIsAtEnd(true);
    };

    checkScrollPosition();
    slider.addEventListener("scroll", checkScrollPosition);
    window.addEventListener("resize", checkScrollPosition);

    return () => {
      slider.removeEventListener("scroll", checkScrollPosition);
      window.removeEventListener("resize", checkScrollPosition);
    };
  }, [links]);

  return (
    <section
      className="py-16 px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16"
      style={{ backgroundColor: colors.background, color: colors.text }}
    >
      <div className="flex justify-between items-start mb-8 md:mb-12 flex-nowrap gap-36">
        {/* Títulos originales a la izquierda */}
        <div className="text-left mb-8 md:mb-0 flex-shrink-0">
          <RevealWrapper animationClass="fade-in-up-animation">
            <p className={`${HEADING_4_CLASS} text-base mb-4`} style={{ color: colors.text }}>
              {subtitle}
            </p>
          </RevealWrapper>
          <RevealWrapper animationClass="fade-in-up-animation">
                <h2 className={`${FONT_FAMILY_PRIMARY} text-2xl lg:text-4xl xl:text-5xl`} style={{ color: colors.text }}>
              {title}
            </h2>
          </RevealWrapper>
        </div>

        {/* Título grande a la derecha */}
        <div className="text-right">
          <RevealWrapper animationClass="fade-in-up-animation">
            <h3 className={`${FONT_FAMILY_PRIMARY} text-4xl md:text-9xl whitespace-nowrap`} 
                style={{ color:  `${colors.accent}20` }}
                >{title}</h3>
          </RevealWrapper>
        </div>
      </div>
        {/* Vista para Móvil */}
        <div className="grid grid-cols-1 md:hidden gap-8">
          {links.map((link) => {
            const img = getImageObject(link.imageKey);
            return (
              <RevealWrapper key={link.id} animationClass="fade-in-up-animation">
                <div className="cursor-pointer group" onClick={() => handleClick(link)}>
                  <div className="w-full aspect-[5/3] overflow-hidden hover:shadow-lg transition-shadow duration-300">
                    <img
                      src={img.webp}
                      alt={link.alt}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                      loading="lazy"
                    />
                  </div>
                  <p
                    className={`${FONT_FAMILY_PRIMARY} text-lg mt-4 text-left`}
                    style={{ color: colors.text }}
                  >
                    {link.label}
                  </p>
                </div>
              </RevealWrapper>
            );
          })}
        </div>

        {/* Vista para Escritorio (Slider) */}
        <div className="hidden md:block relative">
          <div
            ref={sliderRef}
            className="flex overflow-x-auto snap-x snap-mandatory scroll-smooth no-scrollbar"
          >
            {links.map((link) => {
              const img = getImageObject(link.imageKey);
              return (
                <div
                  key={link.id}
                  className="flex-shrink-0 w-full md:w-[40%] snap-start px-4"
                >
                  <div className="cursor-pointer group" onClick={() => handleClick(link)}>
                    <div className="w-full aspect-[3/2] overflow-hidden hover:shadow-lg transition-shadow duration-300">
                      <img
                        src={img.webp}
                        alt={link.alt}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                        loading="lazy"
                      />
                    </div>
                    <p
                      className={`${FONT_FAMILY_PRIMARY} text-2xl mt-4 text-left`}
                      style={{ color: colors.text }}
                    >
                      {link.label}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Controles */}
          {!isAtStart && (
            <button
              onClick={() => handleScroll("left")}
              onMouseEnter={() => setIsLeftHovered(true)}
              onMouseLeave={() => setIsLeftHovered(false)}
              className="absolute top-1/2 -translate-y-1/2 left-0 rounded-full p-2 shadow-md z-10 transition-colors duration-300"
              style={{
                backgroundColor: isLeftHovered ? colors.accent : colors.bannerBackground,
              }}
              aria-label="Anterior"
            >
              {/* Icono flecha izquierda */}
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" style={{ color: isLeftHovered ? colors.background : colors.text }} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
          )}
          {!isAtEnd && (
            <button
              onClick={() => handleScroll("right")}
              onMouseEnter={() => setIsRightHovered(true)}
              onMouseLeave={() => setIsRightHovered(false)}
              className="absolute top-1/2 -translate-y-1/2 right-0 rounded-full p-2 shadow-md z-10 transition-colors duration-300"
              style={{
                backgroundColor: isRightHovered ? colors.accent : colors.bannerBackground,
              }}
              aria-label="Siguiente"
            >
              {/* Icono flecha derecha */}
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" style={{ color: isRightHovered ? colors.background : colors.text }} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          )}
        </div>
    </section>
  );
};

export default HomeLinksSection;
