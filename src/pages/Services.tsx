// src/pages/Services.tsx
import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { HOME_LINKS_TITLE_CLASS, PARAGRAPH_CLASS, TEXT_CENTER } from "../constants/styles";
import { ServicesProps } from "../interfaces/interfaces";
import { getCoursesDescription } from "../data/coursesData";
import { getServicesDescription } from "../data/servicesData";
import { ErrorBoundary } from "react-error-boundary";
import { useTheme } from "../components/context/useThemeHook";
import { ModalProvider, useModal } from "../components/context/ModalContext";
import { Helmet } from "react-helmet-async";
import useWindowSize from "../hooks/useWindowSize";
import StatsSection from "../components/StatsSection";
import ModalContainer from "../components/modals/ModalRoot";
import ErrorComponent from "../components/common/ErrorComponent";
import ServicePromoSection from "../components/services&courses/ServicePromoSection";
import SectionTitle from "../components/common/SectionTitle";
import ServicesIncludeSection from "../components/layout/ServicesIncludeSection";
import SectionDescription from "../components/common/SectionDescription";
import ServicesColumnSection from "../components/services&courses/ServicesColumnsSection";
import ServicesCarouselSection from "../components/services&courses/ServicesCarouselSection";
import CoursesColumnSection from "../components/services&courses/CourseColumnsSection";
import CoursesCarouselSection from "../components/services&courses/CourseCarouselSection";
import "../GlobalStyles.css";

// Componente principal Services
function Services({}: ServicesProps) {
  const [error, setError] = useState<string | null>(null);
  const location = useLocation();
  const { isMobileView } = useWindowSize();

  //Funcion para manejar errores
  if (error) {
    return (
      <ErrorComponent
        error={new Error(error)}
        resetErrorBoundary={() => setError(null)}
        message={error}
      />
    );
  }

  //Obtenemos las descripciones
  const servicesDescription = getServicesDescription();
  const coursesDescription = getCoursesDescription();

  useEffect(() => {
    const hash = location.hash; // Obtenemos el hash de la URL
    if (hash) {
      const element = document.querySelector(hash); // Buscamos el elemento con el hash como ID
      if (element) {
        element.scrollIntoView({ behavior: "smooth" }); // Hacemos scroll al elemento
      }
    } else {
      window.scrollTo(0, 0); // Si no hay hash, hacemos scroll al inicio de la página
    }
  }, [location.hash]); // Se ejecuta cada vez que cambia el hash

  const { colors } = useTheme();

  return (
    <ErrorBoundary
      FallbackComponent={ErrorComponent}
      onReset={() => setError(null)}
    >
      <ModalProvider>
        <main
          className="min-h-screen flex flex-col"
          style={{ backgroundColor: colors.background, color: colors.text }}
        >
          <Helmet>
            <title>
              Servicios y Cursos de Maquillaje Profesional | Zoily Carrero
            </title>
            <meta
              name="description"
              content="Descubre los servicios de maquillaje (novias, social, quinceañera, glam, basico, full, eventos, piel madura, señoras) y cursos de automaquillaje ofrecidos por Zoily Carrero. ¡Transforma tu look o aprende nuevas técnicas!"
            />
          </Helmet>

          <ServicePromoSection
            title="Conoce lo que podemos hacer por ti"
            description={servicesDescription}
            titleClassName={`${HOME_LINKS_TITLE_CLASS} max-h-[550px]:text-xs max-h-[550px]:bg-yellow-300`} // ¡Cambio drástico para prueba!
          />

          <section
            id="services"
            className="container mx-auto mt-12 md:mt-24 md:mb-10 md:px-4 lg:px-8 xl:px-16 2xl:px-24 z-10"
            style={{ backgroundColor: colors.background, color: colors.text }}
          >
            {!isMobileView && <ServicesCarouselSection />}
            {isMobileView && <ServicesColumnSection />}
          </section>

          <section
            style={{ backgroundColor: colors.background, color: colors.text }}
          >
            <ServicesIncludeSection />
          </section>

          <section className="w-full">
            <StatsSection />
          </section>

          <section
            id="cursos"
            className="container mx-auto mt-12 md:mt-24 md:mb-10 md:px-4 lg:px-8 xl:px-16 2xl:px-24 py-16 md:py-32 z-10"
          >
            <SectionTitle
              title="NUESTROS CURSOS"
              className={HOME_LINKS_TITLE_CLASS}
              style={{ color: colors.accent }}
            />
            <SectionDescription
              description={coursesDescription}
              className={`${PARAGRAPH_CLASS} ${TEXT_CENTER} mt-4 mb-16 md:mb-24`}
              style={{ color: colors.accent }}
            />

            {!isMobileView && <CoursesCarouselSection />}
            {isMobileView && <CoursesColumnSection />}
          </section>

          <ModalContentRender />
        </main>
      </ModalProvider>
    </ErrorBoundary>
  );
}
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
