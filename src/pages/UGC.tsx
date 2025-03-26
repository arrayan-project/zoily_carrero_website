import {
  Instagram,
  Facebook,
  MessageSquare,
  Pointer as Pinterest,
} from "lucide-react";
import { Link } from "react-router-dom";
import PageBanner from "../components/common/PageBanner";
import { useTheme } from "../components/context/useThemeHook";
import AnimationWrapper from "../components/common/AnimationLayer";
import "../GlobalStyles.css"; // Asegúrate de importar About.css para los estilos de transición
import SmoothImage from "../components/smoothImages/SmoothImage"; // Importa el componente SmoothImage
import images from "../assets/img/images"; // Importa las imágenes de assets
import ugc from "../assets/img/images"; // Importa las imágenes de UGC
import { useEffect, useState } from "react";
import { MOBILE_BREAKPOINT } from "../constants/constants";
import { getTextColorClass} from "../utils/utils"; //Importamos las funciones globales

interface ServicesProps {}

function UGC({}: ServicesProps) {
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
    <main className="ugc-page-container">
      {/* Banner principal */}
      <PageBanner
        title="POTENCIEMOS TU MARCA"
        imageSrcs={[images.contactBannerUp]}
        objectPosition="left-bottom"
      />

      <section id="ugc" className="ugc-section-completa flex md:flex-row flex-col m-0 bg-gray-100 overflow-hidden shadow-md">
        {/* Sección izquierda */}
        <div className="ugc-seccion-izquierda md:w-1/2 w-full flex flex-col">
          <section className="ugc-seccion-izquierda-superior md:h-3/4 h-[75%] bg-[rgb(242,232,225)] flex justify-center items-center">
            <div className="ugc-title text-center mt-6">
              <h2 className="ugc-title-portafolio font-cinzel font-light text-3xl md:text-5xl lg:text-6xl text-gray-700 mb-2 tracking-normal md:text-6xl">
                PORTAFOLIO
              </h2>
              <h1 className="ugc-title-ugc font-serif text-[6rem] md:text-[12.5rem] lg:text-[15rem] text-[rgb(212,185,194)] font-bold leading-[0.9] mb-0 md:text-[15rem]">
                UGC
              </h1>
              <div className="ugc-social-icons flex gap-3 md:mb-20 mb-5 justify-center items-center">
                <a href="#" className="ugc-social-icon text-gray-600 hover:text-gray-800 transition-colors duration-200 md:text-base">
                  <Instagram />
                </a>
                <a href="#" className="ugc-social-icon text-gray-600 hover:text-gray-800 transition-colors duration-200 md:text-base">
                  <Facebook />
                </a>
                <a href="#" className="ugc-social-icon text-gray-600 hover:text-gray-800 transition-colors duration-200 md:text-base">
                  <Pinterest />
                </a>
                <a href="#" className="ugc-social-icon text-gray-600 hover:text-gray-800 transition-colors duration-200 md:text-base">
                  <MessageSquare />
                </a>
              </div>
            </div>
          </section>
          <section className="ugc-seccion-izquierda-inferior md:h-1/4 h-[25%] bg-[rgb(229,210,196)] flex justify-center items-center">
            <span className="ugc-username font-serif text-2xl md:text-3xl lg:text-4xl text-gray-600 italic pl-0 md:text-center">
              @soyzoilycarrero
            </span>
          </section>
        </div>

        {/* Sección derecha (imagen) */}
        <div className="ugc-seccion-derecha md:w-1/2 w-full">
          <SmoothImage
            src={ugc.zoilyblack}
            alt="Imagen UGC"
            className="ugc-image h-full w-full object-cover block"
          />
        </div>
      </section>

      {/* Título de la sección UGC */}
      <section className="ugc-section-title-container mt-20 text-center md:mt-36 md:mb-36 mb-14">
        <h1 className={`text-4xl md:text-5xl font-cinzel font-extralight text-center mb-12 tracking-wider ${getTextColorClass(theme)}`}>
          FOTOGRAFÍAS DE CONTENIDO UGC
        </h1>
      </section>

      {/* Segunda sección UGC - Imágenes dentro del teléfono */}
      <section className="ugc-section ugc-section-images-example-png bg-transparent shadow-none rounded-none mt-10 md:mt-10">
        <div className="ugc-right-section ugc-right-section-four-images-png flex-1 flex flex-col md:flex-row justify-around items-center">
          <div className="ugc-images-container-png flex-col md:flex-row flex gap-2 w-full justify-around">
            {['ugc1', 'ugc2', 'ugc3', 'ugc4'].map((image, index) => (
              <div key={index} className="ugc-phone-container-png relative max-w-sm mx-auto">
                <SmoothImage
                  src={images.phone}
                  alt="Marco Smartphone"
                  className="ugc-phone-frame-png w-full h-auto block relative z-10"
                />
                <SmoothImage
                  src={images[image]}
                  alt={`Ejemplo UGC ${index + 1}`}
                  className="ugc-image-example-png absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-0 w-[96%] h-[99%] object-cover rounded-[50px] aspect-[0.7]"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Banner final (solo en vista de escritorio) */}
      {!isMobileView && (
        <PageBanner
          title="'Te debes este momento'"
          imageSrcs={[images.contactBannerBottom]}
        />
      )}
    </main>
  );
}

export default UGC;
