// src/pages/Contact.tsx
import { Mail, Phone, MapPin, Clock } from "lucide-react";
import { useTheme } from "../components/context/useThemeHook";
import PageBanner from "../components/common/PageBanner";
import images from "../assets/img/images";
import AnimationWrapper from "../components/common/AnimationLayer";
import "../GlobalStyles.css";
import { useEffect } from "react";
import ContactForm from "../components/forms/ContactUsForm";
import { getTextColorClass } from "../utils/utils";
import { contactInfo } from "../data/contactData";
import useWindowSize from "../hooks/useWindowSize";
import { useLocation } from "react-router-dom"; // Importamos useLocation
import Footer from "../components/common/Footer"; // Importamos el componente Footer


interface ContactProps {}

function Contact({}: ContactProps) {
  const { theme } = useTheme();
  const { isMobileView } = useWindowSize();
  const location = useLocation(); // Obtenemos la ubicación actual

  // Nuevo useEffect para manejar el scroll al cargar la página
  useEffect(() => {
    const hash = location.hash; // Obtenemos el hash de la URL
    if (hash) {
      const element = document.querySelector(hash); // Buscamos el elemento con el hash como ID
      if (element) {
        element.scrollIntoView({ behavior: "smooth" }); // Hacemos scroll al elemento
      }
    } else {
      window.scrollTo(0, 0); // Si no hay hash, hacemos scroll al inicio de la página
    }
  }, [location.hash]); // Se ejecuta cada vez que cambia el hash

  return (
    <div className={`min-h-screen ${theme === "dark" ? "text-white" : "text-gray-800"}`}>
      {!isMobileView && (
      <PageBanner 
      title="CONVERSEMOS" 
      imageSrcs={[images.contactBannerUp]} 
      objectPosition="left-bottom" />
    )}

      <section id="contact" className="max-w-6xl mx-auto px-4 py-16 md:py-24">
        <AnimationWrapper animationClassName="fade-in-text">
          {contactInfo?.title && (
            <h1 className={`text-2xl md:text-5xl font-cinzel font-extralight text-center mb-24 md:py-10 tracking-wider ${getTextColorClass(theme)}`}>
              {contactInfo.title}
            </h1>
          )}
        </AnimationWrapper>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <section className={`shadow-sm p-2 md:p-8 ${getTextColorClass(theme)}`}>
            <ContactForm />
          </section>

          <section className="space-y-8">
            <div className={`rounded-lg shadow-sm p-8 ${theme === "dark" ? "text-white" : "text-gray-800"}`}>
              <AnimationWrapper animationClassName="fade-in-text">
                {contactInfo?.contactTitle && (
                  <h2 className={`text-2xl font-cinzel tracking-wide mb-6 ${getTextColorClass(theme)}`}>
                    {contactInfo.contactTitle}
                  </h2>
                )}
              </AnimationWrapper>
              <div className="space-y-6">
                {[
                  { icon: <Phone className="w-6 h-6 text-pink-600" />, label: "Telefono", value: contactInfo?.phone },
                  { icon: <Mail className="w-6 h-6 text-pink-600" />, label: "Email", value: contactInfo?.email },
                  {
                    icon: <MapPin className="w-6 h-6 text-pink-600" />,
                    label: "Ubicación",
                    value: contactInfo?.location ? `${contactInfo.location.street} <br /> ${contactInfo.location.city}` : null
                  },
                  {
                    icon: <Clock className="w-6 h-6 text-pink-600" />,
                    label: "Horario",
                    value: contactInfo?.schedule
                      ? `${contactInfo.schedule.mondayToFriday} <br /> ${contactInfo.schedule.saturday} <br /> ${contactInfo.schedule.sunday}`
                      : null
                  }
                ].map(
                  ({ icon, label, value }, index) =>
                    value && (
                      <AnimationWrapper key={index} animationClassName="fade-in-text">
                        <div className="flex items-start space-x-4">
                          {icon}
                          <div>
                            <h3 className={`font-cinzel ${getTextColorClass(theme)}`}>{label}</h3>
                            <p className={`font-cinzel ${getTextColorClass(theme)}`} dangerouslySetInnerHTML={{ __html: value }} />
                          </div>
                        </div>
                      </AnimationWrapper>
                    )
                )}
              </div>
            </div>

            <div className={`rounded-lg shadow-sm p-8 ${getTextColorClass(theme)}`}>
              <AnimationWrapper animationClassName="fade-in-text">
                {contactInfo?.followUsTitle && (
                  <h2 className={`text-2xl font-cinzel tracking-wide mb-6 ${getTextColorClass(theme)}`}>
                    {contactInfo.followUsTitle}
                  </h2>
                )}
              </AnimationWrapper>
              <div className="flex space-x-4">
                {[
                  { platform: "Instagram", link: contactInfo?.socialMedia?.instagram },
                  { platform: "Pinterest", link: contactInfo?.socialMedia?.pinterest },
                  { platform: "Facebook", link: contactInfo?.socialMedia?.facebook }
                ].map(
                  ({ platform, link }, index) =>
                    link && (
                      <AnimationWrapper key={index} animationClassName="fade-in-text">
                        <a href={link} target="_blank" rel="noopener noreferrer" className={`font-cinzel hover:text-pink-600 transition-colors ${getTextColorClass(theme)}`}>
                          {platform}
                        </a>
                      </AnimationWrapper>
                    )
                )}
              </div>
            </div>
          </section>
        </div>
      </section>

      {!isMobileView && (
      <PageBanner title="'Te debes este momento'"
       imageSrcs={[images.contactBannerBottom]} 
       objectPosition="left-bottom" />
    )}
      {isMobileView && (
        <Footer />
      )}
    </div>
  );
}

export default Contact;
