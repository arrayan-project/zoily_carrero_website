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
import { CONTACT_PAGE_MAIN_TITLE_CLASS } from "../../constants/styles";

const ContactMainTitle: React.FC = () => {
  const { colors} = useTheme();

  return (
    <RevealWrapper animationClass="fade-in-text">
      {contactInfo?.title && (
        <h1
        className={CONTACT_PAGE_MAIN_TITLE_CLASS} style={{ backgroundColor: colors.background, color: colors.accent }}>
          {contactInfo.title}
        </h1>
      )}
    </RevealWrapper>
  );
};

export default ContactMainTitle;
