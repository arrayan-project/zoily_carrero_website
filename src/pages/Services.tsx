import React, { useState, useEffect } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import StatsSection from "../components/StatsSection";
import PageBanner from "../components/PageBanner";
import images, { imageArrays } from '../assets/img/images';
import { useTheme } from "../components/context/useThemeHook";
import "../GlobalStyles.css"; // Asegúrate de importar About.css para los estilos de transición
import ServicesBackgroundSVG from "../components/svgBackground/ServicesBackground";
import ServiceCarousel from "../components/ServiceSlider";
import {
  noviaMakeupServices,
  socialMakeupServices,
  peinadoMakeupServices,
  maduraMakeupServices,
  glamMakeupServices,
  expressMakeupServices,
} from "../data/servicesData";
import { MOBILE_BREAKPOINT } from "../constants";
import { getTextColorClass } from "../GeneralUtil"; //Importamos la nueva funcion


//IMPORTAMOS LA NUEVA DATA
import {
  infoContentNovia,
  infoContentExpress,
  infoContentGlam,
  infoContentMadura,
  infoContentPeinado,
  infoContentSocial,
  termsContent,
} from "../data/servicesData";
import CourseCarousel from "../components/CourseSlider"; //Importamos el nuevo componente
import AnimationWrapper from "../components/AnimationLayer";
import ModalContainer from "../components/ModalRoot";
import courseData from "../data/coursesData";


interface ModalContent {
  images: string[];
  title: string;
  infoContent: React.ReactNode;
  termsContent: React.ReactNode;
  description?: string;
}

// Define ServicesProps interface here
interface ServicesProps {}

function Services({}: ServicesProps) {

  const [isCourseModalOpen, setIsCourseModalOpen] = useState(false);
  const [selectedCourse, setSelectedCourse] = useState<string | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalContent, setModalContent] = useState<ModalContent | null>(null); // Use the new interface
  
  const openModal = (
    content: ModalContent | null,
    courseKey?: string
  ) => {
    if (courseKey && courseData[courseKey]) {
      setSelectedCourse(courseKey);
      setIsCourseModalOpen(true);
    } else if (content) {
      setModalContent(content);
      setIsModalOpen(true);
    }
  };
  
  const closeModal = (isCourseModal?: boolean) => {
    if (isCourseModal) {
      setIsCourseModalOpen(false);
      setSelectedCourse(null);
    } else {
      setIsModalOpen(false);
      setModalContent(null);
    }
  };

  //Manejo del estado del tamaño de ventana
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

  const { theme } = useTheme();

  const { serviceBrideImages, serviceSocialImages, serviceHairAndMakeupImages, serviceMatureSkinImages, serviceGlamImages, serviceExpressImages} = imageArrays;
  const noviaImages=serviceBrideImages;
  const socialImages=serviceSocialImages;
  const peinadoImages=serviceHairAndMakeupImages;
  const maduraImages=serviceMatureSkinImages;
  const glamImages=serviceGlamImages;
  const expressImages=serviceExpressImages;

  return (
    <div className="min-h-screen flex flex-col">
      {/* Opens the main div */}
      <main className="flex-grow">
        {/* Opens the main content container */}
        {/* Banner personalizado para la sección de Servicios */}
        <PageBanner
          title="NUESTROS SERVICIOS"
          imageSrcs={[images.servicesBannerUp]}
          objectPosition="left-bottom"
        ></PageBanner>
        <div className="relative mb-24 md:mb-36">
          <ServicesBackgroundSVG className="absolute inset-0 w-full h-full" />
          <div className=" mx-auto px-2 py-16 md:py-32 md:px-6 lg:px-48 z-10 ">
            
          <AnimationWrapper animationClassName="fade-in-up-animation">
              <h1
                  className={`text-4xl md:text-5xl font-cinzel font-extralight text-center mb-24 md:py-10 tracking-wider ${getTextColorClass(theme)}`}
              >
                  CONOCE LO QUE PODEMOS HACER POR TI
              </h1>
          </AnimationWrapper>

            {/* Sección servicios de maquillaje */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 mb-16">
              {/* Item Novia)*/}
              <ServiceCarousel
                images={noviaImages}
                title="Maquillaje Novia"
                openModal={openModal}
                infoContent={infoContentNovia()}
                termsContent={termsContent()}
                description={noviaMakeupServices.description}
              />
              {/* Item Social*/}
              <ServiceCarousel
                images={socialImages}
                title="Maquillaje Social"
                openModal={openModal}
                infoContent={infoContentSocial()}
                termsContent={termsContent()}
                description={socialMakeupServices.description}
              />
              {/* Item Peinado*/}
              <ServiceCarousel
                images={peinadoImages}
                title="Maquillaje y Peinado"
                openModal={openModal}
                infoContent={infoContentPeinado()}
                termsContent={termsContent()}
                description={peinadoMakeupServices.description}
              />
              {/* Item Madura*/}
              <ServiceCarousel
                images={maduraImages}
                title="Maquillaje en Piel Madura"
                openModal={openModal}
                infoContent={infoContentMadura()}
                termsContent={termsContent()}
                description={maduraMakeupServices.description}
              />
              {/* Item Glam*/}
              <ServiceCarousel
                images={glamImages}
                title="Maquillaje Glam"
                openModal={openModal}
                infoContent={infoContentGlam()}
                termsContent={termsContent()}
                description={glamMakeupServices.description}
              />
              {/* Item Quinceañera*/}
              <ServiceCarousel
                images={expressImages}
                title="Maquillaje Quinceañera"
                openModal={openModal}
                infoContent={infoContentExpress()}
                termsContent={termsContent()}
                description={expressMakeupServices.description}
              />
            </div>
          </div>

          {/* Sección "Nuestros servicios incluyen" */}
          <div className="text-center space-y-8 md:mb-6">
            <h2
              className={`text-2xl md:text-3xl font-cinzel font-extralight text-center ${getTextColorClass(theme)}`}
            >
              Nuestros servicios incluyen
            </h2>

            <AnimationWrapper animationClassName="fade-in-text">
            <ul className="grid grid-cols-1 md:grid-cols-3 gap-6 text-gray-600">
                <li
                  className={`p-6 shadow-sm p-2 md:p-8 ${getTextColorClass(theme)}`}
                >
                  <h4
                    className={`font-cinzel tracking-wide mb-3 text-center ${getTextColorClass(theme)}`}
                  >
                    Asesoría para cuidado de la piel
                  </h4>
                  <p
                    className={`text-xs sm:text-sm md:text-base font-cinzel ${getTextColorClass(theme)}`}
                  >
                    Hidratación, limpieza y productos
                  </p>
                </li>

                <li
                  className={`p-6 shadow-sm p-2 md:p-8 font-cinzel ${getTextColorClass(theme)}`}
                >
                  <h4
                    className={`tracking-wide mb-3 text-center font-cinzel ${getTextColorClass(theme)}`}
                  >
                    Asesoría de imagen
                  </h4>
                  <p
                    className={`text-xs sm:text-sm md:text-base font-cinzel ${getTextColorClass(theme)}`}
                  >
                    Accesorios y prendas según la ocasión
                  </p>
                </li>

                <li
                  className={`p-6 shadow-sm p-2 md:p-8 font-cinzel ${getTextColorClass(theme)}`}
                >
                  <h4
                    className={`tracking-wide mb-3 text-center font-cinzel ${getTextColorClass(theme)}`}
                  >
                    Regalo sorpresa
                  </h4>
                  <p
                    className={`text-xs sm:text-sm md:text-base font-cinzel ${getTextColorClass(theme)}`}
                  >
                    Algo que te ayudará a recordar tu día
                  </p>
                </li>
              </ul>
              </AnimationWrapper>
          </div>
          {/* Fin sección "Nuestros servicios incluyen" */}
        </div>

        {/* Sección estadistica de servicios */}
        <div className="w-full md:mb-6">
          <StatsSection />
        </div>
        {/* Fin sección estadistica de servicios */}
        <div className=" mx-auto md:px-48 px-2">
          {/* Sección Cursos */}
          <div className="text-center space-y-20 pt-16 mb-24 md:mb-48">
          <AnimationWrapper animationClassName="fade-in-text">
          <h1 
          className={`text-2xl md:text-5xl font-cinzel font-light text-center md:mb-24 md-18 tracking-wider ${getTextColorClass(theme)}`}
          >
                NUESTROS CURSOS
              </h1>
              </AnimationWrapper>

              <AnimationWrapper animationClassName="fade-in-up-animation">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-12 mb-16">
                {/* CURSO BASICO */}
                <CourseCarousel
                  courseKey="basico"
                  title={courseData.basico.title}
                  image={courseData.basico.image}
                  openModal={openModal}                />
                {/* CURSO INTERMEDIO */}
                <CourseCarousel
                  courseKey="intermedio"
                  title={courseData.intermedio.title}
                  image={courseData.intermedio.image}
                  openModal={openModal}                />
                {/* CURSO AVANZADO */}
                <CourseCarousel
                  courseKey="avanzado"
                  title={courseData.avanzado.title}
                  image={courseData.avanzado.image}
                  openModal={openModal}                />
                {/* CURSO PROFESIONAL */}
                <CourseCarousel
                  courseKey="profesional"
                  title={courseData.profesional.title}
                  image={courseData.profesional.image}
                  openModal={openModal}                />
              </div>
              </AnimationWrapper>
              {/* Fin sección Cursos */}
          </div>
        </div>

        <ModalContainer
          selectedCourse={selectedCourse} 
          isCourseModalOpen={isCourseModalOpen}
          isModalOpen={isModalOpen}
          closeModal={closeModal}
          modalContent={modalContent}
        />

        {!isMobileView && (
          <PageBanner
            title="'Te debes este momento'"
            imageSrcs={[images.servicesBannerBottom]}
          ></PageBanner>
        )}
      </main>
    </div>
  );
}

export default Services;
