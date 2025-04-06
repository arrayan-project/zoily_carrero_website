// src/components/common/SectionDescription.tsx
import React from "react";
import { useTheme } from "../context/useThemeHook";
import AnimationWrapper from './AnimationLayer';


interface SectionDescriptionProps {
  description: string[] | string; // Modificamos el tipo de la prop description
  className?: string;
}

const SectionDescription: React.FC<SectionDescriptionProps> = ({
  description,
  className,
}) => {
  const { colors } = useTheme();

  //Verificamos si es un array o un string
  if (Array.isArray(description)) {
    return (
     <AnimationWrapper animationClassName="fade-in-up">
      <p
        className={`text-center text-sm md:text-base font-light tracking-wide ${className}`} style={{ color: colors.bannerTitle }}
      >
        {description.map((line, index) => (
          <React.Fragment key={index}>
            {line}
            {index < description.length - 1 && <br />}
          </React.Fragment>
        ))}
      </p>
      </AnimationWrapper>
    );
  } else {
    return (
        <AnimationWrapper animationClassName="fade-in-up">
      <p
        className={`text-center text-sm md:text-base font-light tracking-wide ${className}`} style={{ color: colors.bannerTitle }}
      >
        {description}
      </p>
      </AnimationWrapper>
    );
  }
};

export default SectionDescription;
