/**
 * Componente que muestra una imagen de contenido dentro de un marco de teléfono.
 * Superpone la imagen del contenido debajo de la imagen del teléfono usando posicionamiento absoluto.
 *
 * @component
 * @param {PhoneImageContainerProps} props - Props del componente, incluyendo las claves de imagen y el alt.
 * @returns {JSX.Element}
 */
import React from "react";
import SmoothImage from "../smoothImages/SmoothImage";
import { getImageObject } from "../../utils/getImageObject";

interface PhoneImageContainerProps {
  phoneImageKey: string;
  contentImageKey: string;
  alt: string;
}

const PhoneImageContainer: React.FC<PhoneImageContainerProps> = ({
  phoneImageKey,
  contentImageKey,
  alt,
}) => {
  const phoneObj = getImageObject(phoneImageKey);
  const contentObj = getImageObject(contentImageKey);

  return (
    <div className="relative w-full h-full flex flex-col items-center">
      {/* Imagen de contenido: fondo */}
      <div className="absolute inset-0 flex items-center justify-center z-0">
        <SmoothImage
          src={contentObj?.webp}
          alt={alt}
          className="ugc-image-example-png w-[91.7%] h-[96.9%] rounded-[16px] md:w-[94%] md:h-[99%] md:rounded-[50px] object-cover aspect-[0.7]"
          loading="lazy"
        />
      </div>
      {/* Imagen del phone: encima */}
      <SmoothImage
        src={phoneObj?.webp}
        alt="Phone frame"
        className="w-full h-auto object-contain relative z-10"
        loading="lazy"
      />
    </div>
  );
};

export default PhoneImageContainer;