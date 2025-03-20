/**
 * @description Componente principal de la página de servicios.
 * Muestra los diferentes servicios de maquillaje y los cursos disponibles.
 * @param {ServicesProps} props - Propiedades del componente.
 */

import { useState, useCallback } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import StatsSection from "../components/StatsSection"; //Banner de estadisticas
import PageBanner from "../components/common/PageBanner"; //Banner de la página
import images, { imageArrays } from "../assets/img/images";
import { useTheme } from "../components/context/useThemeHook"; // Importamos el hook de los temas claro-oscuro
import "../GlobalStyles.css"; // Asegúrate de importar About.css para los estilos de transición
import {
  noviaMakeupServices,
  socialMakeupServices,
  peinadoMakeupServices,
  maduraMakeupServices,
  glamMakeupServices,
  expressMakeupServices,
} from "../data/servicesData";
import { getTextColorClass } from "../utils/utils"; //Importamos la nueva funcion
import {
  infoContentNovia,
  infoContentExpress,
  infoContentGlam,
  infoContentMadura,
  infoContentPeinado,
  infoContentSocial,
  termsContent,
} from "../data/servicesData";
import AnimationWrapper from "../components/common/AnimationLayer"; //Animacion de textos e imagenes
import ModalContainer from "../components/modals/ModalRoot"; // Importamos el contenedor de modales
import courseData from "../data/coursesData"; // Importamos los datos de los cursos
import { ModalContent } from "../data/servicesData"; // Importamos la interface
import useWindowSize from "../hooks/useWindowSize"; // Importamos el hook
import ErrorComponent from "../components/common/ErrorComponent"; // Importamos el componente
import {
  SERVICES_TITLE_CLASS,
  SERVICES_INCLUDE_TITLE_CLASS,
  COURSES_TITLE_CLASS,
} from "../constants/styles"; // Importamos las constantes
import ServiceIncludeItem from "../components/common/ServiceIncludeItem"; // Importamos el componente
import { ServicesProps } from "../interfaces/interfaces"; // Importamos la interface
import { renderCourseItem, renderServiceItem } from "../utils/renderItems"; // Importamos las funciones
import ServicesSectionBackground from "../components/svg/ServicesSectionBackground"; // Importa el nuevo componente
import backgroundServices from "../assets/img/background-pages/bg-4.webp"; // Importa la imagen para pantallas grandes
import backgroundServicesMobile from "../assets/img/background-pages/bg-4-mobile.webp"; // Importa la imagen para móviles (nueva)
import CoursesSectionBackground from "../components/svg/CourseSectionBackground"; // Importa el nuevo componente
import backgroundCourses from "../assets/img/background-pages/bg-1.webp"; // Importa la imagen para pantallas grandes
import backgroundCoursesMobile from "../assets/img/background-pages/bg-1-mobile.webp"; // Importa la imagen para móviles (nueva)
import MobileServicesCarousel from "../components/sliders/MobileServicesCarousel"; // Importamos el nuevo componente
import { mobileServices } from "../data/mobileServicesData"; // Importamos el array de servicios
import MobileCoursesCarousel from "../components/sliders/MobileCoursesCarousel"; // Import the new component
import { CourseData } from "../data/coursesData"; // Import the interface

function Services({}: ServicesProps) {
  //Manejo del estado de los modales
  const [isCourseModalOpen, setIsCourseModalOpen] = useState(false);
  const [selectedCourse, setSelectedCourse] = useState<string | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalContent, setModalContent] = useState<ModalContent | null>(null);
  const [error, setError] = useState<string | null>(null); // Nuevo estado para errores
  const { isMobileView } = useWindowSize(); // Usamos el hook

  const coursesArray: CourseData[] = Object.values(courseData); // Convert courseData object to an array

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

  return (
    <div className="min-h-screen flex flex-col">
      <main className="flex-grow">
        {/* Contenedor del banner de la pagina */}
        <div className="relative">
          {/* Componente para la imagen de fondo */}
          <ServicesSectionBackground
            backgroundImage={backgroundServices}
            backgroundImageMobile={backgroundServicesMobile} // Pasamos la imagen para móviles
            objectPosition="center top" // Ajustamos la posición del objeto
          >
            {/* Contenedor principal de la seccion de servicios */}
            <div className=" mx-auto px-2 py-16 md:py-32 md:px-6 lg:px-68 z-10 ">
              {/* Titulo de la seccion de servicios */}
              <AnimationWrapper animationClassName="fade-in-up">
                <h1
                  className={`${SERVICES_TITLE_CLASS} ${getTextColorClass(
                    theme
                  )}`}
                >
                  CONOCE LO QUE PODEMOS HACER POR TI
                </h1>
              </AnimationWrapper>

              {/* Sección servicios de maquillaje */}
              {isMobileView ? (
                // Si es vista movil, se muestra el carrusel de servicios
                <MobileServicesCarousel
                  services={mobileServices}
                  openModal={openModal}
                />
              ) : (
                // Si es vista desktop, se muestra la grilla de servicios
                <div
                  className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-8 md:mb-12"
                  aria-label="Servicios de Maquillaje"
                >
                  {/* Item Novia)*/}
                  {renderServiceItem(
                    serviceBrideImages,
                    "Maquillaje Novia",
                    openModal,
                    infoContentNovia(),
                    termsContent(),
                    noviaMakeupServices.description
                  )}
                  {/* Item Social*/}
                  {renderServiceItem(
                    serviceSocialImages,
                    "Maquillaje Social",
                    openModal,
                    infoContentSocial(),
                    termsContent(),
                    socialMakeupServices.description
                  )}
                  {/* Item Peinado*/}
                  {renderServiceItem(
                    serviceHairAndMakeupImages,
                    "Maquillaje y Peinado",
                    openModal,
                    infoContentPeinado(),
                    termsContent(),
                    peinadoMakeupServices.description
                  )}
                  {/* Item Madura*/}
                  {renderServiceItem(
                    serviceMatureSkinImages,
                    "Maquillaje en Piel Madura",
                    openModal,
                    infoContentMadura(),
                    termsContent(),
                    maduraMakeupServices.description
                  )}
                  {/* Item Glam*/}
                  {renderServiceItem(
                    serviceGlamImages,
                    "Maquillaje Glam",
                    openModal,
                    infoContentGlam(),
                    termsContent(),
                    glamMakeupServices.description
                  )}
                  {/* Item Quinceañera*/}
                  {renderServiceItem(
                    serviceExpressImages,
                    "Maquillaje Quinceañera",
                    openModal,
                    infoContentExpress(),
                    termsContent(),
                    expressMakeupServices.description
                  )}
                </div>
              )}
              {/* Fin sección servicios de maquillaje */}
            </div>

            {/* Sección "Nuestros servicios incluyen" */}

            <div className="text-center space-y-8 px-2 py-16 md:py-32 md:px-6 lg:px-68">
              <h2
                className={`${SERVICES_INCLUDE_TITLE_CLASS} ${getTextColorClass(
                  theme
                )}`}
              >
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
          </ServicesSectionBackground>
          {/* Fin sección "Nuestros servicios incluyen" */}
        </div>

        {/* Sección estadistica de servicios */}
        <div className="w-full">
          <StatsSection />
        </div>
        {/* Fin sección estadistica de servicios */}


        {/* Courses Section */}
        <CoursesSectionBackground
          backgroundImage={backgroundCourses}
          backgroundImageMobile={backgroundCoursesMobile}
          objectPosition="center top"
        >
          {/* Add space between stats section and courses section */}
          <div className="py-16 md:py-24 mx-auto md:px-68 px-2 max-w-screen-lg"> {/* Added max-w-screen-lg */}
          <div className="text-center">
              <AnimationWrapper animationClassName="fade-in-text">
                <h1
                  className={`${COURSES_TITLE_CLASS} ${getTextColorClass(
                    theme
                  )}`}
                >
                  NUESTROS CURSOS
                </h1>
              </AnimationWrapper>
              <AnimationWrapper animationClassName="fade-in-up">
                {isMobileView ? (
                  <MobileCoursesCarousel
                    courses={coursesArray}
                    openModal={openModal}
                  />
                ) : (
                  <div
                  className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8" 
                  aria-label="Cursos"
                  >
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
                )}
              </AnimationWrapper>
              {/* Fin sección Cursos */}
            </div>
          </div>
        </CoursesSectionBackground>

        {/* Add space between courses section and bottom banner */}
        <div className="py-16 md:py-24">
          {/* Componente para mostrar el modal */}
          <ModalContainer
            selectedCourse={selectedCourse}
            isCourseModalOpen={isCourseModalOpen}
            isModalOpen={isModalOpen}
            closeModal={closeModal}
            modalContent={modalContent}
          />

          {/* Banner inferior */}
          {!isMobileView && (
            <PageBanner
              title="'Te debes este momento'"
              imageSrcs={[images.servicesBannerBottom]}
            ></PageBanner>
          )}
          {isMobileView && (
            <PageBanner
              title="'Te debes este momento'"
              imageSrcs={[images.servicesBannerBottom]}
            ></PageBanner>
          )}
        </div>
      </main>
    </div>
  );
}

export default Services;
