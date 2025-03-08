import { Mail, Phone, MapPin, Clock } from "lucide-react";
import { useTheme } from "../components/context/useTheme";
import PageBanner from "../components/PageBanner";
import images from "../assets/img/images";
import { Link} from "react-router-dom";
import AnimationWrapper from "../components/AnimationWrapper";
import "../index.css"; // Asegúrate de importar About.css para los estilos de transición
import { useEffect, useState } from "react";
import { MOBILE_BREAKPOINT } from "../constants";
import ContactForm from "../components/ContactForm";
import { getTextColorClass } from "../util"; //Importamos la nueva funcion


interface ContactProps {
}

function Contact() {
  const { theme } = useTheme();


  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
    const isMobileView = windowWidth < MOBILE_BREAKPOINT;
  
    useEffect(() => {
      const handleResize = () => {
        setWindowWidth(window.innerWidth);
      };
  
      window.addEventListener("resize", handleResize);
  
      return () => {
        window.removeEventListener("resize", handleResize);
      };
    }, []);

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
      {" "}
          {/* ScrollReveal para el título principal */}
          <h1 className= {`text-2xl md:text-5xl font-cinzel font-extralight text-center mb-24 md:py-10 tracking-wider ${getTextColorClass(theme)}`}>
            CONTACTANOS
          </h1>
          </AnimationWrapper>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className={`shadow-sm p-2 md:p-8 ${getTextColorClass(theme)}`}>
          <ContactForm/>
          </div>

          {/* Contact Information - Se mantiene igual con ScrollReveal en los títulos e info */}
          <div className="space-y-8">
            <div className="rounded-lg shadow-sm p-8 ${theme === 'dark' ? 'text-white' : 'text-gray-800'}">
            <AnimationWrapper animationClassName="fade-in-text">
            <h2 className={`text-2xl font-cinzel tracking-wide mb-2 mb-6 ${getTextColorClass(theme)}`}>
                  Información de Contacto
                </h2>
                </AnimationWrapper>
                <div className="space-y-6">
              <AnimationWrapper animationClassName="fade-in-text">
                  <div className="flex items-start space-x-4">
                    <Phone className="w-6 h-6 text-pink-600 flex-shrink-0" />
                    <div>
                      <h3 className={`font-cinzel ${getTextColorClass(theme)}`}>
                        Telefono
                      </h3>
                      <p className={`font-cinzel ${getTextColorClass(theme)}`}>
                        (555) 123-4567
                      </p>
                    </div>
                  </div>
                  </AnimationWrapper>
                  <AnimationWrapper animationClassName="fade-in-text">
                <div className="flex items-start space-x-4">
                    <Mail className="w-6 h-6 text-pink-600 flex-shrink-0" />
                    <div>
                      <h3 className={`font-cinzel ${getTextColorClass(theme)}`}>
                        Email
                      </h3>
                      <p className={`font-cinzel ${getTextColorClass(theme)}`}>
                        info@sadiesfloral.com
                      </p>
                    </div>
                  </div>
                  </AnimationWrapper>
                  <AnimationWrapper animationClassName="fade-in-text">
                <div className="flex items-start space-x-4">
                    <MapPin className="w-6 h-6 text-pink-600 flex-shrink-0" />
                    <div>
                      <h3 className={`font-cinzel ${getTextColorClass(theme)}`}>
                        Ubicación
                      </h3>
                      <p className={`font-cinzel ${getTextColorClass(theme)}`}>
                        123 Floral Street
                        <br />
                        New York, NY 10001
                      </p>
                    </div>
                  </div>
                  </AnimationWrapper>
                  <AnimationWrapper animationClassName="fade-in-text">
                  <div className="flex items-start space-x-4">
                    <Clock className="w-6 h-6 text-pink-600 flex-shrink-0" />
                    <div>
                      <h3 className={`font-cinzel ${getTextColorClass(theme)}`}>
                        Horario
                      </h3>
                      <p  className={`font-cinzel ${getTextColorClass(theme)}`}>
                        Lunes - Viernes: 9:00 AM - 6:00 PM
                        <br />
                        Sábados: 10:00 AM - 4:00 PM
                        <br />
                        Domingos: Cerrado
                      </p>
                    </div>
                  </div>
                  </AnimationWrapper>
                  </div>
            </div>

            <div className={`rounded-lg shadow-sm p-8 ${getTextColorClass(theme)}`}>
                <AnimationWrapper animationClassName="fade-in-text">
            <h2 className={`text-2xl font-cinzel tracking-wide mb-6 ${getTextColorClass(theme)}}`}>
                  Síguenos
            </h2>
                </AnimationWrapper>
                <div className="flex space-x-4">
              <AnimationWrapper animationClassName="fade-in-text">
                  <a
                    href="#"
                    className={`font-cinzel hover:text-pink-600 transition-colors ${getTextColorClass(theme)} `}
                  >
                    Instagram
                  </a>
                  </AnimationWrapper>
                  <AnimationWrapper animationClassName="fade-in-text">
                  <a
                    href="#"
                    className={`font-cinzel hover:text-pink-600 transition-colors ${getTextColorClass(theme)} `}
                  >
                    Pinterest
                  </a>
          </AnimationWrapper>
                <AnimationWrapper animationClassName="fade-in-text">
                <a
                    href="#"
                    className={`font-cinzel hover:text-pink-600 transition-colors ${getTextColorClass(theme)} `}
                  >
                    Facebook
                  </a>
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
      >
      </PageBanner>
    </div>
  );
}

export default Contact;
