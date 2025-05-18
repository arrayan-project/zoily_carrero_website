/* src/components/about/AboutImagesSection.tsx */
import React from "react";
import { aboutImages } from "../../data/aboutData";
import RevealWrapper from "../common/RevealWrapper";

const AboutImagesSection: React.FC = React.memo(() => {
  if (!aboutImages.length) return null;

  return (
    <section className="mt-24 lg:mt-32 grid grid-cols-1 md:grid-cols-3 gap-6">
      {aboutImages.map(({ src, alt }, index) => (
        <RevealWrapper
          key={`about-img-${index}`}
          animationClass="fade-in-up-animation"
        >
          <div className="aspect-[4/3] overflow-hidden rounded-lg shadow-xl">
            <picture>
              {/* Intenta cargar AVIF si está disponible y el navegador lo soporta */}
              {src.avif && <source srcSet={src.avif} type="image/avif" />}
              {/* Luego intenta cargar WebP si está disponible y el navegador lo soporta */}
              {src.webp && <source srcSet={src.webp} type="image/webp" />}
              {/* Fallback a la imagen WebP (o la que prefieras como base) para la etiqueta img */}
              {/* y un fallback final a default-image.png si todo falla */}
              <img
                src={src.webp} // O src.avif si prefieres que sea el intento principal de la etiqueta img
                alt={alt || "About image"}
                className="w-full h-full object-cover transform transition-transform duration-300 hover:scale-105"
                loading="lazy"
                onError={(e) => {
                  (e.target as HTMLImageElement).src = "/img/default-image.png";
                }}
              />
            </picture>
          </div>
        </RevealWrapper>
      ))}
    </section>
  );
});

export default AboutImagesSection;
