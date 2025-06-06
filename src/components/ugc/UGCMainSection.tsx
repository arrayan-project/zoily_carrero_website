/**
 * Sección principal UGC.
 * Divide la pantalla en dos: izquierda con datos de usuario y derecha con imagen principal.
 *
 * @component
 * @param {UGCMainSectionProps} props - Props del componente, incluyendo la clave de imagen y las props para la sección izquierda.
 * @returns {JSX.Element}
 */
import React from "react";
import SmoothImage from "../smoothImages/SmoothImage";
import { UGCLeftSectionProps } from "./UGCLeftSection";
import UGCLeftSection from "./UGCLeftSection";
import { getImageObject } from "../../utils/getImageObject";

interface UGCMainSectionProps {
  imageKey: string;
  leftSectionProps: UGCLeftSectionProps;
}

const UGCMainSection: React.FC<UGCMainSectionProps> = ({
  imageKey,
  leftSectionProps,
}) => {
  const imageObject = getImageObject(imageKey);

  return (
    <section className="ugc-section-completa flex md:flex-row flex-col m-0 bg-gray-100 overflow-hidden shadow-md">
      <UGCLeftSection {...leftSectionProps} />
      {/* Right Section (Image) */}
      <div className="ugc-seccion-derecha md:w-1/2 w-full">
        <div className="aspect-[4/5] overflow-hidden w-full h-full">
          <SmoothImage
            src={imageObject?.webp}
            alt="Imagen UGC"
            className="ugc-image w-full h-full object-cover block"
            loading="lazy"
          />
        </div>
      </div>
    </section>
  );
};

export default UGCMainSection;
