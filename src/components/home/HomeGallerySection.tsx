/**
 * Sección de galería en el Home.
 * Muestra información de la galería, imagen destacada y botón para ver más, con animaciones, placeholder
 * y formatos AVIF/WebP. Se asegura un contenedor con “padding-top hack” para reservar espacio y evitar CLS.
 *
 * @component
 */
import React, { useState, useEffect } from "react";
import RevealWrapper from "../common/RevealWrapper";
import { useNavigate } from "react-router-dom";
import { useTheme } from "../../components/context/themeContext";
import {
  HOME_GALLERY_SECTION_ITEM_TITLE_CLASS,
  HOME_GALLERY_SECTION_ITEM_DESCRIPTION_CLASS,
  HOME_GALLERY_SECTION_BUTTON_CLASS,
} from "../../constants/styles";
import { getImageObject } from "../../utils/getImageObject";

interface HomeGallerySectionProps {
  imageKey: string;
  alt: string;
  gallery: {
    title: string;
    description: string;
  }[];
}

const HomeGallerySection: React.FC<HomeGallerySectionProps> = ({
  imageKey,
  alt,
  gallery,
}) => {
  const navigate = useNavigate();
  const { colors } = useTheme();
  const imageObject = getImageObject(imageKey);
  const [isLoaded, setIsLoaded] = useState(false);

  if (!imageObject) {
    console.error("Error: Image key not found in images object", { imageKey });
    return null;
  }

  const { avif, webp, placeholder, width, height } = imageObject;

  // Calcular padding-top en porcentaje para reservar espacio según proporción (height/width)
  const paddingTopPercent =
    width && height ? `${(height / width) * 100}%` : "56.25%"; // fallback 16:9

  // Estilo inline para contenedor: placeholder + padding-top
  const containerStyle: React.CSSProperties = {
    backgroundImage: placeholder ? `url("${placeholder}")` : undefined,
    backgroundSize: "cover",
    backgroundPosition: "center",
    paddingTop: paddingTopPercent,
  };

  useEffect(() => {
    setIsLoaded(false);
  }, [imageKey]);

  const handleViewMoreClick = () => {
    navigate("/gallery#gallery");
  };

  return (
    <section
      className="py-1 md:py-1 md:px-1"
      style={{ backgroundColor: colors.background, color: colors.section }}
    >
      <div className="mx-auto w-full">
        <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-8">
          {/* Texto */}
          <div className="flex flex-col items-center justify-center gap-8 text-center">
            {gallery.map((galleryItem, index) => (
              <div key={index} className="w-full">
                <div className="px-6 py-8 flex flex-col items-center justify-center">
                  <RevealWrapper animationClass="slide-in-left-animation">
                    <h3
                      className={HOME_GALLERY_SECTION_ITEM_TITLE_CLASS}
                      style={{ color: colors.accent }}
                    >
                      {galleryItem.title}
                    </h3>
                  </RevealWrapper>
                  <RevealWrapper animationClass="slide-in-left-animation">
                    <p
                      className={HOME_GALLERY_SECTION_ITEM_DESCRIPTION_CLASS}
                      style={{ color: colors.bannerTitle }}
                    >
                      {galleryItem.description}
                    </p>
                  </RevealWrapper>
                  <RevealWrapper animationClass="slide-in-left-animation">
                    <button
                      type="button"
                      aria-label="Abrir Galería de imágenes"
                      onClick={handleViewMoreClick}
                      className={HOME_GALLERY_SECTION_BUTTON_CLASS}
                      style={{
                        minWidth: "fit-content",
                        borderColor: colors.bannerTitle,
                      }}
                    >
                      VER MÁS
                    </button>
                  </RevealWrapper>
                </div>
              </div>
            ))}
          </div>

          {/* Imagen optimizada */}
          <div className="overflow-hidden">
            <RevealWrapper animationClass="slide-in-right-animation">
              <div className="relative w-full" style={containerStyle}>
                <picture className="absolute inset-0 w-full h-full">
                  {/* Para pantallas pequeñas */}
                  <source
                    media="(max-width: 639px)"
                    type="image/avif"
                    srcSet={avif}
                  />
                  <source
                    media="(max-width: 639px)"
                    type="image/webp"
                    srcSet={webp}
                  />

                  {/* Para pantallas ≥ 640px */}
                  <source
                    media="(min-width: 640px)"
                    type="image/avif"
                    srcSet={avif}
                  />
                  <source
                    media="(min-width: 640px)"
                    type="image/webp"
                    srcSet={webp}
                  />

                  {/* Fallback */}
                  <img
                    src={webp}
                    alt={alt}
                    className={`absolute inset-0 w-full h-full object-cover rounded-base shadow-md
                      transition-opacity duration-500 ease-in-out ${
                        isLoaded ? "opacity-100" : "opacity-0"
                      }`}
                    loading="lazy"
                    onLoad={() => setIsLoaded(true)}
                  />
                </picture>
              </div>
            </RevealWrapper>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeGallerySection;
