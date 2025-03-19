// src/pages/Contact.tsx
import { Mail, Phone, MapPin, Clock } from "lucide-react";
import { useTheme } from "../components/context/useThemeHook";
import PageBanner from "../components/common/PageBanner";
import images from "../assets/img/images";
import AnimationWrapper from "../components/common/AnimationLayer";
import "../GlobalStyles.css";
import { useEffect, useState } from "react";
import ContactForm from "../components/forms/ContactUsForm";
import { getTextColorClass } from "../utils/utils";
import { contactInfo } from "../data/contactData"; // Importamos los datos
import ImageWithFallback from "../components/common/ImageWithFallback"; // Importamos el componente ImageWithFallback
import useWindowSize from "../hooks/useWindowSize"; // Importamos el hook
import ErrorComponent from "../components/common/ErrorComponent"; // Importamos el componente


interface ContactProps {}

function Contact({}: ContactProps) {
  const { theme } = useTheme();
  const {isMobileView } = useWindowSize(); // Usamos el hook
  const [error, setError] = useState<string | null>(null); // Nuevo estado para errores


  useEffect(() => {
    try {
      // Ya no es necesario el useEffect para el tamaño de la ventana
    } catch (err) {
      setError("Error al cargar el tamaño de la ventana.");
      console.error("Error en useEffect:", err);
    }
  }, []);

  // Si hay un error, mostrar el componente de error
  if (error) {
    return <ErrorComponent message={error} />;
  }

  return (
    <div
      className={`min-h-screen ${
        theme === "dark" ? "text-white" : "text-gray-800"
      }`}
    >
      <PageBanner
        title="CONVERSEMOS"
        imageSrcs={[images.contactBannerUp]}
        objectPosition="left-bottom"
      ></PageBanner>

      <div className="max-w-6xl mx-auto px-4 py-16 md:py-24">
        <AnimationWrapper animationClassName="fade-in-text">
          {/* ScrollReveal para el título principal */}
          {contactInfo && contactInfo.title && (
            <h1
              className={`text-2xl md:text-5xl font-cinzel font-extralight text-center mb-24 md:py-10 tracking-wider ${getTextColorClass(
                theme
              )}`}
            >
              {contactInfo.title}
            </h1>
          )}
        </AnimationWrapper>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div
            className={`shadow-sm p-2 md:p-8 ${getTextColorClass(theme)}`}
          >
            <ContactForm />
          </div>

          {/* Contact Information - Se mantiene igual con ScrollReveal en los títulos e info */}
          <div className="space-y-8">
            <div
              className={`rounded-lg shadow-sm p-8 ${
                theme === "dark" ? "text-white" : "text-gray-800"
              }`}
            >
              <AnimationWrapper animationClassName="fade-in-text">
                {contactInfo && contactInfo.contactTitle && (
                  <h2
                    className={`text-2xl font-cinzel tracking-wide mb-2 mb-6 ${getTextColorClass(
                      theme
                    )}`}
                  >
                    {contactInfo.contactTitle}
                  </h2>
                )}
              </AnimationWrapper>
              <div className="space-y-6">
                <AnimationWrapper animationClassName="fade-in-text">
                  <div className="flex items-start space-x-4">
                    <Phone className="w-6 h-6 text-pink-600 flex-shrink-0" />
                    <div>
                      {contactInfo && contactInfo.phone && (
                        <>
                          <h3
                            className={`font-cinzel ${getTextColorClass(theme)}`}
                          >
                            Telefono
                          </h3>
                          <p
                            className={`font-cinzel ${getTextColorClass(theme)}`}
                          >
                            {contactInfo.phone}
                          </p>
                        </>
                      )}
                    </div>
                  </div>
                </AnimationWrapper>
                <AnimationWrapper animationClassName="fade-in-text">
                  <div className="flex items-start space-x-4">
                    <Mail className="w-6 h-6 text-pink-600 flex-shrink-0" />
                    <div>
                      {contactInfo && contactInfo.email && (
                        <>
                          <h3
                            className={`font-cinzel ${getTextColorClass(theme)}`}
                          >
                            Email
                          </h3>
                          <p
                            className={`font-cinzel ${getTextColorClass(theme)}`}
                          >
                            {contactInfo.email}
                          </p>
                        </>
                      )}
                    </div>
                  </div>
                </AnimationWrapper>
                <AnimationWrapper animationClassName="fade-in-text">
                  <div className="flex items-start space-x-4">
                    <MapPin className="w-6 h-6 text-pink-600 flex-shrink-0" />
                    <div>
                      {contactInfo &&
                        contactInfo.location &&
                        contactInfo.location.street &&
                        contactInfo.location.city && (
                          <>
                            <h3
                              className={`font-cinzel ${getTextColorClass(
                                theme
                              )}`}
                            >
                              Ubicación
                            </h3>
                            <p
                              className={`font-cinzel ${getTextColorClass(
                                theme
                              )}`}
                            >
                              {contactInfo.location.street}
                              <br />
                              {contactInfo.location.city}
                            </p>
                          </>
                        )}
                    </div>
                  </div>
                </AnimationWrapper>
                <AnimationWrapper animationClassName="fade-in-text">
                  <div className="flex items-start space-x-4">
                    <Clock className="w-6 h-6 text-pink-600 flex-shrink-0" />
                    <div>
                      {contactInfo && contactInfo.schedule && (
                        <>
                          <h3
                            className={`font-cinzel ${getTextColorClass(theme)}`}
                          >
                            Horario
                          </h3>
                          <p
                            className={`font-cinzel ${getTextColorClass(theme)}`}
                          >
                            {contactInfo.schedule.mondayToFriday}
                            <br />
                            {contactInfo.schedule.saturday}
                            <br />
                            {contactInfo.schedule.sunday}
                          </p>
                        </>
                      )}
                    </div>
                  </div>
                </AnimationWrapper>
              </div>
            </div>

            <div
              className={`rounded-lg shadow-sm p-8 ${getTextColorClass(theme)}`}
            >
              <AnimationWrapper animationClassName="fade-in-text">
                {contactInfo && contactInfo.followUsTitle && (
                  <h2
                    className={`text-2xl font-cinzel tracking-wide mb-6 ${getTextColorClass(
                      theme
                    )}`}
                  >
                    {contactInfo.followUsTitle}
                  </h2>
                )}
              </AnimationWrapper>
              <div className="flex space-x-4">
                <AnimationWrapper animationClassName="fade-in-text">
                  {contactInfo &&
                    contactInfo.socialMedia &&
                    contactInfo.socialMedia.instagram && (
                      <a
                        href={contactInfo.socialMedia.instagram}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`font-cinzel hover:text-pink-600 transition-colors ${getTextColorClass(
                          theme
                        )} `}
                      >
                        Instagram
                      </a>
                    )}
                </AnimationWrapper>
                <AnimationWrapper animationClassName="fade-in-text">
                  {contactInfo &&
                    contactInfo.socialMedia &&
                    contactInfo.socialMedia.pinterest && (
                      <a
                        href={contactInfo.socialMedia.pinterest}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`font-cinzel hover:text-pink-600 transition-colors ${getTextColorClass(
                          theme
                        )} `}
                      >
                        Pinterest
                      </a>
                    )}
                </AnimationWrapper>
                <AnimationWrapper animationClassName="fade-in-text">
                  {contactInfo &&
                    contactInfo.socialMedia &&
                    contactInfo.socialMedia.facebook && (
                      <a
                        href={contactInfo.socialMedia.facebook}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`font-cinzel hover:text-pink-600 transition-colors ${getTextColorClass(
                          theme
                        )} `}
                      >
                        Facebook
                      </a>
                    )}
                </AnimationWrapper>
              </div>
            </div>
          </div>
        </div>
      </div>
      <PageBanner
        title="'Te debes este momento'"
        imageSrcs={[images.contactBannerBottom]}
        objectPosition="left-bottom"
      ></PageBanner>
    </div>
  );
}

export default Contact;
