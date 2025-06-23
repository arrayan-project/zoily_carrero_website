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
import { useTheme } from "../context/themeContext";
import {
  HOME_LINKS_SECTION_TITLE_CLASS,
  HOME_LINKS_SECTION_SUBTITLE_CLASS,
  HOME_LINKS_SECTION_SUBTITLE_DETAIL_CLASS,
  HOME_LINKS_CARD_LABEL_CLASS,
} from "../../constants/styles";
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
      className="mb-16 md:mb-32" // Reducido el margen inferior
      style={{ backgroundColor: colors.background, color: colors.text }}
    >
      {/* Títulos y subtítulos */}
      <div
        className="container mx-auto text-center mt-24 mb-8 md:mb-18"
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
      </div>

      <div className="w-full"> {/* Aseguramos que ocupe todo el ancho, margen inferior se maneja en la section */}
        {/* --- DESKTOP LAYOUT (md and up) --- */}
        <div className="hidden md:grid md:grid-cols-2 md:h-[90vh]">
          {/* Columna Izquierda: Servicios (asumiendo links[0]) */}
          {links[0] && (() => {
            const link = links[0];
            const imageObject = getImageObject(link.imageKey);
            if (!imageObject) return null;
            return (
              <div
                key={link.id + "-desktop"}
                onClick={() => handleClick(link)}
                className="cursor-pointer group relative w-full h-full overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 flex items-center justify-center"
              >
                <img
                  src={imageObject.webp}
                  alt={link.alt}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                  loading="lazy"
                />
                <div
                  className="absolute inset-0 bg-black opacity-20 group-hover:opacity-50 transition-opacity duration-300"
                />
                <p className={`${HOME_LINKS_CARD_LABEL_CLASS} text-center !text-2xl md:!text-5xl text-white relative z-10 transition-transform duration-300 group-hover:scale-110`}
                   style={{ textShadow: '0px 2px 4px rgba(0,0,0,0.7)' }}
                >
                  {link.label}
                </p>
              </div>
            );
          })()}

          {/* Columna Derecha: Cursos y UGC (asumiendo links[1] y links[2]) */}
          {links.length > 2 && (
            <div className="flex flex-col h-full">
              {/* Fila Superior Derecha: Cursos */}
              {links[1] && (() => {
                const link = links[1];
                const imageObject = getImageObject(link.imageKey);
                if (!imageObject) return null;
                return (
                  <div
                    key={link.id + "-desktop"}
                    onClick={() => handleClick(link)}
                    className="cursor-pointer group relative w-full h-1/2 overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 flex items-center justify-center"
                  >
                    <img
                      src={imageObject.webp}
                      alt={link.alt}
                      className="absolute inset-0 w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                      loading="lazy"
                    />
                    <div
                      className="absolute inset-0 bg-black opacity-20 group-hover:opacity-50 transition-opacity duration-300"
                    />
                    <p className={`${HOME_LINKS_CARD_LABEL_CLASS} text-center !text-xl md:!text-3xl text-white relative z-10 transition-transform duration-300 group-hover:scale-110`}
                       style={{ textShadow: '0px 2px 4px rgba(0,0,0,0.7)' }}
                    >
                      {link.label}
                    </p>
                  </div>
                );
              })()}

              {/* Fila Inferior Derecha: UGC */}
              {links[2] && (() => {
                const link = links[2];
                const imageObject = getImageObject(link.imageKey);
                if (!imageObject) return null;
                return (
                  <div
                    key={link.id + "-desktop"}
                    onClick={() => handleClick(link)}
                    className="cursor-pointer group relative w-full h-1/2 overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 flex items-center justify-center"
                  >
                    <img
                      src={imageObject.webp}
                      alt={link.alt}
                      className="absolute inset-0 w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                      loading="lazy"
                    />
                    <div
                      className="absolute inset-0 bg-black opacity-20 group-hover:opacity-50 transition-opacity duration-300"
                    />
                    <p className={`${HOME_LINKS_CARD_LABEL_CLASS} text-center !text-xl md:!text-3xl text-white relative z-10 transition-transform duration-300 group-hover:scale-110`}
                       style={{ textShadow: '0px 2px 4px rgba(0,0,0,0.7)' }}
                    >
                      {link.label}
                    </p>
                  </div>
                );
              })()}
            </div>
          )}
        </div>

        {/* --- MOBILE LAYOUT (sm and down) --- */}
        {/* Se mantiene el layout móvil original ya que la solicitud se centró en el de escritorio 
            y el móvil ya tiene un diseño diferente que podría ser intencional.
            Si deseas cambiar el móvil también para que el texto esté centrado en la imagen,
            se necesitarían ajustes similares a los del escritorio.
        */}
        <div className="md:hidden grid grid-cols-1"> {/* Aumentado el gap para móvil */}
          {links.map((link, ) => {
            const imageObject = getImageObject(link.imageKey);
            if (!imageObject) return null;

            return (
              <div
                key={link.id + "-mobile"}
                onClick={() => handleClick(link)}
                className="cursor-pointer group relative w-full h-[60vw] sm:h-[50vw] overflow-hidden shadow-lg flex items-center justify-center"
              >
                <img
                  src={imageObject.webp}
                  alt={link.alt}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                  loading="lazy"
                />
                <div
                  className="absolute inset-0 bg-black opacity-20 group-hover:opacity-50 transition-opacity duration-300"
                />
                <p
                  className={`${HOME_LINKS_CARD_LABEL_CLASS} !text-xl text-white relative z-10 transition-transform duration-300 group-hover:scale-110 text-center px-4`}
                  style={{ textShadow: '0px 1px 3px rgba(0,0,0,0.7)' }}
                >
                  {link.label}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default HomeLinksSection;