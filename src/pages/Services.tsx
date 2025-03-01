import React, { useState, memo, useCallback, useRef, useEffect } from "react";
import SlideComponent from "../components/SlideComponent";
import Slider from "react-slick"; // Importa Slider
import "slick-carousel/slick/slick.css"; // Importa estilos del carrusel
import "slick-carousel/slick/slick-theme.css"; // Importa tema del carrusel
import StatsSection from "../components/StatsSection";
import PageBanner from "../components/PageBanner";
import NoviaModal from "../components/modals/NoviaModal";
import SocialModal from "../components/modals/SocialModal";
import PeinadoModal from "../components/modals/PeinadoModal";
import MaduraModal from "../components/modals/MaduraModal";
import GlamModal from "../components/modals/GlamModal";
import ExpressModal from "../components/modals/ExpressModal";
import { useSwipeable } from "react-swipeable";
import { Link } from "react-router-dom";
import images, { // Importa el objeto 'images' (exportación por defecto)
  noviaImages, // ... y las exportaciones nombradas de los arrays de imágenes
  socialImages,
  peinadoImages,
  maduraImages,
  glamImages,
  expressImages,
} from "../assets/img/images";
import { useTheme } from "../components/context/useTheme";
import ScrollReveal from "../components/ScrollReveal"; // Importa el componente ScrollReveal
import "../index.css"; // Asegúrate de importar About.css para los estilos de transición
import SmoothImage from "../components/SmoothImage"; // Importa el componente SmoothImage

function Services() {
  // Estados para la galería
  const [galleryImages] = useState<string[]>([]); // Especifica <string[]> aquí
  const [isGalleryOpen, setIsGalleryOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const swipeHandlers = useSwipeable({
    // Llama al hook useSwipeable aquí
    onSwipedLeft: () =>
      setCurrentImageIndex((currentImageIndex + 1) % galleryImages.length), // Función para deslizar a la izquierda
    onSwipedRight: () =>
      setCurrentImageIndex(
        (currentImageIndex - 1 + galleryImages.length) % galleryImages.length
      ), // Función para deslizar a la derecha
    trackMouse: true, // Opcional: Para probar con ratón en escritorio
  });

  // Función para cerrar la galería
  const closeGallery = () => {
    setIsGalleryOpen(false);
  };

  // Datos para el cuadro de información de Novia
  const noviaMakeupServices = {
    category: "Maquillaje Novia - Servicios Adicionales",
    items: [
      {
        name: "Servicio 1 Profesional",
        price: "$GG",
        description: "Descripción del servicio 1 profesional.",
      },
      {
        name: "Servicio 2 Profesional",
        price: "$HH",
        description: "Descripción del servicio 2 profesional.",
      },
      {
        name: "Servicio 3 Profesional",
        price: "$II",
        description: "Descripción del servicio 3 profesional.",
      },
    ],
  };

  // Datos para el cuadro de información de Social
  const socialMakeupServices = {
    category: "Maquillaje Social - Servicios Adicionales",
    items: [
      {
        name: "Servicio 1 Profesional",
        price: "$GG",
        description: "Descripción del servicio 1 profesional.",
      },
      {
        name: "Servicio 2 Profesional",
        price: "$HH",
        description: "Descripción del servicio 2 profesional.",
      },
      {
        name: "Servicio 3 Profesional",
        price: "$II",
        description: "Descripción del servicio 3 profesional.",
      },
    ],
  };

  // Datos para el cuadro de información de Maquillaje y peinado
  const peinadoMakeupServices = {
    category: "Maquillaje & Peinado - Servicios Adicionales",
    items: [
      {
        name: "Servicio 1 Profesional",
        price: "$GG",
        description: "Descripción del servicio 1 profesional.",
      },
      {
        name: "Servicio 2 Profesional",
        price: "$HH",
        description: "Descripción del servicio 2 profesional.",
      },
      {
        name: "Servicio 3 Profesional",
        price: "$II",
        description: "Descripción del servicio 3 profesional.",
      },
    ],
  };

  // Datos para el cuadro de información de Piel madura
  const maduraMakeupServices = {
    category: "Maquillaje para Piel Madura - Servicios Adicionales",
    items: [
      {
        name: "Servicio 1 Profesional",
        price: "$GG",
        description: "Descripción del servicio 1 profesional.",
      },
      {
        name: "Servicio 2 Profesional",
        price: "$HH",
        description: "Descripción del servicio 2 profesional.",
      },
      {
        name: "Servicio 3 Profesional",
        price: "$II",
        description: "Descripción del servicio 3 profesional.",
      },
    ],
  };

  // Datos para el cuadro de información de Glam
  const glamMakeupServices = {
    category: "Maquillaje Glam - Servicios Adicionales",
    items: [
      {
        name: "Servicio 1 Profesional",
        price: "$GG",
        description: "Descripción del servicio 1 profesional.",
      },
      {
        name: "Servicio 2 Profesional",
        price: "$HH",
        description: "Descripción del servicio 2 profesional.",
      },
      {
        name: "Servicio 3 Profesional",
        price: "$II",
        description: "Descripción del servicio 3 profesional.",
      },
    ],
  };

  // Datos para el cuadro de información de Express
  const expressMakeupServices = {
    category: "Maquillaje Express - Servicios Adicionales",
    items: [
      {
        name: "Servicio 1 Profesional",
        price: "$GG",
        description: "Descripción del servicio 1 profesional.",
      },
      {
        name: "Servicio 2 Profesional",
        price: "$HH",
        description: "Descripción del servicio 2 profesional.",
      },
      {
        name: "Servicio 3 Profesional",
        price: "$II",
        description: "Descripción del servicio 3 profesional.",
      },
    ],
  };

  // Settings para el carrusel de React Slick
  const sliderSettings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true, // Opcional: Autoplay del carrusel
    autoplaySpeed: 3000, // Opcional: Velocidad de autoplay
    arrows: false, // Oculta las flechas de navegación del carrusel (opcional)
  };

  // Datos para el cuadro de información del Curso Básico
  const basicCourseServices = {
    category: "Curso Básico - Servicios Adicionales",
    items: [
      {
        name: "Servicio 1 Básico",
        price: "$XX",
        description: "Descripción del servicio 1 básico.",
      },
      {
        name: "Servicio 2 Básico",
        price: "$YY",
        description: "Descripción del servicio 2 básico.",
      },
      {
        name: "Servicio 3 Básico",
        price: "$ZZ",
        description: "Descripción del servicio 3 básico.",
      },
    ],
  };

  // Datos para el cuadro de información del Curso Intermedio
  const intermediateCourseServices = {
    category: "Curso Intermedio - Servicios Adicionales",
    items: [
      {
        name: "Servicio 1 Intermedio",
        price: "$AA",
        description: "Descripción del servicio 1 intermedio.",
      },
      {
        name: "Servicio 2 Intermedio",
        price: "$BB",
        description: "Descripción del servicio 2 intermedio.",
      },
      {
        name: "Servicio 3 Intermedio",
        price: "$CC",
        description: "Descripción del servicio 3 intermedio.",
      },
    ],
  };

  // Datos para el cuadro de información del Curso Avanzado
  const advancedCourseServices = {
    category: "Curso Avanzado - Servicios Adicionales",
    items: [
      {
        name: "Servicio 1 Avanzado",
        price: "$DD",
        description: "Descripción del servicio 1 avanzado.",
      },
      {
        name: "Servicio 2 Avanzado",
        price: "$EE",
        description: "Descripción del servicio 2 avanzado.",
      },
      {
        name: "Servicio 3 Avanzado",
        price: "$FF",
        description: "Descripción del servicio 3 avanzado.",
      },
    ],
  };

  // Datos para el cuadro de información del Curso Profesional
  const professionalCourseServices = {
    category: "Curso Profesional - Servicios Adicionales",
    items: [
      {
        name: "Servicio 1 Profesional",
        price: "$GG",
        description: "Descripción del servicio 1 profesional.",
      },
      {
        name: "Servicio 2 Profesional",
        price: "$HH",
        description: "Descripción del servicio 2 profesional.",
      },
      {
        name: "Servicio 3 Profesional",
        price: "$II",
        description: "Descripción del servicio 3 profesional.",
      },
    ],
  };

  const { theme } = useTheme();

  const [isNoviaFullscreenOpen, setIsNoviaFullscreenOpen] = useState(false);
  const openNoviaFullscreen = () => setIsNoviaFullscreenOpen(true);
  const closeNoviaFullscreen = () => setIsNoviaFullscreenOpen(false);

  const [isSocialFullscreenOpen, setIsSocialFullscreenOpen] = useState(false);
  const openSocialFullscreen = () => setIsSocialFullscreenOpen(true);
  const closeSocialFullscreen = () => setIsSocialFullscreenOpen(false);

  const [isPeinadoFullscreenOpen, setIsPeinadoFullscreenOpen] = useState(false);
  const openPeinadoFullscreen = () => setIsPeinadoFullscreenOpen(true);
  const closePeinadoFullscreen = () => setIsPeinadoFullscreenOpen(false);

  const [isMaduraFullscreenOpen, setIsMaduraFullscreenOpen] = useState(false);
  const openMaduraFullscreen = () => setIsMaduraFullscreenOpen(true);
  const closeMaduraFullscreen = () => setIsMaduraFullscreenOpen(false);

  const [isGlamFullscreenOpen, setIsGlamFullscreenOpen] = useState(false);
  const openGlamFullscreen = () => setIsGlamFullscreenOpen(true);
  const closeGlamFullscreen = () => setIsGlamFullscreenOpen(false);

  const [isExpressFullscreenOpen, setIsExpressFullscreenOpen] = useState(false);
  const openExpressFullscreen = () => setIsExpressFullscreenOpen(true);
  const closeExpressFullscreen = () => setIsExpressFullscreenOpen(false);

  const [setIsButtonModalVisible] = useState(false);

  return (
    // Contenedor principal: flex-col para que el footer se posicione al final
    <div className="min-h-screen flex flex-col">
      {/* Banner personalizado para la sección de Servicios */}
      <PageBanner
        title="NUESTROS SERVICIOS"
        imageSrcs={[images.servicesBannerUp]}
        objectPosition="left-bottom"
      >
        {/* Aquí está el código de tu botón como 'children' */}
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
      {/* Contenido principal: flex-grow hace que se expanda para ocupar el espacio disponible */}
      <main className="flex-grow">
        <div className="max-w-7xl mx-auto px-2 py-16 md:py-32">
          <ScrollReveal animationClassName="fade-in-text">
            
            <h1
                        className={`text-4xl md:text-5xl font-montserrat font-extralight text-center mb-12 tracking-wider ${
                        theme === "dark" ? "text-white" : "text-gray-800"
                        }`}
                    >
              Conoce lo que podemos hacer por ti
            </h1>
          </ScrollReveal>

          {/* Sección servicios de maquillaje */}
          <div className="grid grid-cols-2 lg:grid-cols-3 gap-8 mb-20 gap-y-20">
            {/* Item Novia)*/} 
            <div className="space-y-6 ">
              <div className="w-full aspect-square shadow-lg overflow-hidden relative group ">
                {/*Contenedor para hover y botones */} 
                <button
                  className="servicio-boton-clickable"
                  onClick={openNoviaFullscreen}
                  style={{ display: "block", width: "100%", height: "100%" }}
                >
                  {/* Imagen del servicio*/}
                  <ScrollReveal animationClassName="fade-in-image">
                    <div>
                      <Slider {...sliderSettings}>
                        {noviaImages.map((img, index) => (
                          <SlideComponent
                            key={index}
                            img={img}
                            index={index}
                            images={noviaImages}
                          />
                        ))}
                      </Slider>
                    </div>
                  </ScrollReveal>
                </button>
                     
                <button className="absolute top-[40%] left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-pink-200 text-white text-xs md:text-base px-2 md:px-6 py-1 md:py-3 rounded opacity-0 group-hover:opacity-100 animate-color-button group-hover:opacity-100">
                       Reserva tu cita
                </button>
                <button
                  onClick={openNoviaFullscreen}
                  className="absolute top-[60%] left-1/2 transform -translate-x-1/2 bg-gray-700 hover:bg-gray-900 text-white text-xs md:text-base px-2 md:px-6 py-1 md:py-3 rounded opacity-0 group-hover:opacity-100 group-hover:opacity-100"
                >
                  Ver Detalles
                </button>
                <div className="absolute bottom-2 right-2 pointer-events-none opacity-80 group-hover:opacity-75 transition-opacity duration-300 ease-in-out">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="size-7 text-pink-300"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M3.75 3.75v4.5m0-4.5h4.5m-4.5 0L9 9M3.75 20.25v-4.5m0 4.5h4.5m-4.5 0L9 15M20.25 3.75h-4.5m4.5 0v4.5m0-4.5L15 9m5.25 11.25h-4.5m4.5 0v-4.5m0 4.5L15 15"
                    />
                  </svg>
                </div>
              </div>
              <ScrollReveal animationClassName="fade-in-text">
                <h2 className="text-xl md:text-2xl font-montserrat tracking-wide ${theme === 'dark' ? 'text-white' : 'text-gray-800'}">
                     Maquillaje Novia
                </h2>
              </ScrollReveal>
                 
              <ScrollReveal animationClassName="fade-in-text">
                <p
                  className={`leading-relaxed text-sm font-light md:text-base md:font-normal ${
                    theme === "dark" ? "text-gray-400" : "text-gray-600"
                  }`}
                >
                  From elegant centerpieces to dramatic installations, we
                  transform your reception space into a breathtaking floral
                  paradise.
                </p>
              </ScrollReveal>
              <NoviaModal
                isOpen={isNoviaFullscreenOpen}
                onClose={closeNoviaFullscreen}
                theme={theme}
                noviaMakeupServices={noviaMakeupServices}
                noviaImages={noviaImages}
              />
            </div>
            {/* Item Social*/}
            <div className="space-y-6 ">
              <div className="w-full aspect-square shadow-lg overflow-hidden relative group ">
                {/*Contenedor para hover y botones */} 
                <button
                  className="servicio-boton-clickable" // Clase para estilos CSS (añadirás en el Paso 2)
                  onClick={openSocialFullscreen} // Mueve el onClick aquí al botón
                  style={{ display: "block", width: "100%", height: "100%" }} // Asegura que el botón ocupe todo el contenedor
                >
                  {/* Imagen del servicio*/}
                  <ScrollReveal animationClassName="fade-in-image">
                    <div>
                      <Slider {...sliderSettings}>
                        {socialImages.map((img, index) => (
                          <SlideComponent
                            key={index}
                            img={img}
                            index={index}
                            images={socialImages}
                          />
                        ))}
                      </Slider>
                    </div>
                  </ScrollReveal>
                </button>
                <button className="absolute top-[40%] left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-pink-200 text-white text-xs md:text-base px-2 md:px-6 py-1 md:py-3 rounded opacity-0 group-hover:opacity-100 animate-color-button group-hover:opacity-100">
                       Reserva tu cita
                </button>
                <button
                  onClick={openSocialFullscreen}
                  className="absolute top-[60%] left-1/2 transform -translate-x-1/2 bg-gray-700 hover:bg-gray-900 text-white text-xs md:text-base px-2 md:px-6 py-1 md:py-3 rounded opacity-0 group-hover:opacity-100 group-hover:opacity-100"
                >
                  Ver Detalles
                </button>
                <div className="absolute bottom-2 right-2 pointer-events-none opacity-80 group-hover:opacity-75 transition-opacity duration-300 ease-in-out">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="size-7 text-pink-300"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M3.75 3.75v4.5m0-4.5h4.5m-4.5 0L9 9M3.75 20.25v-4.5m0 4.5h4.5m-4.5 0L9 15M20.25 3.75h-4.5m4.5 0v4.5m0-4.5L15 9m5.25 11.25h-4.5m4.5 0v-4.5m0 4.5L15 15"
                    />
                  </svg>
                </div>
              </div>
              <ScrollReveal animationClassName="fade-in-text">
                <h2 className="text-xl md:text-2xl font-montserrat tracking-wide ${theme === 'dark' ? 'text-white' : 'text-gray-800'}">
                  Maquillaje Social
                </h2>
              </ScrollReveal>

              <ScrollReveal animationClassName="fade-in-text">
                <p
                  className={`leading-relaxed text-sm font-light md:text-base md:font-normal ${
                    theme === "dark" ? "text-gray-400" : "text-gray-600"
                  }`}
                >
                  From elegant centerpieces to dramatic installations, we
                  transform your reception space into a breathtaking floral
                  paradise.
                </p>
              </ScrollReveal>
              <SocialModal
                isOpen={isSocialFullscreenOpen}
                onClose={closeSocialFullscreen}
                theme={theme}
                socialMakeupServices={socialMakeupServices}
                socialImages={socialImages}
              />
            </div>
            {/* Item Peinado*/}
            <div className="space-y-6 ">
              <div className="w-full aspect-square shadow-lg overflow-hidden relative group">
                {/*Contenedor para hover y botones */} 
                <button
                  className="servicio-boton-clickable" // Clase para estilos CSS (añadirás en el Paso 2)
                  onClick={openPeinadoFullscreen} // Mueve el onClick aquí al botón
                  style={{ display: "block", width: "100%", height: "100%" }} // Asegura que el botón ocupe todo el contenedor
                >
                  {/* Imagen del servicio*/}
                  <ScrollReveal animationClassName="fade-in-image">
                    <div>
                      <Slider {...sliderSettings}>
                        {peinadoImages.map((img, index) => (
                          <SlideComponent
                            key={index}
                            img={img}
                            index={index}
                            images={peinadoImages}
                          />
                        ))}
                      </Slider>
                    </div>
                  </ScrollReveal>
                </button>
                <button className="absolute top-[40%] left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-pink-200 text-white text-xs md:text-base px-2 md:px-6 py-1 md:py-3 rounded opacity-0 group-hover:opacity-100 animate-color-button group-hover:opacity-100">
                   Reserva tu cita
                </button>
                <button
                  onClick={openPeinadoFullscreen}
                  className="absolute top-[60%] left-1/2 transform -translate-x-1/2 bg-gray-700 hover:bg-gray-900 text-white text-xs md:text-base px-2 md:px-6 py-1 md:py-3 rounded opacity-0 group-hover:opacity-100 group-hover:opacity-100"
                >
                  Ver Detalles
                </button>
                <div className="absolute bottom-2 right-2 pointer-events-none opacity-80 group-hover:opacity-75 transition-opacity duration-300 ease-in-out">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="size-7 text-pink-300"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M3.75 3.75v4.5m0-4.5h4.5m-4.5 0L9 9M3.75 20.25v-4.5m0 4.5h4.5m-4.5 0L9 15M20.25 3.75h-4.5m4.5 0v4.5m0-4.5L15 9m5.25 11.25h-4.5m4.5 0v-4.5m0 4.5L15 15"
                    />
                  </svg>
                </div>
              </div>
              <ScrollReveal animationClassName="fade-in-text">
                <h2 className="text-xl md:text-2xl font-montserrat tracking-wide ${theme === 'dark' ? 'text-white' : 'text-gray-800'}">
                  Maquillaje Peinado
                </h2>
              </ScrollReveal>

              <ScrollReveal animationClassName="fade-in-text">
                <p
                  className={`leading-relaxed text-sm font-light md:text-base md:font-normal ${
                    theme === "dark" ? "text-gray-400" : "text-gray-600"
                  }`}
                >
                  From elegant centerpieces to dramatic installations, we
                  transform your reception space into a breathtaking floral
                  paradise.
                </p>
              </ScrollReveal>
              <PeinadoModal
                isOpen={isPeinadoFullscreenOpen}
                onClose={closePeinadoFullscreen}
                theme={theme}
                peinadoMakeupServices={peinadoMakeupServices}
                peinadoImages={peinadoImages}
              />
            </div>
            {/* Item Madura*/}
            <div className="space-y-6 ">
              <div className="w-full aspect-square shadow-lg overflow-hidden relative group ">
                {/*  Imagen del servicio (Ahora con onClick para abrir el modal) */}
                <button
                  className="servicio-boton-clickable" // Clase para estilos CSS (añadirás en el Paso 2)
                  onClick={openMaduraFullscreen} // Mueve el onClick aquí al botón
                  style={{ display: "block", width: "100%", height: "100%" }} // Asegura que el botón ocupe todo el contenedor
                >
                  <ScrollReveal animationClassName="fade-in-image">
                    <div>
                      <Slider {...sliderSettings}>
                        {maduraImages.map((img, index) => (
                          <SlideComponent
                            key={index}
                            img={img}
                            index={index}
                            images={maduraImages}
                          />
                        ))}
                      </Slider>
                    </div>
                  </ScrollReveal>
                </button>

                <button className="absolute top-[40%] left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-pink-200 text-white text-xs md:text-base px-2 md:px-6 py-1 md:py-3 rounded opacity-0 group-hover:opacity-100 animate-color-button group-hover:opacity-100">
                   Reserva tu cita
                </button>
                <button
                  onClick={openMaduraFullscreen}
                  className="absolute top-[60%] left-1/2 transform -translate-x-1/2 bg-gray-700 hover:bg-gray-900 text-white text-xs md:text-base px-2 md:px-6 py-1 md:py-3 rounded opacity-0 group-hover:opacity-100 group-hover:opacity-100"
                >
                  Ver Detalles
                </button>

                <div className="absolute bottom-2 right-2 pointer-events-none opacity-80 group-hover:opacity-75 transition-opacity duration-300 ease-in-out">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="size-7 text-pink-300"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M3.75 3.75v4.5m0-4.5h4.5m-4.5 0L9 9M3.75 20.25v-4.5m0 4.5h4.5m-4.5 0L9 15M20.25 3.75h-4.5m4.5 0v4.5m0-4.5L15 9m5.25 11.25h-4.5m4.5 0v-4.5m0 4.5L15 15"
                    />
                  </svg>
                </div>
              </div>
              <ScrollReveal animationClassName="fade-in-text">
                <h2 className="text-xl md:text-2xl font-montserrat tracking-wide ${theme === 'dark' ? 'text-white' : 'text-gray-800'}">
                  Maquillaje en Piel Madura
                </h2>
              </ScrollReveal>

              <ScrollReveal animationClassName="fade-in-text">
                <p
                  className={`leading-relaxed text-sm font-light md:text-base md:font-normal ${
                    theme === "dark" ? "text-gray-400" : "text-gray-600"
                  }`}
                >
                  From elegant centerpieces to dramatic installations, we
                  transform your reception space into a breathtaking floral
                  paradise.
                </p>
              </ScrollReveal>
              <MaduraModal
                isOpen={isMaduraFullscreenOpen}
                onClose={closeMaduraFullscreen}
                theme={theme}
                maduraMakeupServices={maduraMakeupServices}
                maduraImages={maduraImages}
              />
            </div>
            {/* Item Glam*/}
            <div className="space-y-6 ">
              <div className="w-full aspect-square shadow-lg overflow-hidden relative group">
                {/*  Imagen del servicio (Ahora con onClick para abrir el modal) */}
                <button
                  className="servicio-boton-clickable" // Clase para estilos CSS (añadirás en el Paso 2)
                  onClick={openGlamFullscreen} // Mueve el onClick aquí al botón
                  style={{ display: "block", width: "100%", height: "100%" }} // Asegura que el botón ocupe todo el contenedor
                >
                  <ScrollReveal animationClassName="fade-in-image">
                    <div
                      onClick={openGlamFullscreen}
                      className="cursor-pointer"
                    >
                      <Slider {...sliderSettings}>
                        {glamImages.map((img, index) => (
                          <SlideComponent
                            key={index}
                            img={img}
                            index={index}
                            images={glamImages}
                          />
                        ))}
                      </Slider>
                    </div>
                  </ScrollReveal>
                </button>

                <button className="absolute top-[40%] left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-pink-200 text-white text-xs md:text-base px-2 md:px-6 py-1 md:py-3 rounded opacity-0 group-hover:opacity-100 animate-color-button group-hover:opacity-100">
                   Reserva tu cita
                </button>
                <button
                  onClick={openGlamFullscreen}
                  className="absolute top-[60%] left-1/2 transform -translate-x-1/2 bg-gray-700 hover:bg-gray-900 text-white text-xs md:text-base px-2 md:px-6 py-1 md:py-3 rounded opacity-0 group-hover:opacity-100 group-hover:opacity-100"
                >
                  Ver Detalles
                </button>

                <div className="absolute bottom-2 right-2 pointer-events-none opacity-80 group-hover:opacity-75 transition-opacity duration-300 ease-in-out">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="size-7 text-pink-300"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M3.75 3.75v4.5m0-4.5h4.5m-4.5 0L9 9M3.75 20.25v-4.5m0 4.5h4.5m-4.5 0L9 15M20.25 3.75h-4.5m4.5 0v4.5m0-4.5L15 9m5.25 11.25h-4.5m4.5 0v-4.5m0 4.5L15 15"
                    />
                  </svg>
                </div>
              </div>
              <ScrollReveal animationClassName="fade-in-text">
                <h2 className="text-xl md:text-2xl font-montserrat tracking-wide ${theme === 'dark' ? 'text-white' : 'text-gray-800'}">
                  Maquillaje Glam
                </h2>
              </ScrollReveal>

              <ScrollReveal animationClassName="fade-in-text">
                <p
                  className={`leading-relaxed text-sm font-light md:text-base md:font-normal ${
                    theme === "dark" ? "text-gray-400" : "text-gray-600"
                  }`}
                >
                  From elegant centerpieces to dramatic installations, we
                  transform your reception space into a breathtaking floral
                  paradise.
                </p>
              </ScrollReveal>
              <GlamModal
                isOpen={isGlamFullscreenOpen}
                onClose={closeGlamFullscreen}
                theme={theme}
                glamMakeupServices={glamMakeupServices}
                glamImages={glamImages}
              />
            </div>
            {/* Item Express*/}
            <div className="space-y-6 ">
              <div className="w-full aspect-square shadow-lg overflow-hidden relative group ">
                {/*  Imagen del servicio (Ahora con onClick para abrir el modal) */}
                <button
                  className="servicio-boton-clickable" // Clase para estilos CSS (añadirás en el Paso 2)
                  onClick={openExpressFullscreen} // Mueve el onClick aquí al botón
                  style={{ display: "block", width: "100%", height: "100%" }} // Asegura que el botón ocupe todo el contenedor
                >
                  <ScrollReveal animationClassName="fade-in-image">
                    <div
                      onClick={openExpressFullscreen}
                      className="cursor-pointer"
                    >
                      <Slider {...sliderSettings}>
                        {expressImages.map((img, index) => (
                          <SlideComponent
                            key={index}
                            img={img}
                            index={index}
                            images={expressImages}
                          />
                        ))}
                      </Slider>
                    </div>
                  </ScrollReveal>
                </button>

                <button className="absolute top-[40%] left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-pink-200 text-white text-xs md:text-base px-2 md:px-6 py-1 md:py-3 rounded opacity-0 group-hover:opacity-100 animate-color-button group-hover:opacity-100">
                   Reserva tu cita
                </button>
                <button
                  onClick={openExpressFullscreen}
                  className="absolute top-[60%] left-1/2 transform -translate-x-1/2 bg-gray-700 hover:bg-gray-900 text-white text-xs md:text-base px-2 md:px-6 py-1 md:py-3 rounded opacity-0 group-hover:opacity-100 group-hover:opacity-100"
                >
                  Ver Detalles
                </button>

                <div className="absolute bottom-2 right-2 pointer-events-none opacity-80 group-hover:opacity-75 transition-opacity duration-300 ease-in-out">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="size-7 text-pink-300"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M3.75 3.75v4.5m0-4.5h4.5m-4.5 0L9 9M3.75 20.25v-4.5m0 4.5h4.5m-4.5 0L9 15M20.25 3.75h-4.5m4.5 0v4.5m0-4.5L15 9m5.25 11.25h-4.5m4.5 0v-4.5m0 4.5L15 15"
                    />
                  </svg>
                </div>
              </div>
              <ScrollReveal animationClassName="fade-in-text">
                <h2 className="text-xl md:text-2xl font-montserrat tracking-wide ${theme === 'dark' ? 'text-white' : 'text-gray-800'}">
                  Maquillaje Express
                </h2>
              </ScrollReveal>
              <ScrollReveal animationClassName="fade-in-text">
                <p
                  className={`leading-relaxed text-sm font-light md:text-base md:font-normal ${
                    theme === "dark" ? "text-gray-400" : "text-gray-600"
                  }`}
                >
                  From elegant centerpieces to dramatic installations, we
                  transform your reception space into a breathtaking floral
                  paradise.
                </p>
              </ScrollReveal>
              <ExpressModal
                isOpen={isExpressFullscreenOpen}
                onClose={closeExpressFullscreen}
                theme={theme}
                expressMakeupServices={expressMakeupServices}
                expressImages={expressImages}
              />{" "}
            </div>
          </div>
          {/* Fin sección servicios de maquillaje */}

          {/* Sección "Nuestros servicios incluyen" */}
          <div className="text-center space-y-8 mb-0 md:mb-6">
            <ScrollReveal animationClassName="fade-in-text">
              <h3 className="text-2xl md:text-5xl font-montserrat font-light tracking-wide ${theme === 'dark' ? 'text-white' : 'text-gray-800'}">
                Nuestros Servicios Incluyen
              </h3>
            </ScrollReveal>

            <ScrollReveal animationClassName="fade-in-text">
              <ul className="grid grid-cols-1 md:grid-cols-3 gap-6 text-gray-600">
                <li
                  className={`p-6 shadow-sm p-2 md:p-8 ${
                    theme === "dark" ? "bg-gray-800" : "bg-white"
                  }`}
                >
                  {" "}
                  <h4
                    className={`font-montserrat tracking-wide mb-3 text-center ${
                      theme === "dark" ? "text-white" : "text-gray-700"
                    }`}
                  >
                    Asesoría para cuidado de la piel
                  </h4>
                  <p
                    className={`text-xs sm:text-sm md:text-base ${
                      theme === "dark" ? "text-gray-400" : "text-gray-600"
                    }`}
                  >
                    Hidratación, limpieza y productos
                  </p>
                </li>

                <li
                  className={`p-6 shadow-sm p-2 md:p-8 ${
                    theme === "dark" ? "bg-gray-800" : "bg-white"
                  }`}
                >
                  {" "}
                  <h4
                    className={`font-montserrat tracking-wide mb-3 text-center ${
                      theme === "dark" ? "text-white" : "text-gray-700"
                    }`}
                  >
                    Ceremony Décor
                  </h4>
                  <p
                    className={`text-xs sm:text-sm md:text-base ${
                      theme === "dark" ? "text-gray-400" : "text-gray-600"
                    }`}
                  >
                    Arches, aisle designs, and altar arrangements
                  </p>
                </li>

                <li
                  className={`p-6 shadow-sm p-2 md:p-8 ${
                    theme === "dark" ? "bg-gray-800" : "bg-white"
                  }`}
                >
                  {" "}
                  <h4
                    className={`font-montserrat tracking-wide mb-3 text-center ${
                      theme === "dark" ? "text-white" : "text-gray-700"
                    }`}
                  >
                    Reception Flowers
                  </h4>
                  <p
                    className={`text-xs sm:text-sm md:text-base ${
                      theme === "dark" ? "text-gray-400" : "text-gray-600"
                    }`}
                  >
                    Centerpieces, cake flowers, and installations
                  </p>
                </li>
              </ul>
            </ScrollReveal>
          </div>
          {/* Fin sección "Nuestros servicios incluyen" */}
        </div>

        {/* Sección estadistica de servicios */}
        <div className="w-full mb-0 md:mb-6">
          <StatsSection />
        </div>
        {/* Fin sección estadistica de servicios */}

        <div className="max-w-7xl mx-auto px-2">
          {/* Sección Cursos */}
          <div className="text-center space-y-8 pt-16 mb-24 md:mb-48">
            <ScrollReveal animationClassName="fade-in-text">
              <h1 className="text-2xl md:text-5xl font-montserrat font-light text-center mb-12 tracking-wider ${theme === 'dark' ? 'text-white' : 'text-gray-800'}">
                NUESTROS CURSOS
              </h1>
            </ScrollReveal>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-12 mb-16">
              {/* CURSO BASICO */}
              <div className="space-y-6">
                <div className="w-full h-96 shadow-lg overflow-hidden relative group">
                  <ScrollReveal animationClassName="fade-in-image">
                    <img
                      src="https://images.unsplash.com/photo-1519225421980-715cb0215aed?auto=format&fit=crop&w=800"
                      alt="Curso Básico"
                      className="w-full h-full object-cover transition-transform duration-300 ease-in-out group-hover:scale-105"
                      loading="lazy"
                    />
                  </ScrollReveal>
                  <button className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-pink-200 text-white px-6 py-3 rounded opacity-0 group-hover:opacity-100 animate-color-button">
                    Reserva tu cita
                  </button>
                </div>
                <ScrollReveal animationClassName="fade-in-text">
                  <h2 className="text-xl md:text-2xl font-montserrat tracking-wide ${theme === 'dark' ? 'text-white' : 'text-gray-800'}">
                    Curso Básico
                  </h2>
                </ScrollReveal>
                <ScrollReveal animationClassName="fade-in-text">
                  <p
                    className={`leading-relaxed text-sm font-light md:text-base md:font-normal ${
                      theme === "dark" ? "text-gray-400" : "text-gray-600"
                    }`}
                  >
                    Each bouquet is thoughtfully designed to complement your
                    wedding style and color palette,               creating an
                    unforgettable statement piece for your special day.
                  </p>
                </ScrollReveal>
                <div className="mb-16">
                  <div
                    className={`shadow-sm p-2 md:p-8 ${
                      theme === "dark" ? "bg-gray-800" : "bg-white"
                    }`}
                  >
                    <ScrollReveal animationClassName="fade-in-text">
                      <h2
                        className={`text-lg text-base md:text-2xl font-montserrat tracking-wide mb-6 text-center ${
                          theme === "dark" ? "text-white" : "text-gray-700"
                        }`}
                      >
                        {basicCourseServices.category}
                        {/* Usamos los datos de basicCourseServices */}
                      </h2>
                    </ScrollReveal>
                    <div className="space-y-6">
                      {basicCourseServices.items.map((item, itemIndex) => (
                        <div
                          key={itemIndex}
                          className={`border-b pb-4 last:border-0 ${
                            theme === "dark"
                              ? "border-gray-600"
                              : "border-gray-100"
                          }`}
                        >
                          <div className="flex justify-between items-center mb-2">
                            <ScrollReveal animationClassName="fade-in-text">
                              <h3
                                className={`font-montserrat text-sm sm:text-lg ${
                                  theme === "dark"
                                    ? "text-white"
                                    : "text-gray-800"
                                }`}
                              >
                                {item.name}
                              </h3>
                            </ScrollReveal>
                            <ScrollReveal animationClassName="fade-in-text">
                              <span className="font-montserrat text-xs sm:text-sm md:text-base text-pink-600">
                                {item.price}
                              </span>
                            </ScrollReveal>
                          </div>
                          <ScrollReveal animationClassName="fade-in-text">
                            <p
                              className={`text-xs sm:text-sm md:text-base ${
                                theme === "dark"
                                  ? "text-gray-400"
                                  : "text-gray-600"
                              }`}
                            >
                              {item.description}
                            </p>
                          </ScrollReveal>
                        </div>
                      ))}
                    </div>
                  </div>{" "}
                </div>
              </div>
              {/* CURSO INTERMEDIO */}
              <div className="space-y-6">
                {" "}
                <div className="w-full h-96 shadow-lg overflow-hidden relative group">
                  <ScrollReveal animationClassName="fade-in-image">
                    <img
                      src="https://images.unsplash.com/photo-1519225421980-715cb0215aed?auto=format&fit=crop&w=800"
                      alt="Curso Básico"
                      className="w-full h-full object-cover transition-transform duration-300 ease-in-out group-hover:scale-105"
                      loading="lazy"
                    />
                  </ScrollReveal>
                  <button className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-pink-200 text-white px-6 py-3 rounded opacity-0 group-hover:opacity-100 animate-color-button">
                    Reserva tu cita
                  </button>{" "}
                </div>
                <ScrollReveal animationClassName="fade-in-text">
                  <h2 className="text-xl md:text-2xl font-montserrat tracking-wide ${theme === 'dark' ? 'text-white' : 'text-gray-800'}">
                    Curso Intermedio
                  </h2>
                </ScrollReveal>
                <ScrollReveal animationClassName="fade-in-text">
                  <p
                    className={`leading-relaxed text-sm font-light md:text-base md:font-normal ${
                      theme === "dark" ? "text-gray-400" : "text-gray-600"
                    }`}
                  >
                    Each bouquet is thoughtfully designed to complement your
                    wedding style and color palette,             creating an
                    unforgettable statement piece for your special day.
                  </p>
                </ScrollReveal>
                <div className="mb-16">
                  <div
                    className={`shadow-sm p-2 md:p-8 ${
                      theme === "dark" ? "bg-gray-800" : "bg-white"
                    }`}
                  >
                    <ScrollReveal animationClassName="fade-in-text">
                      <h2
                        className={`text-lg text-base md:text-2xl font-montserrat tracking-wide mb-6 text-center ${
                          theme === "dark" ? "text-white" : "text-gray-700"
                        }`}
                      >
                        {intermediateCourseServices.category}
                        {/* Usamos los datos de basicCourseServices */}
                      </h2>
                    </ScrollReveal>
                    <div className="space-y-6">
                      {intermediateCourseServices.items.map(
                        (item, itemIndex) => (
                          <div
                            key={itemIndex}
                            className={`border-b pb-4 last:border-0 ${
                              theme === "dark"
                                ? "border-gray-600"
                                : "border-gray-100"
                            }`}
                          >
                            <div className="flex justify-between items-center mb-2">
                              <ScrollReveal animationClassName="fade-in-text">
                                <h3
                                  className={`font-montserrat text-sm sm:text-lg ${
                                    theme === "dark"
                                      ? "text-white"
                                      : "text-gray-800"
                                  }`}
                                >
                                  {item.name}
                                </h3>
                              </ScrollReveal>
                              <ScrollReveal animationClassName="fade-in-text">
                                <span className="font-montserrat text-xs sm:text-sm md:text-base text-pink-600">
                                  {item.price}
                                </span>
                              </ScrollReveal>
                            </div>
                            <ScrollReveal animationClassName="fade-in-text">
                              <p
                                className={`text-xs sm:text-sm md:text-base ${
                                  theme === "dark"
                                    ? "text-gray-400"
                                    : "text-gray-600"
                                }`}
                              >
                                {item.description}
                              </p>
                            </ScrollReveal>
                          </div>
                        )
                      )}
                    </div>
                  </div>{" "}
                </div>
              </div>
              {/* CURSO AVANZADO */}
              <div className="space-y-6">
                {" "}
                <div className="w-full h-96 shadow-lg overflow-hidden relative group">
                  <ScrollReveal animationClassName="fade-in-image">
                    <img
                      src="https://images.unsplash.com/photo-1519225421980-715cb0215aed?auto=format&fit=crop&w=800"
                      alt="Curso Básico"
                      className="w-full h-full object-cover transition-transform duration-300 ease-in-out group-hover:scale-105"
                      loading="lazy"
                    />
                  </ScrollReveal>
                  <button className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-pink-200 text-white px-6 py-3 rounded opacity-0 group-hover:opacity-100 animate-color-button">
                    Reserva tu cita
                  </button>
                </div>
                <ScrollReveal animationClassName="fade-in-text">
                  <h2 className="text-xl md:text-2xl font-montserrat tracking-wide ${theme === 'dark' ? 'text-white' : 'text-gray-800'}">
                    Curso Avanzado
                  </h2>
                </ScrollReveal>
                <ScrollReveal animationClassName="fade-in-text">
                  <p
                    className={`leading-relaxed text-sm font-light md:text-base md:font-normal ${
                      theme === "dark" ? "text-gray-400" : "text-gray-600"
                    }`}
                  >
                    Each bouquet is thoughtfully designed to complement your
                    wedding style and color palette, creating an unforgettable
                    statement piece for your special day.
                  </p>
                </ScrollReveal>
                <div className="mb-16">
                  <div
                    className={`shadow-sm p-2 md:p-8 ${
                      theme === "dark" ? "bg-gray-800" : "bg-white"
                    }`}
                  >
                    <ScrollReveal animationClassName="fade-in-text">
                      <h2
                        className={`text-lg text-base md:text-2xl font-montserrat tracking-wide mb-6 text-center ${
                          theme === "dark" ? "text-white" : "text-gray-700"
                        }`}
                      >
                        {advancedCourseServices.category}
                        {/* Usamos los datos de basicCourseServices */}
                      </h2>
                    </ScrollReveal>
                    <div className="space-y-6">
                      {advancedCourseServices.items.map((item, itemIndex) => (
                        <div
                          key={itemIndex}
                          className={`border-b pb-4 last:border-0 ${
                            theme === "dark"
                              ? "border-gray-600"
                              : "border-gray-100"
                          }`}
                        >
                          <div className="flex justify-between items-center mb-2">
                            <ScrollReveal animationClassName="fade-in-text">
                              <h3
                                className={`font-montserrat text-sm sm:text-lg ${
                                  theme === "dark"
                                    ? "text-white"
                                    : "text-gray-800"
                                }`}
                              >
                                {item.name}
                              </h3>
                            </ScrollReveal>
                            <ScrollReveal animationClassName="fade-in-text">
                              <span className="font-montserrat text-xs sm:text-sm md:text-base text-pink-600">
                                {item.price}
                              </span>
                            </ScrollReveal>
                          </div>
                          <ScrollReveal animationClassName="fade-in-text">
                            <p
                              className={`text-xs sm:text-sm md:text-base ${
                                theme === "dark"
                                  ? "text-gray-400"
                                  : "text-gray-600"
                              }`}
                            >
                              {item.description}
                            </p>
                          </ScrollReveal>
                        </div>
                      ))}
                    </div>
                  </div>{" "}
                </div>
              </div>
              {/* CURSO PROFESIONAL */}
              <div className="space-y-6">
                <div className="w-full h-96 shadow-lg overflow-hidden relative group">
                  <ScrollReveal animationClassName="fade-in-image">
                    <img
                      src="https://images.unsplash.com/photo-1519225421980-715cb0215aed?auto=format&fit=crop&w=800"
                      alt="Curso Básico"
                      className="w-full h-full object-cover transition-transform duration-300 ease-in-out group-hover:scale-105"
                      loading="lazy"
                    />
                  </ScrollReveal>
                  <button className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-pink-200 text-white px-6 py-3 rounded opacity-0 group-hover:opacity-100 animate-color-button">
                    Reserva tu cita
                  </button>{" "}
                </div>
                <ScrollReveal animationClassName="fade-in-text">
                  <h2 className="text-xl md:text-2xl font-montserrat tracking-wide ${theme === 'dark' ? 'text-white' : 'text-gray-800'}">
                    Curso Profesional
                  </h2>
                </ScrollReveal>
                <ScrollReveal animationClassName="fade-in-text">
                  <p
                    className={`leading-relaxed text-sm font-light md:text-base md:font-normal ${
                      theme === "dark" ? "text-gray-400" : "text-gray-600"
                    }`}
                  >
                    Each bouquet is thoughtfully designed to complement your
                    wedding style and color palette,     creating an
                    unforgettable statement piece for your special day.
                  </p>
                </ScrollReveal>
                <div className="mb-16">
                  <div
                    className={`shadow-sm p-2 md:p-8 ${
                      theme === "dark" ? "bg-gray-800" : "bg-white"
                    }`}
                  >
                    <ScrollReveal animationClassName="fade-in-text">
                      <h2
                        className={`text-lg text-base md:text-2xl font-montserrat tracking-wide mb-6 text-center ${
                          theme === "dark" ? "text-white" : "text-gray-700"
                        }`}
                      >
                        {professionalCourseServices.category}
                        {/* Usamos los datos de basicCourseServices */}
                      </h2>
                    </ScrollReveal>
                    <div className="space-y-6">
                      {professionalCourseServices.items.map(
                        (item, itemIndex) => (
                          <div
                            key={itemIndex}
                            className={`border-b pb-4 last:border-0 ${
                              theme === "dark"
                                ? "border-gray-600"
                                : "border-gray-100"
                            }`}
                          >
                            <div className="flex justify-between items-center mb-2">
                              <ScrollReveal animationClassName="fade-in-text">
                                <h3
                                  className={`font-montserrat text-sm sm:text-lg ${
                                    theme === "dark"
                                      ? "text-white"
                                      : "text-gray-800"
                                  }`}
                                >
                                  {item.name}
                                </h3>
                              </ScrollReveal>
                              <ScrollReveal animationClassName="fade-in-text">
                                <span className="font-montserrat text-xs sm:text-sm md:text-base text-pink-600">
                                  {item.price}
                                </span>
                              </ScrollReveal>
                            </div>
                            <ScrollReveal animationClassName="fade-in-text">
                              <p
                                className={`text-xs sm:text-sm md:text-base ${
                                  theme === "dark"
                                    ? "text-gray-400"
                                    : "text-gray-600"
                                }`}
                              >
                                {item.description}
                              </p>
                            </ScrollReveal>
                          </div>
                        )
                      )}
                    </div>
                  </div>
                </div>{" "}
              </div>{" "}
            </div>
            {/* Fin sección Cursos */}
          </div>

          {/* Galería de imágenes modal */}
          {isGalleryOpen && (
            <div
              className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-80 z-50 flex justify-center items-center"
              onClick={closeGallery}
            >
              <div
                className="relative  p-4 rounded-lg"
                onClick={(e) => e.stopPropagation()}
              >
                {/* Detiene la propagación del evento para que no se cierre al hacer clic en la imagen/controles */}
                <button
                  onClick={closeGallery}
                  className="absolute top-2 right-2 text-gray-700 hover:text-gray-900"
                >
                  <svg
                    className="h-6 w-6 fill-current"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z" />
                    <path d="M0 0h24v24H0z" fill="none" />
                  </svg>
                </button>
                <img
                  src={galleryImages[currentImageIndex]}
                  alt={`Imagen en galería ${currentImageIndex + 1}`}
                  className="max-h-[80vh] max-w-[90vw] object-cover"
                  loading="lazy"
                  {...swipeHandlers}
                />
                <button
                  onClick={() =>
                    setCurrentImageIndex(
                      (currentImageIndex - 1 + galleryImages.length) %
                        galleryImages.length
                    )
                  }
                  className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-pink-200 text-gray rounded-full p-2 hover:bg-pink-300"
                  aria-label="Imagen anterior" // Accesibilidad
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    className="h-6 w-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M15 19l-7-7 7-7"
                    />
                  </svg>
                </button>
                <button
                  onClick={() =>
                    setCurrentImageIndex(
                      (currentImageIndex + 1) % galleryImages.length
                    )
                  }
                  className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-pink-200 text-gray rounded-full p-2 hover:bg-pink-300"
                  aria-label="Imagen siguiente" // Accesibilidad
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    className="h-6 w-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </button>
              </div>
            </div>
          )}
        </div>
        <PageBanner
          title="'Te debes este momento'"
          imageSrcs={[images.servicesBannerBottom]}
          objectPosition="bottom"
        >
          {/* Aquí está el código de tu botón como 'children' */}
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
      </main>
    </div>
  );
}

export default Services;
