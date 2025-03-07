import { Mail, Phone, MapPin, Clock } from "lucide-react";
import { useTheme } from "../components/context/useTheme";
import PageBanner from "../components/PageBanner";
import images from "../assets/img/images";
import { Link} from "react-router-dom";
import ScrollReveal from "../components/ScrollReveal"; // Importa el componente ScrollReveal
import "../index.css"; // Asegúrate de importar About.css para los estilos de transición
import { useEffect, useState } from "react";
import { MOBILE_BREAKPOINT } from "../constants";
import ContactForm from "../components/ContactForm";

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
        <ScrollReveal animationClassName="fade-in-text">
          {" "}
          {/* ScrollReveal para el título principal */}
          <h1 className= "text-2xl md:text-5xl font-cinzel font-extralight text-center mb-24 md:py-10 tracking-wider ${theme === 'dark' ? 'text-white' : 'text-gray-800'}">
            CONTACTANOS
          </h1>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className={`shadow-sm p-2 md:p-8 ${theme === "dark" ? "bg-gray-800" : "bg-white"}`}>
          <ContactForm/>
          </div>

          {/* Contact Information - Se mantiene igual con ScrollReveal en los títulos e info */}
          <div className="space-y-8">
            <div className="rounded-lg shadow-sm p-8 ${theme === 'dark' ? 'text-white' : 'text-gray-800'}">
              <ScrollReveal animationClassName="fade-in-text">
                <h2 className="text-2xl font-cinzel tracking-wide ${theme === 'dark' ? 'text-white' : 'text-gray-700'} mb-2 mb-6">
                  Información de Contacto
                </h2>
              </ScrollReveal>
              <div className="space-y-6">
                <ScrollReveal animationClassName="fade-in-text">
                  <div className="flex items-start space-x-4">
                    <Phone className="w-6 h-6 text-pink-600 flex-shrink-0" />
                    <div>
                      <h3 className="font-cinzel ${theme === 'dark' ? 'text-white' : 'text-gray-800'}">
                        Telefono
                      </h3>
                      <p className={`font-cinzel ${ theme === "dark" ? "text-gray-200" : "text-gray-600"}`}>
                        (555) 123-4567
                      </p>
                    </div>
                  </div>
                </ScrollReveal>
                <ScrollReveal animationClassName="fade-in-text">
                  <div className="flex items-start space-x-4">
                    <Mail className="w-6 h-6 text-pink-600 flex-shrink-0" />
                    <div>
                      <h3 className="font-cinzel ${theme === 'dark' ? 'text-white' : 'text-gray-800'}">
                        Email
                      </h3>
                      <p className={` font-cinzel ${theme === "dark" ? "text-gray-200" : "text-gray-600"}`}>
                        info@sadiesfloral.com
                      </p>
                    </div>
                  </div>
                </ScrollReveal>
                <ScrollReveal animationClassName="fade-in-text">
                  <div className="flex items-start space-x-4">
                    <MapPin className="w-6 h-6 text-pink-600 flex-shrink-0" />
                    <div>
                      <h3 className="font-cinzel ${theme === 'dark' ? 'text-white' : 'text-gray-800'}">
                        Ubicación
                      </h3>
                      <p className={` font-cinzel ${theme === "dark" ? "text-gray-200" : "text-gray-600"}`}>
                        123 Floral Street
                        <br />
                        New York, NY 10001
                      </p>
                    </div>
                  </div>
                </ScrollReveal>
                <ScrollReveal animationClassName="fade-in-text">
                  <div className="flex items-start space-x-4">
                    <Clock className="w-6 h-6 text-pink-600 flex-shrink-0" />
                    <div>
                      <h3 className="font-cinzel ${theme === 'dark' ? 'text-white' : 'text-gray-800'}">
                        Horario
                      </h3>
                      <p  className={` font-cinzel ${theme === "dark" ? "text-gray-200" : "text-gray-600"}`}>
                        Lunes - Viernes: 9:00 AM - 6:00 PM
                        <br />
                        Sábados: 10:00 AM - 4:00 PM
                        <br />
                        Domingos: Cerrado
                      </p>
                    </div>
                  </div>
                </ScrollReveal>
              </div>
            </div>

            <div className="rounded-lg shadow-sm p-8 ${theme === 'dark' ? 'text-white' : 'text-gray-800'}">
              <ScrollReveal animationClassName="fade-in-text">
                <h2 className="text-2xl font-cinzel tracking-wide ${theme === 'dark' ? 'text-white' : 'text-gray-800'} mb-6">
                  Síguenos
                </h2>
              </ScrollReveal>
              <div className="flex space-x-4">
                <ScrollReveal animationClassName="fade-in-text">
                  <a
                    href="#"
                    className={`font-cinzel ${
                      theme === "dark" ? "text-gray-200" : "text-gray-600"
                    } hover:text-pink-600 transition-colors`}
                  >
                    Instagram
                  </a>
                </ScrollReveal>
                <ScrollReveal animationClassName="fade-in-text">
                  <a
                    href="#"
                    className={`font-cinzel ${
                      theme === "dark" ? "text-gray-200" : "text-gray-600"
                    } hover:text-pink-600 transition-colors`}
                  >
                    Pinterest
                  </a>
                </ScrollReveal>
                <ScrollReveal animationClassName="fade-in-text">
                  <a
                    href="#"
                    className={`font-cinzel ${
                      theme === "dark" ? "text-gray-200" : "text-gray-600"
                    } hover:text-pink-600 transition-colors`}
                  >
                    Facebook
                  </a>
                </ScrollReveal>
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
        {/* Botón "Agenda tu cita" como 'children' de PageBanner */}
        <div className="flex flex-col sm:flex-row gap-4">
        <ScrollReveal animationClassName="fade-in-image">
        <button  className="font-cinzel px-8 py-5 bg-pink-400 text-white font-base rounded shadow hover:bg-pink-600 transition duration-200 text-center animate-color-button">
            Agenda tu cita
          </button>
          </ScrollReveal>
        </div>
      </PageBanner>
    </div>
  );
}

export default Contact;
