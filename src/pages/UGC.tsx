import {
  Instagram,
  Facebook,
  MessageSquare,
  Pointer as Pinterest,
} from "lucide-react";
import { Link } from "react-router-dom";
import PageBanner from "../components/PageBanner";
import { useTheme } from "../components/context/useTheme";
import ScrollReveal from "../components/ScrollReveal"; // Importa el componente ScrollReveal
import "../index.css"; // Asegúrate de importar About.css para los estilos de transición
import SmoothImage from "../components/SmoothImage"; // Importa el componente SmoothImage
import images from "../assets/img/images"; // Importa las imágenes de assets
import ugc from "../assets/img/images"; // Importa las imágenes de UGC
import { useEffect, useState } from "react";
import { MOBILE_BREAKPOINT } from "../constants";

function UGC() {
  const { theme } = useTheme();

  //estado del tamaño de ventana
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
    <div className="ugc-page-container">
      <PageBanner
        title="POTENCIEMOS TU MARCA"
        imageSrcs={[images.contactBannerUp]}
        objectPosition="left-bottom"
      >
        <div className="flex flex-col sm:flex-row gap-4">
          <ScrollReveal animationClassName="fade-in-image">
            <Link
              to="/contact"
              className="px-8 py-5 bg-pink-400 text-white font-base rounded shadow hover:bg-pink-600 transition duration-200 text-center animate-color-button"
            >
              Agenda tu cita
            </Link>
          </ScrollReveal>
        </div>
      </PageBanner>

      <div className="ugc-section-completa flex md:flex-row flex-col m-0 bg-gray-100  overflow-hidden shadow-md">
        <div className="ugc-seccion-izquierda md:w-1/2 w-full flex flex-col">
          <div className="ugc-seccion-izquierda-superior md:h-3/4 h-[75%] bg-[rgb(242,232,225)] md:bg-[rgb(242,232,225)] flex justify-center items-center">
            {/* Contenido de la sección izquierda superior (75% en escritorio y móvil) */}
            <div className="ugc-title text-center mt-6">
              <h2 className="ugc-title-portafolio font-cinzel font-light text-3xl md:text-5xl lg:text-6xl text-gray-700 mb-2 tracking-normal  md:text-6xl">
                PORTAFOLIO
              </h2>
              <h1 className="ugc-title-ugc font-serif text-[6rem] md:text-[12.5rem] lg:text-[15rem] text-[rgb(212,185,194)] font-bold leading-[0.9] mb-0 md:text-[15rem]">
                UGC
              </h1>
              <div className="ugc-social-icons flex gap-3 md:mb-20 mb-5 flex justify-center items-center">
                <a
                  href="#"
                  className="ugc-social-icon text-gray-600 hover:text-gray-800 transition-colors duration-200 md:text-base"
                >
                  <Instagram />
                </a>
                <a
                  href="#"
                  className="ugc-social-icon text-gray-600 hover:text-gray-800 transition-colors duration-200 md:text-base"
                >
                  <Facebook />
                </a>
                <a
                  href="#"
                  className="ugc-social-icon text-gray-600 hover:text-gray-800 transition-colors duration-200 md:text-base"
                >
                  <Pinterest />
                </a>
                <a
                  href="#"
                  className="ugc-social-icon text-gray-600 hover:text-gray-800 transition-colors duration-200 md:text-base"
                >
                  <MessageSquare />
                </a>
              </div>
            </div>
          </div>
          <div className="ugc-seccion-izquierda-inferior md:h-1/4 h-[25%] bg-[rgb(229,210,196)] md:bg-[rgb(229,210,196)] flex justify-center items-center">
            {/* Contenido de la sección izquierda inferior (25% en escritorio y móvil) */}
            <span className="ugc-username font-serif text-2xl md:text-3xl lg:text-4xl text-gray-600 italic pl-0 md:text-center md:text-3xl md:pl-0">
              @soyzoilycarrero
            </span>
          </div>
        </div>
        <div className="ugc-seccion-derecha md:w-1/2 w-full">
          {/* Contenido de la sección derecha (imagen) */}
          <SmoothImage
            src={ugc.zoilyblack} // Asegúrate de tener 'ugc' importado con tus imágenes
            alt="Imagen UGC"
            className="ugc-image h-full w-full object-cover block"
          />
        </div>
      </div>

      {/*NUEVO TITULO DE SECCIÓN - INICIO - MODIFICADO CON TAILWIND CSS*/}
      <div className="ugc-section-title-container mt-20 text-center md:mt-36 md:mb-36 mb-14">
        {" "}
        {/* Contenedor para el título - Clases de Tailwind */}
        <h1
          className={`text-4xl md:text-5xl font-cinzel font-extralight text-center mb-12 tracking-wider ${
            theme === "dark" ? "text-white" : "text-gray-800"
          }`}
        >
          FOTOGRAFIAS DE CONTENIDO UGC
        </h1>{" "}
        {/* Título de sección - Clases de Tailwind */}
      </div>
      {/*  **NUEVO TITULO DE SECCIÓN - FIN - MODIFICADO CON TAILWIND CSS**  */}

      {/* SEGUNDA SECCIÓN UGC - INICIO - MODIFICADA PARA PNG SMARTPHONE */}
      <div className="ugc-section ugc-section-images-example-png bg-transparent shadow-none rounded-none mt-10 md:mt-10">
        {" "}
        {/* ugc-section-images-example-png */}
        <div className="ugc-left-section ugc-left-section-empty flex-none w-0 p-0 bg-transparent">
          {/* Sección izquierda vacía */}
        </div>
        <div className="ugc-right-section ugc-right-section-four-images-png flex-1 flex flex-col md:flex-row justify-around items-center">
          {" "}
          {/* ugc-right-section-four-images-png */}
          <div className="ugc-images-container-png flex-col md:flex-row flex gap-2 w-full justify-around">
            {" "}
            {/* ugc-images-container-png */}
            <div className="ugc-phone-container-png relative max-w-sm mx-auto">
              {" "}
              {/* ugc-phone-container-png */}
              <div>
                <SmoothImage
                  src={images.phone}
                  alt="Marco Smartphone"
                  className="ugc-phone-frame-png w-full h-auto block relative z-10"
                />{" "}
                {/* ugc-phone-frame-png */}
              </div>
              <div>
                {" "}
                {/* Contenedor para posicionamiento relativo */}
                <SmoothImage
                  src={images.ugc1}
                  alt="Ejemplo UGC 1"
                  className="ugc-image-example-png absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-0 w-[96%] h-[99%] object-cover rounded-[50px] aspect-[0.7]"
                />{" "}
                {/* ugc-image-example-png */}
              </div>
            </div>
            <div className="ugc-phone-container-png relative max-w-sm mx-auto">
              {" "}
              {/* ugc-phone-container-png */}
              <div>
                <SmoothImage
                  src={images.phone}
                  alt="Marco Smartphone"
                  className="ugc-phone-frame-png w-full h-auto block relative z-10"
                />
              </div>
              <div>
                {" "}
                {/* Contenedor para posicionamiento relativo */}
                <SmoothImage
                  src={images.ugc2}
                  alt="Ejemplo UGC 2"
                  className="ugc-image-example-png absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-0 w-[96%] h-[99%] object-cover rounded-[50px] aspect-[0.7]"
                />
              </div>
            </div>
            <div className="ugc-phone-container-png relative max-w-sm mx-auto">
              {" "}
              {/* ugc-phone-container-png */}
              <div>
                <SmoothImage
                  src={images.phone}
                  alt="Marco Smartphone"
                  className="ugc-phone-frame-png w-full h-auto block relative z-10"
                />
              </div>
              <div>
                {" "}
                {/* Contenedor para posicionamiento relativo */}
                <SmoothImage
                  src={images.ugc3}
                  alt="Ejemplo UGC 3"
                  className="ugc-image-example-png absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-0 w-[96%] h-[99%] object-cover rounded-[50px] aspect-[0.7]"
                />
              </div>
            </div>
            <div className="ugc-phone-container-png relative max-w-sm mx-auto">
              {" "}
              {/* ugc-phone-container-png */}
              <div>
                <SmoothImage
                  src={images.phone}
                  alt="Marco Smartphone"
                  className="ugc-phone-frame-png w-full h-auto block relative z-10"
                />
              </div>
              <div>
                {" "}
                {/* Contenedor para posicionamiento relativo */}
                <SmoothImage
                  src={images.ugc4}
                  alt="Ejemplo UGC 4"
                  className="ugc-image-example-png absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-0 w-[96%] h-[99%] object-cover rounded-[50px] aspect-[0.7]"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* SEGUNDA SECCIÓN UGC - FIN - MODIFICADA PARA PNG SMARTPHONE */}

      {!isMobileView && (
        <PageBanner
          title="'Te debes este momento'"
          imageSrcs={[images.contactBannerBottom]}
        >
          {/* Botón "Agenda tu cita" como 'children' de PageBanner inferior */}
          <div className="flex flex-col sm:flex-row gap-4">
            <ScrollReveal animationClassName="fade-in-image">
              <Link
                to="/contact"
                className="px-8 py-5 bg-pink-400 text-white font-base rounded shadow hover:bg-pink-600 transition duration-200 text-center animate-color-button"
              >
                Agenda tu cita
              </Link>
            </ScrollReveal>
          </div>
        </PageBanner>
      )}
    </div>
  );
}

export default UGC;
