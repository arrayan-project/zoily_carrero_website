// src/components/common/SectionDescription.tsx
import React from "react";
import RevealWrapper from '../common/RevealWrapper';


interface SectionDescriptionProps {
  description: string[] | string; // Modificamos el tipo de la prop description
  className?: string;
    style?: React.CSSProperties;
}

const SectionDescription: React.FC<SectionDescriptionProps> = ({
  description,
  className,
  style,
}) => {


  //Verificamos si es un array o un string
  if (Array.isArray(description)) {
    return (
      <RevealWrapper animationClass="fade-in-up">
      <p
        className={`text-center text-sm md:text-sm font-light text-white tracking-wide ${className}`}
        style={style}
      >
        {description.map((line, index) => (
          <React.Fragment key={index}>
            {line}
            {index < description.length - 1 && <br />}
          </React.Fragment>
        ))}
      </p>
      </RevealWrapper>
    );
  } else {
    return (
      <RevealWrapper animationClass="fade-in-up">
      <p
        className={`text-center text-sm md:text-sm font-light text-white tracking-wide ${className}`} 
      >
        {description}
      </p>
      </RevealWrapper>
    );
  }
};

export default SectionDescription;
