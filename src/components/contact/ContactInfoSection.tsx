// src/components/contact/ContactInfoSection.tsx
import React from "react";
import { Mail, Phone, MapPin, Clock } from "../../assets/icons";
import RevealWrapper from "../common/RevealWrapper";
import { contactInfo } from "../../data/contactData";
import { useTheme } from "../context/useThemeHook";

const ContactInfoSection: React.FC = () => {
  const { colors } = useTheme();

  return (
    <section className="space-y-8">
      <div className={`rounded-lg shadow-sm p-2 md:p-8 `}>
        <RevealWrapper animationClass="fade-in-text">
          {contactInfo?.contactTitle && (
            <h2
              className={`text-2xl font-cinzel tracking-wide mb-6`}
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
                        className={`font-cinzel `}
                        dangerouslySetInnerHTML={{ __html: value }}
                      />
                    </div>
                  </div>
                </RevealWrapper>
              )
          )}
        </div>
        </RevealWrapper>
      </div>
    </section>
  );
};

export default ContactInfoSection;
