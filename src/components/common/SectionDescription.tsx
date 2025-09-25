/**
 * Componente reutilizable para mostrar descripciones de sección.
 * Permite recibir la descripción como string o array de strings y aplica animación de aparición.
 *
 * @component
 * @param {SectionDescriptionProps} props - Props del componente, incluyendo la descripción, clase y estilos opcionales.
 * @returns {JSX.Element}
 */
import React from "react";
import RevealWrapper from "../common/RevealWrapper";
import { GENERAL_SECTION_PARAGRAPH_DESCRIPTION_CLASS } from "../../constants/styles";


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
        className={`${GENERAL_SECTION_PARAGRAPH_DESCRIPTION_CLASS} text-white ${className || ''}`}
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
        className={`${GENERAL_SECTION_PARAGRAPH_DESCRIPTION_CLASS} text-white ${className || ''}`}
      >
        {description}
      </p>
      </RevealWrapper>
    );
  }
};

export default SectionDescription;
