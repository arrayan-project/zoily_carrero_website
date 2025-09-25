/**
 * Sección de ejemplos de contenido UGC en mockups de teléfono.
 * Muestra una grilla de imágenes dentro de marcos de teléfono, con animación de aparición.
 *
 * @component
 * @param {UGCPhoneExampleSectionProps} props - Props del componente, incluyendo el array de imágenes con claves y alt.
 * @returns {JSX.Element}
 */
import React from "react";
import PhoneImageContainer from "./PhoneImageContainer";
import RevealWrapper from "../common/RevealWrapper";

interface UGCPhoneExampleSectionProps {
  images: {
    phoneImageKey: string;
    contentImageKey: string;
    alt: string;
  }[];
}

const UGCPhoneExampleSection: React.FC<UGCPhoneExampleSectionProps> = ({
  images,
}) => {
  return (
    <section className="ugc-section ugc-section-images-example-png bg-transparent shadow-none rounded-none mt-10 md:mt-10 mb-24">
      <div className="ugc-right-section ugc-right-section-four-images-png flex flex-col md:flex-row justify-around items-center">
        <RevealWrapper animationClass="slide-in-right-animation">
          <div className="ugc-images-container-png p-3 grid grid-cols-2 md:grid-cols-2 xl:grid-cols-4 gap-2 w-full justify-around z-10">
            {images.map((image, index) => (
              <PhoneImageContainer
                key={index}
                phoneImageKey={image.phoneImageKey}
                contentImageKey={image.contentImageKey}
                alt={image.alt}
              />
            ))}
          </div>
        </RevealWrapper>
      </div>
    </section>
  );
};

export default UGCPhoneExampleSection;
