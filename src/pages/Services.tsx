// src/pages/Services.tsx
import React, { useState, useCallback, createContext, useContext } from "react";
import StatsSection from "../components/StatsSection";
import "../GlobalStyles.css";
import { ModalContent } from "../data/servicesData";
import ModalContainer from "../components/modals/ModalRoot";
import { CourseModalContent } from "../data/coursesData";
import ErrorComponent from "../components/common/ErrorComponent"; // Importamos el componente ErrorComponent
import {
  SERVICES_TITLE_CLASS,
  COURSES_TITLE_CLASS,
} from "../constants/styles";
import { ServicesProps } from "../interfaces/interfaces";
import ServicesSectionBackground from "../components/svg/ServicesSectionBackground";
import CoursesSectionBackground from "../components/svg/CourseSectionBackground";
import backgroundServices from "../assets/img/background-pages/bg-7-desktop.webp";
import backgroundServicesMobile from "../assets/img/background-pages/bg-7-desktop.webp";
import backgroundCourses from "../assets/img/background-pages/bg-8-desktop.webp";
import backgroundCoursesMobile from "../assets/img/background-pages/bg-8-desktop.webp";
import SectionTitle from "../components/common/SectionTitle";
import ServicesSection from "../components/layout/ServicesSection";
import CoursesSection from "../components/layout/CoursesSection";
import ServicesIncludeSection from "../components/layout/ServicesIncludeSection"; // Importamos el nuevo componente
import { ErrorBoundary } from "react-error-boundary"; // Importamos el componente ErrorBoundary
import SectionDescription from "../components/common/SectionDescription"; // Importamos el componente SectionDescription
import { getServicesDescription } from "../data/servicesData"; // Importamos la función
import { getCoursesDescription } from "../data/coursesData"; // Importamos la función



// Creamos el contexto para el modal
interface ModalContextProps {
  isModalOpen: boolean;
  modalContent: ModalContent | CourseModalContent | null;
  openModal: (content: ModalContent | CourseModalContent) => void;
  closeModal: () => void;
}
const ModalContext = createContext<ModalContextProps | undefined>(undefined);

// Hook personalizado para usar el contexto del modal
export const useModal = () => { // Add export here
  const context = useContext(ModalContext);
  if (!context) {
    throw new Error("useModal debe ser usado dentro de un ModalProvider");
  }
  return context;
};

// Componente proveedor del contexto del modal
export const ModalProvider: React.FC<{ children: React.ReactNode }> = ({ // Add export here
  children,
}) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalContent, setModalContent] = useState<
    ModalContent | CourseModalContent | null
  >(null);

  //Funcion para abrir el modal
  const openModal = useCallback(
    (content: ModalContent | CourseModalContent) => {
      try {
        setModalContent(content);
        setIsModalOpen(true);
      } catch (error) {
        console.error("Error al abrir el modal:", error);
        // Aquí podrías mostrar un mensaje de error al usuario
      }
    },
    []
  );

  //Funcion para cerrar el modal
  const closeModal = useCallback(() => {
    try {
      setIsModalOpen(false);
      setModalContent(null);
    } catch (error) {
      console.error("Error al cerrar el modal:", error);
      // Aquí podrías mostrar un mensaje de error al usuario
    }
  }, []);

  const value = {
    isModalOpen,
    modalContent,
    openModal,
    closeModal,
  };

  return <ModalContext.Provider value={value}>{children}</ModalContext.Provider>;
};

// Componente principal Services
function Services({}: ServicesProps) {
  const [error, setError] = useState<string | null>(null);

  //Funcion para manejar errores
  if (error) {
    return <ErrorComponent error={new Error(error)} resetErrorBoundary={() => setError(null)} message={error} />;
  }

  //Obtenemos las descripciones
  const servicesDescription = getServicesDescription();
  const coursesDescription = getCoursesDescription();

  return (
    <ErrorBoundary
      FallbackComponent={ErrorComponent}
      onReset={() => setError(null)}
    >
      <ModalProvider>
        <div className="min-h-screen flex flex-col">
          <main className="flex-grow">
            {/* Contenedor del banner de la pagina */}
            <div className="relative">
              {/* Componente para la imagen de fondo */}
              <ServicesSectionBackground
                backgroundImage={backgroundServices}
                backgroundImageMobile={backgroundServicesMobile}
                objectPosition="bottom"
              >
                {/* Contenedor principal de la seccion de servicios */}
                <div className="mx-auto px-4 md:px-6 lg:px-12 xl:px-24 2xl:px-32 py-16 md:py-32 max-w-md md:max-w-lg lg:max-w-[768px] xl:max-w-[1024px] 2xl:max-w-[1440px] z-10">
                  {/* Titulo de la seccion de servicios */}
                  <SectionTitle
                    title="CONOCE LO QUE PODEMOS HACER POR TI"
                    className={SERVICES_TITLE_CLASS}
                  />
                  {/* Descripcion de la seccion de servicios */}
                  <SectionDescription
                    description={servicesDescription}
                    className="mt-4 mb-16 font-cinzel text-center" // Agregamos un margen superior
                  />
                  {/* Sección servicios de maquillaje */}
                  <ServicesSection /> {/* Ya no se pasa openModal */}
                </div>

                {/* Sección "Nuestros servicios incluyen" */}
                <ServicesIncludeSection />
              </ServicesSectionBackground>
            </div>

            {/* Sección estadistica de servicios */}
            <div className="w-full">
              <StatsSection />
            </div>

            {/* Courses Section */}
            <CoursesSectionBackground
              backgroundImage={backgroundCourses}
              backgroundImageMobile={backgroundCoursesMobile}
              objectPosition="center top"
            >
              {/* Add space between stats section and courses section */}
              <div className="mx-auto px-4 md:px-6 lg:px-12 xl:px-24 2xl:px-32 py-16 md:py-24 max-w-md md:max-w-lg lg:max-w-[768px] xl:max-w-[1024px] 2xl:max-w-[1440px]">
                {/* Added max-w-screen-lg */}
                <div className="text-center">
                  <SectionTitle
                    title="NUESTROS CURSOS"
                    className={COURSES_TITLE_CLASS}
                  />
                  {/* Descripcion de la seccion de cursos */}
                  <SectionDescription
                    description={coursesDescription}
                    className="mt-4 mb-16 font-cinzel text-center" // Agregamos un margen superior
                  />
                  <CoursesSection /> {/* Ya no se pasa openModal */}
                </div>
              </div>
            </CoursesSectionBackground>

            {/* Modal */}
            <div className="relative">
              <ModalContentRender />
            </div>
          </main>
        </div>
      </ModalProvider>
    </ErrorBoundary>
  );
}

//Componente para renderizar el modal
const ModalContentRender = () => {
  const { isModalOpen, closeModal, modalContent } = useModal();
  return (
    <ModalContainer
      isModalOpen={isModalOpen}
      closeModal={closeModal}
      modalContent={modalContent}
    />
  );
};

export default Services;
