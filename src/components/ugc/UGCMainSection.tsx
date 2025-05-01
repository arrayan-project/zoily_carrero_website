// src/components/ugc/UGCMainSection.tsx
import React from "react";
import SmoothImage from "../smoothImages/SmoothImage";
import { UGCLeftSectionProps } from "./UGCLeftSection";
import UGCLeftSection from "./UGCLeftSection";

interface UGCMainSectionProps {
  imageSrc: string;
  leftSectionProps: UGCLeftSectionProps;
}

const UGCMainSection: React.FC<UGCMainSectionProps> = ({
  imageSrc,
  leftSectionProps,
}) => {
  return (
    <section className="ugc-section-completa flex md:flex-row flex-col m-0 bg-gray-100 overflow-hidden shadow-md">
        <UGCLeftSection {...leftSectionProps} />
      {/* Right Section (Image) */}
      <div className="ugc-seccion-derecha md:w-1/2 w-full">
        <SmoothImage
          src={imageSrc}
          alt="Imagen UGC"
          className="ugc-image h-full w-full object-cover block"
          loading="lazy"
        />
      </div>
    </section>
  );
};

export default UGCMainSection;
