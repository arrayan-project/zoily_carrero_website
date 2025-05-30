/**
 * Título principal de la sección de contacto.
 * Muestra el título con animación y estilos adaptados al tema actual.
 *
 * @component
 * @returns {JSX.Element}
 */
import React from 'react';
import RevealWrapper from "../common/RevealWrapper";
import { contactInfo } from '../../data/contactData';
import { useTheme } from '../context/themeContext';
import { HEADING_1_CLASS } from "../../constants/styles";

const ContactMainTitle: React.FC = () => {
  const { colors} = useTheme();

  return (
    <RevealWrapper animationClass="fade-in-text">
      {contactInfo?.title && (
        <h1
        className={`${HEADING_1_CLASS} text-center mb-24 md:py-10 mt-10`} style={{ backgroundColor: colors.background, color: colors.accent }}>
          {contactInfo.title}
        </h1>
      )}
    </RevealWrapper>
  );
};

export default ContactMainTitle;
