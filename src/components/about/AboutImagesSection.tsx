/**
 * Sección de imágenes para la página "Sobre mí".
 * Muestra una grilla de imágenes optimizadas con placeholders y animaciones de aparición.
 *
 * @component
 * @returns {JSX.Element | null}
 */
import React from "react";
import { aboutImages } from "../../data/aboutData";
import RevealWrapper from "../common/RevealWrapper";
import { getImageObject } from "../../utils/getImageObject";

const AboutImagesSection: React.FC = React.memo(() => {
  if (!aboutImages.length) return null;

  return (
    <section className="mt-24 lg:mt-32 grid grid-cols-1 md:grid-cols-3 gap-6">
      {aboutImages.map(({ key, alt }, index) => {
        const imgObj = getImageObject(key);
        // Aplica el placeholder como fondo
        const placeholderBgStyle = imgObj?.placeholder
          ? {
              backgroundImage: `url("${imgObj.placeholder}")`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
            }
          : {};

        return (
          <RevealWrapper
            key={`about-img-${index}`}
            animationClass="fade-in-up-animation"
          >
            <div
              className="aspect-[17/10] overflow-hidden rounded-lg shadow-xl"
              style={placeholderBgStyle}
            >
              <picture>
                {imgObj?.avif && (
                  <source srcSet={imgObj.avif} type="image/avif" />
                )}
                {imgObj?.webp && (
                  <source srcSet={imgObj.webp} type="image/webp" />
                )}
                <img
                  src={imgObj?.webp}
                  alt={alt || "About image"}
                  className="w-full h-full object-cover transform transition-transform duration-300 hover:scale-105"
                  loading="lazy"
                  onError={(e) => {
                    (e.target as HTMLImageElement).src =
                      "/img/default-image.png";
                  }}
                />
              </picture>
            </div>
          </RevealWrapper>
        );
      })}
    </section>
  );
});

export default AboutImagesSection;