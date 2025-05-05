// src/components/contact/ContactMainTitle.tsx
import React from 'react';
import RevealWrapper from "../../common/RevealWrapper";
import { contactInfo } from '../../../data/contactData';
import { useTheme } from '../../context/useThemeHook';

const ContactMainTitle: React.FC = () => {
  const { colors} = useTheme();

  return (
    <RevealWrapper animationClass="fade-in-text">
      {contactInfo?.title && (
        <h1 className={`text-2xl md:text-5xl font-cinzel font-extralight text-center mb-24 md:py-10 tracking-wider mt-10`}
        style={{ backgroundColor: colors.background, color: colors.accent }}>
          {contactInfo.title}
        </h1>
      )}
    </RevealWrapper>
  );
};

export default ContactMainTitle;
