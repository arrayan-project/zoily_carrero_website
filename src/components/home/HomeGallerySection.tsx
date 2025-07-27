/**
 * Sección de galería en el Home.
 * Muestra información de la galería, imagen destacada y botón para ver más, con animaciones y estilos adaptados al tema.
 *
 * @component
 * @param {HomeGallerySectionProps} props - Props del componente, incluyendo la imagen, alt y el array de galerías.
 * @returns {JSX.Element}
 */
import React, { useState } from "react";
import SmoothImage from "../smoothImages/SmoothImage";
import RevealWrapper from "../common/RevealWrapper";
import { useNavigate } from "react-router-dom";
import { useTheme } from "../../components/context/themeContext";
import {
  HEADING_4_CLASS,
  FONT_FAMILY_PRIMARY,
  PARAGRAPH_CLASS,
  TEXT_SIZE_BASE,
} from "../../constants/styles";
import { getImageObject } from "../../utils/getImageObject";

interface HomeGallerySectionProps {
  imageKey: string;
  alt: string;
  subtitle3: string;
  gallery: {
    title: string;
    title1: string;
    description: string;
  }[];
}

const HomeGallerySection: React.FC<HomeGallerySectionProps> = ({
  imageKey,
  alt,
  subtitle3,
  gallery,
}) => {
  const navigate = useNavigate();
  const { colors } = useTheme();
  const imageObject = getImageObject(imageKey);
  const [isButtonHovered, setButtonHovered] = useState(false);

  const handleViewMoreClick = () => {
    navigate("/gallery#gallery");
  };

  return (
    <section
      className={`py-4 md:py-16 md:px-4`}
      style={{ backgroundColor: colors.background, color: colors.section }}
    >
      <div className={`mx-auto w-full`}>
        {/* Usamos items-stretch para que ambas columnas tengan la misma altura */}
        <div className="grid grid-cols-1 md:grid-cols-2 items-stretch gap-8">
          {/* Columna de Texto: usamos flexbox para posicionar el título al final */}
          <div className="relative z-0 flex flex-col py-8 pl-8 pr-4 md:pl-20 md:pr-10">
            {/* Contenido principal que empuja el título hacia abajo */}
            <div className="flex-grow">
              {gallery.map((galleryItem, index) => (
                <div key={index}>
                  <RevealWrapper animationClass="slide-in-left-animation">
                    <p
                      className={`${HEADING_4_CLASS} text-base mb-4`}
                      style={{ color: colors.text }}
                    >
                      {subtitle3}
                    </p>
                  </RevealWrapper>
                  <RevealWrapper animationClass="slide-in-left-animation">
                    <h2
                      className={`${FONT_FAMILY_PRIMARY} text-2xl lg:text-4xl xl:text-5xl`}
                      style={{ color: colors.secondaryText }}
                    >
                      {galleryItem.title}
                    </h2>
                    <h2
                      className={`${FONT_FAMILY_PRIMARY} text-2xl lg:text-4xl xl:text-5xl mb-12`}
                      style={{ color: colors.text }}
                    >
                      {galleryItem.title1}
                    </h2>
                  </RevealWrapper>

                  <RevealWrapper animationClass="slide-in-left-animation">
                    <p
                      className={`${PARAGRAPH_CLASS} mb-12`}
                      style={{ color: colors.text }}
                    >
                      {galleryItem.description}
                    </p>
                  </RevealWrapper>

                  <RevealWrapper animationClass="slide-in-left-animation">
                    <button
                      type="button"
                      aria-label="Abrir Galeria de imagenes"
                      onClick={handleViewMoreClick}
                      onMouseEnter={() => setButtonHovered(true)}
                      onMouseLeave={() => setButtonHovered(false)}
                      className={`px-12 border py-4 md:px-12 md:py-3 ${FONT_FAMILY_PRIMARY} ${TEXT_SIZE_BASE} transition-colors duration-300`}
                      style={{
                        minWidth: "fit-content",
                        borderColor: colors.border,
                        color: isButtonHovered
                          ? colors.background
                          : colors.text,
                        backgroundColor: isButtonHovered
                          ? colors.accent
                          : "transparent",
                      }}
                    >
                      VER MÁS
                    </button>
                  </RevealWrapper>
                </div>
              ))}
            </div>

            {/* Título decorativo al final de la columna */}
            <div className="mt-auto pt-12">
              <RevealWrapper animationClass="fade-in-up-animation">
                <h3
                  className={`${FONT_FAMILY_PRIMARY} text-4xl md:text-8xl lg:text-9xl whitespace-nowrap -ml-4`}
                  style={{ color: `${colors.accent}20` }}
                >
                  {gallery[0]?.title} {gallery[0]?.title1}
                </h3>
              </RevealWrapper>
            </div>
          </div>

          {/* Columna de Imagen: con z-index mayor para que se superponga al texto si es necesario */}
          <div className="relative z-10 overflow-hidden">
            <RevealWrapper animationClass="slide-in-right-animation">
              <SmoothImage
                src={imageObject.webp}
                alt={alt}
                className="w-full h-full object-cover rounded-base shadow-md transition-transform duration-500 ease-in-out hover:scale-110"
                disableInternalTransition={true}
                loading="lazy"
              />
            </RevealWrapper>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeGallerySection;
