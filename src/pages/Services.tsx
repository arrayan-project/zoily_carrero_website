/**
 * @description Componente principal de la página de servicios.
 * Muestra los diferentes servicios de maquillaje y los cursos disponibles.
 * @param {ServicesProps} props - Propiedades del componente.
 */

import { useState, useCallback, useMemo } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import StatsSection from "../components/StatsSection";
import PageBanner from "../components/common/PageBanner";
import images, { imageArrays } from "../assets/img/images";
import { useTheme } from "../components/context/useThemeHook";
import "../GlobalStyles.css"; // Asegúrate de importar About.css para los estilos de transición
import ServicesBackgroundSVG from "../components/svg/ServicesBackground";
import {noviaMakeupServices,socialMakeupServices,peinadoMakeupServices,maduraMakeupServices,glamMakeupServices,expressMakeupServices,} from "../data/servicesData";
import { getTextColorClass } from "../utils/utils"; //Importamos la nueva funcion
import {infoContentNovia,infoContentExpress,infoContentGlam,infoContentMadura,infoContentPeinado,infoContentSocial,termsContent,} from "../data/servicesData";
import AnimationWrapper from "../components/common/AnimationLayer";
import ModalContainer from "../components/modals/ModalRoot";
import courseData from "../data/coursesData";
import { ModalContent } from "../data/servicesData"; // Importamos la interface
import useWindowSize from "../hooks/useWindowSize"; // Importamos el hook
import ErrorComponent from "../components/common/ErrorComponent"; // Importamos el componente
import { SERVICES_TITLE_CLASS, SERVICES_INCLUDE_TITLE_CLASS, COURSES_TITLE_CLASS } from "../constants/styles"; // Importamos las constantes
import ServiceIncludeItem from "../components/common/ServiceIncludeItem"; // Importamos el componente
import { ServicesProps } from "../interfaces/interfaces"; // Importamos la interface
import { renderCourseItem, renderServiceItem } from "../utils/renderItems"; // Importamos las funciones

function Services({}: ServicesProps) { // Usamos la interfaz ServicesProps


  //Manejo del estado de los modales
  const [isCourseModalOpen, setIsCourseModalOpen] = useState(false);
  const [selectedCourse, setSelectedCourse] = useState<string | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalContent, setModalContent] = useState<ModalContent | null>(null);
  const [error, setError] = useState<string | null>(null); // Nuevo estado para errores
  const { width, isMobileView } = useWindowSize(); // Usamos el hook


  //Funcion para abrir el modal
  const openModal = useCallback((content: ModalContent) => {
    if (content.courseKey) {
      setSelectedCourse(content.courseKey);
      setIsCourseModalOpen(true);
    } else {
      setModalContent(content);
      setIsModalOpen(true);
    }
  }, []);

  //Funcion para cerrar el modal
  const closeModal = useCallback((isCourseModal?: boolean) => {
    if (isCourseModal) {
      setIsCourseModalOpen(false);
      setSelectedCourse(null);
    } else {
      setIsModalOpen(false);
      setModalContent(null);
    }
  }, []);


  //Funcion para manejar errores
  if (error) {
    return <ErrorComponent message={error} />;
  }


  //Constante para manejar hook del tema claro-oscuro
  const { theme } = useTheme();


  //Constantes para manejar las imagenes de los servicios
  const {
    serviceBrideImages,
    serviceSocialImages,
    serviceHairAndMakeupImages,
    serviceMatureSkinImages,
    serviceGlamImages,
    serviceExpressImages,
  } = imageArrays;

  //Constantes para manejar la carga de imagenes
  const noviaImages = useMemo(() => serviceBrideImages, []);
  const socialImages = useMemo(() => serviceSocialImages, []);
  const peinadoImages = useMemo(() => serviceHairAndMakeupImages, []);
  const maduraImages = useMemo(() => serviceMatureSkinImages, []);
  const glamImages = useMemo(() => serviceGlamImages, []);
  const expressImages = useMemo(() => serviceExpressImages, []);


  return (
    <div className="min-h-screen flex flex-col">
      <main className="flex-grow">

        <PageBanner
          title="NUESTROS SERVICIOS"
          imageSrcs={[images.servicesBannerUp]}
          objectPosition="left-bottom"
        ></PageBanner>

        <div className="relative mb-24 md:mb-36">

          <ServicesBackgroundSVG className="absolute inset-0 w-full h-full" />
          <div className=" mx-auto px-2 py-16 md:py-32 md:px-6 lg:px-68 z-10 ">

            <AnimationWrapper animationClassName="fade-in-up">
              <h1
                className={`${SERVICES_TITLE_CLASS} ${getTextColorClass(theme)}`}>
                CONOCE LO QUE PODEMOS HACER POR TI
              </h1>
            </AnimationWrapper>





            {/* Sección servicios de maquillaje */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 mb-16" aria-label="Servicios de Maquillaje">

              {/* Item Novia)*/}
              {renderServiceItem(
                noviaImages,
                "Maquillaje Novia",
                openModal,
                infoContentNovia(),
                termsContent(),
                noviaMakeupServices.description
              )}
              {/* Item Social*/}
              {/* Item Social*/}
              {renderServiceItem(
                socialImages,
                "Maquillaje Social",
                openModal,
                infoContentSocial(),
                termsContent(),
                socialMakeupServices.description
              )}
              {/* Item Peinado*/}
              {renderServiceItem(
                peinadoImages,
                "Maquillaje y Peinado",
                openModal,
                infoContentPeinado(),
                termsContent(),
                peinadoMakeupServices.description
              )}
              {/* Item Madura*/}
              {renderServiceItem(
                maduraImages,
                "Maquillaje en Piel Madura",
                openModal,
                infoContentMadura(),
                termsContent(),
                maduraMakeupServices.description
              )}
              {/* Item Glam*/}
              {renderServiceItem(
                glamImages,
                "Maquillaje Glam",
                openModal,
                infoContentGlam(),
                termsContent(),
                glamMakeupServices.description
              )}
              {/* Item Quinceañera*/}
              {renderServiceItem(
                expressImages,
                "Maquillaje Quinceañera",
                openModal,
                infoContentExpress(),
                termsContent(),
                expressMakeupServices.description
              )}
            </div>
          </div>
          {/* Fin sección servicios de maquillaje */}




          {/* Sección "Nuestros servicios incluyen" */}
          <div className="text-center space-y-8 md:mb-6">
            <h2
              className={`${SERVICES_INCLUDE_TITLE_CLASS} ${getTextColorClass(theme)}`}>
              Nuestros servicios incluyen
            </h2>
            <AnimationWrapper animationClassName="fade-in-text">
              <ul className="grid grid-cols-1 md:grid-cols-3 gap-6 text-gray-600">
                <ServiceIncludeItem
                  title="Asesoría para cuidado de la piel"
                  description="Hidratación, limpieza y productos"
                />
                <ServiceIncludeItem
                  title="Asesoría de imagen"
                  description="Accesorios y prendas según la ocasión"
                />
                <ServiceIncludeItem
                  title="Regalo sorpresa"
                  description="Algo que te ayudará a recordar tu día"
                />
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




        {/* Sección Cursos */}
        <div className=" mx-auto md:px-68 px-2">
          <div className="text-center space-y-20 pt-16 mb-24 md:mb-48">
            <AnimationWrapper animationClassName="fade-in-text">
              <h1
                className={`${COURSES_TITLE_CLASS} ${getTextColorClass(theme)}`}>
                NUESTROS CURSOS
              </h1>
            </AnimationWrapper>
            <AnimationWrapper animationClassName="fade-in-up">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-12 mb-16" aria-label="Cursos">
                {/* CURSO BASICO */}
                {renderCourseItem(
                  [courseData.basico.image],
                  courseData.basico.title,
                  openModal,
                  "basico"
                )}
                {/* CURSO INTERMEDIO */}
                {renderCourseItem(
                  [courseData.intermedio.image],
                  courseData.intermedio.title,
                  openModal,
                  "intermedio"
                )}
                {/* CURSO AVANZADO */}
                {renderCourseItem(
                  [courseData.avanzado.image],
                  courseData.avanzado.title,
                  openModal,
                  "avanzado"
                )}
                {/* CURSO PROFESIONAL */}
                {renderCourseItem(
                  [courseData.profesional.image],
                  courseData.profesional.title,
                  openModal,
                  "profesional"
                )}
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
