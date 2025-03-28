// src/pages/Services.tsx
import React, { useState, useCallback, createContext, useContext } from "react";
import StatsSection from "../components/StatsSection";
import "../GlobalStyles.css";
import { ModalContent } from "../data/servicesData";
import ModalContainer from "../components/modals/ModalRoot";
import { CourseModalContent } from "../data/coursesData";
import ErrorComponent from "../components/common/ErrorComponent";
import {HOME_LINKS_TITLE_CLASS} from "../constants/styles";
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
import ServicesIncludeSection from "../components/layout/ServicesIncludeSection";
import { ErrorBoundary } from "react-error-boundary";
import SectionDescription from "../components/common/SectionDescription";
import { getServicesDescription } from "../data/servicesData";
import { getCoursesDescription } from "../data/coursesData";

// Creamos el contexto para el modal
interface ModalContextProps {
  isModalOpen: boolean;
  modalContent: ModalContent | CourseModalContent | null;
  openModal: (content: ModalContent | CourseModalContent) => void;
  closeModal: () => void;
}
const ModalContext = createContext<ModalContextProps | undefined>(undefined);

// Hook personalizado para usar el contexto del modal
export const useModal = () => {
  const context = useContext(ModalContext);
  if (!context) {
    throw new Error("useModal debe ser usado dentro de un ModalProvider");
  }
  return context;
};

// Componente proveedor del contexto del modal
export const ModalProvider: React.FC<{ children: React.ReactNode }> = ({
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
    <ErrorBoundary FallbackComponent={ErrorComponent} onReset={() => setError(null)}>
      <ModalProvider>
        <main className="min-h-screen flex flex-col">
          <ServicesSectionBackground
            backgroundImage={backgroundServices}
            backgroundImageMobile={backgroundServicesMobile}
            objectPosition="bottom"
          >
            <section id="services" className="container mx-auto px-2 md:px-4 lg:px-8 xl:px-16 2xl:px-24 py-16 md:py-32 z-10"> {/* AQUI LOS CAMBIOS */}
            <SectionTitle title="Conoce lo que podemos hacer por ti" className={HOME_LINKS_TITLE_CLASS} />
              <SectionDescription description={servicesDescription} className="mt-4 mb-16 md:mb-24 font-cinzel text-center" />
              <ServicesSection />
            </section>
              <ServicesIncludeSection />
          </ServicesSectionBackground>
          
            <section className="w-full">
              <StatsSection />
            </section>
          
          <CoursesSectionBackground
            backgroundImage={backgroundCourses}
            backgroundImageMobile={backgroundCoursesMobile}
            objectPosition="center top"
          >
            <section id="cursos" className="mx-auto px-4 md:px-6 lg:px-12 xl:px-24 2xl:px-32 py-16 md:py-24 max-w-screen-lg text-center">
              <SectionTitle title="NUESTROS CURSOS" className={HOME_LINKS_TITLE_CLASS} />
              <SectionDescription description={coursesDescription} className="mt-4 mb-16 md:mb-24 font-cinzel text-center" />
              <CoursesSection />
            </section>
          </CoursesSectionBackground>
          
          <ModalContentRender />
        </main>
      </ModalProvider>
    </ErrorBoundary>
  );
}
const ModalContentRender = () => {
  const { isModalOpen, closeModal, modalContent } = useModal();
  return <ModalContainer isModalOpen={isModalOpen} closeModal={closeModal} modalContent={modalContent} />;
};

export default Services;
