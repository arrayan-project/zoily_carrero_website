/**
 * Sección de imágenes para la página "Sobre mí".
 * Muestra una grilla responsive de imágenes optimizadas (AVIF/WebP) con placeholders
 * y animaciones de aparición para una carga visualmente atractiva.
 *
 * @component
 * @param {AboutImagesSectionProps} props - Propiedades para la sección de imágenes.
 * @property {Array<{key: string, alt: string}>} images - Array de objetos de imagen a mostrar.
 * @returns {JSX.Element | null} La sección de la grilla de imágenes o null si no hay imágenes para mostrar.
 */
import React from "react";
import useWindowSize from "../../hooks/useWindowSize";
import RevealWrapper from "../common/RevealWrapper";
import { getImageObject } from "../../utils/getImageObject";

interface ImageInfo {
  key: string;
  alt: string;
}

interface AboutImagesSectionProps {
  images: ImageInfo[];
  onImageClick: (index: number) => void;
}

// Componente interno para renderizar cada tarjeta de imagen y evitar repetición de código.
const ImageCard: React.FC<{
  image: ImageInfo;
  onClick: () => void;
}> = ({ image, onClick }) => {
  const imgObj = getImageObject(image.key);
  // Aplica el placeholder como fondo para una carga más suave
  const placeholderBgStyle = imgObj?.placeholder
    ? {
        backgroundImage: `url("${imgObj.placeholder}")`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }
    : {};

  return (
    <div
      className="aspect-[17/10] overflow-hidden rounded-lg shadow-xl cursor-pointer"
      style={placeholderBgStyle}
      onClick={onClick}
    >
      <picture>
        {imgObj?.avif && <source srcSet={imgObj.avif} type="image/avif" />}
        {imgObj?.webp && <source srcSet={imgObj.webp} type="image/webp" />}
        <img
          src={imgObj?.webp}
          alt={image.alt || "About image"}
          className="w-full h-full object-cover transform transition-transform duration-300 hover:scale-105"
          loading="lazy"
          onError={(e) => {
            (e.target as HTMLImageElement).src = "/img/default-image.png";
          }}
        />
      </picture>
    </div>
  );
};

const AboutImagesSection: React.FC<AboutImagesSectionProps> = React.memo(
  ({ images, onImageClick }) => {
    const { isMobileView } = useWindowSize();

    if (!images.length) return null;

    // Vista Móvil: Carrusel deslizable
    if (isMobileView) {
      return (
        <section className="mt-16">
          <div className="flex overflow-x-auto space-x-4 pb-4 scrollbar-hide snap-x snap-mandatory">
            {images.map((image, index) => (
              <div
                key={`about-img-mobile-${index}`}
                className="flex-shrink-0 w-4/5 snap-center"
              >
                <RevealWrapper animationClass="fade-in-up-animation">
                  <ImageCard image={image} onClick={() => onImageClick(index)} />
                </RevealWrapper>
              </div>
            ))}
          </div>
        </section>
      );
    }

    // Vista de Escritorio: Grilla de imágenes
    return (
      <section className="mt-24 lg:mt-32 grid grid-cols-1 md:grid-cols-5 gap-6">
        {images.map((image, index) => (
          <RevealWrapper
            key={`about-img-desktop-${index}`}
            animationClass="fade-in-up-animation"
          >
            <ImageCard image={image} onClick={() => onImageClick(index)} />
          </RevealWrapper>
        ))}
      </section>
    );
  }
);

export default AboutImagesSection;