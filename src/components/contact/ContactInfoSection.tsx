/**
 * Sección de información de contacto.
 * Muestra datos de contacto, horario y enlaces a redes sociales, adaptando los colores al tema actual.
 *
 * @component
 * @returns {JSX.Element}
 */
import React from "react";
import { Mail, Phone, MapPin, Clock } from "../../assets/icons";
import RevealWrapper from "../common/RevealWrapper";
import { contactInfo } from "../../data/contactData"; 
import { useTheme } from "../context/themeContext";
import { HEADING_4_CLASS, FONT_FAMILY_PRIMARY, PARAGRAPH_CLASS } from "../../constants/styles";

const ContactInfoSection: React.FC = () => {
  const { colors } = useTheme();

  return (
    <section className="space-y-8">
      <div className="rounded-lg shadow-sm p-2 md:p-8" style={{ background: colors.section }}>
        <RevealWrapper animationClass="fade-in-text">
          {contactInfo?.contactTitle && (
            <h2
              className={`${HEADING_4_CLASS} mb-6`}
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
                icon: <Phone className="w-6 h-6" style={{ color: colors.accent }} />,
                label: "Telefono",
                value: contactInfo?.phone,
              },
              {
                icon: <Mail className="w-6 h-6" style={{ color: colors.accent }} />,
                label: "Email",
                value: contactInfo?.email,
              },
              {
                icon: <MapPin className="w-6 h-6" style={{ color: colors.accent }} />,
                label: "Ubicación",
                value: contactInfo?.location
                  ? `${contactInfo.location.street} <br /> ${contactInfo.location.city}`
                  : null,
              },
              {
                icon: <Clock className="w-6 h-6" style={{ color: colors.accent }} />,
                label: "Horario",
                value: contactInfo?.schedule
                  ? `${contactInfo.schedule.mondayToFriday} <br /> ${contactInfo.schedule.saturday} <br /> ${contactInfo.schedule.sunday}`
                  : null,
              },
            ].map(
              ({ icon, label, value }, idx) =>
                value && (
                  <RevealWrapper animationClass="fade-in-text" key={label + idx}>
                    <div className="flex items-start space-x-4">
                      {icon}
                      <div>
                        <h3 className="font-cinzel" style={{ color: colors.accent }}>{label}</h3>
                        <p
                          className={PARAGRAPH_CLASS}
                          style={{ color: colors.text }}
                          dangerouslySetInnerHTML={{ __html: value }}
                        />
                      </div>
                    </div>
                  </RevealWrapper>
                )
            )}
          </div>
        </RevealWrapper>

        {/* Social Media Section */}
        <div
          className="rounded-lg shadow-sm p-2 md:p-8 mt-8"
          style={{ background: colors.background, color: colors.accent }}
        >
          <RevealWrapper animationClass="fade-in-text">
            {contactInfo?.followUsTitle && (
              <h2
                className={`${HEADING_4_CLASS} mb-6`}
                style={{ color: colors.accent, background: colors.background }}
              >
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
                  <RevealWrapper animationClass="fade-in-text" key={platform}>
                    <a
                      href={link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={FONT_FAMILY_PRIMARY + " hover:underline transition-colors"}
                      style={{
                        color: colors.accent,
                        background: colors.background,
                      }}
                      aria-label={`Seccion de contacto ${platform}`}
                    >
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