// src/components/contact/ContactInfoSection.tsx
import React from "react";
import { Mail, Phone, MapPin, Clock } from "../../assets/icons";
import RevealWrapper from "../common/RevealWrapper";
import { contactInfo } from "../../data/contactData"; 
import { useTheme } from "../context/useThemeHook";
import { HEADING_2_CLASS, FONT_FAMILY_PRIMARY, PARAGRAPH_CLASS } from "../../constants/styles";
import { getTextColorClassParagraph } from "../../utils/utils";

const ContactInfoSection: React.FC = () => {
  const { colors, theme } = useTheme();

  return (
    <section className="space-y-8">
      <div className={`rounded-lg shadow-sm p-2 md:p-8 `}>
        <RevealWrapper animationClass="fade-in-text">
          {contactInfo?.contactTitle && (
            <h2
              // Using HEADING_2_CLASS for consistency with section titles
              className={`${HEADING_2_CLASS} mb-6`}
              style={{ color: colors.accent }}
            >
              {contactInfo.contactTitle}
            </h2>
          )}
        </RevealWrapper>
        <RevealWrapper animationClass="fade-in-text">
        <div className="space-y-6" style={{ color: colors.text }}>
          {[
            {
              icon: <Phone className="w-6 h-6 text-pink-600" />,
              label: "Telefono",
              value: contactInfo?.phone,
            },
            {
              icon: <Mail className="w-6 h-6 text-pink-600" />,
              label: "Email",
              value: contactInfo?.email,
            },
            {
              icon: <MapPin className="w-6 h-6 text-pink-600" />,
              label: "Ubicación",
              value: contactInfo?.location
                ? `${contactInfo.location.street} <br /> ${contactInfo.location.city}`
                : null,
            },
            {
              icon: <Clock className="w-6 h-6 text-pink-600" />,
              label: "Horario",
              value: contactInfo?.schedule
                ? `${contactInfo.schedule.mondayToFriday} <br /> ${contactInfo.schedule.saturday} <br /> ${contactInfo.schedule.sunday}`
                : null,
            },
          ].map(
            ({ icon, label, value }) =>
              value && (
                <RevealWrapper animationClass="fade-in-text">
                  <div className="flex items-start space-x-4">
                    {icon}
                    <div>
                      <h3 className={`font-cinzel`}>{label}</h3>
                      <p
                        // Using PARAGRAPH_CLASS for consistency
                        className={`${PARAGRAPH_CLASS}`}
                        dangerouslySetInnerHTML={{ __html: value }}
                      />
                    </div>
                  </div>
                </RevealWrapper>
              )
          )}
        </div>
        </RevealWrapper>

        {/* Social Media Section - Moved here from its own component */}
        <div className={`rounded-lg shadow-sm p-2 md:p-8 mt-8`} style={{ backgroundColor: colors.background, color: colors.accent }}>
          <RevealWrapper animationClass="fade-in-text">
            {contactInfo?.followUsTitle && (
              <h2 className={`${HEADING_2_CLASS} mb-6`} style={{ backgroundColor: colors.background, color: colors.accent }}>
                {contactInfo.followUsTitle}
              </h2>
            )}
          </RevealWrapper>
          <div className="flex space-x-4">
            {[
              { platform: "Instagram", link: contactInfo?.socialMedia?.instagram },
              { platform: "Pinterest", link: contactInfo?.socialMedia?.pinterest },
              { platform: "Facebook", link: contactInfo?.socialMedia?.facebook }
            ].map(
              ({ platform, link }) =>
                link && (
                  <RevealWrapper animationClass="fade-in-text">
                    <a href={link} target="_blank" rel="noopener noreferrer" className={`${FONT_FAMILY_PRIMARY} ${getTextColorClassParagraph(theme)} hover:text-pink-600 transition-colors`} style={{ backgroundColor: colors.background }}>
                      {platform}
                    </a>
                  </RevealWrapper>
              )
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactInfoSection;
