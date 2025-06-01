// src/pages/Services.tsx
import { useState, lazy } from "react";
import {
  COURSES_PAGE_TITLE_CLASS,
  COURSES_SUBTITLE_CLASS
} from "../constants/styles";
import { ServicesProps } from "../interfaces/interfaces";
import { getCoursesDescription } from "../data/coursesData";
import { getServicesDescription } from "../data/servicesData";
import { ErrorBoundary } from "react-error-boundary";
import { useTheme } from "../components/context/themeContext";
import { ModalProvider, useModal } from "../components/context/ModalContext";
import { Helmet } from "react-helmet-async";
import useWindowSize from "../hooks/useWindowSize";
import StatsSection from "../components/StatsSection";
import ModalContainer from "../components/modals/ModalRoot";
import ErrorComponent from "../components/common/ErrorComponent";
import ServicePromoSection from "../components/servicesAndCourses/ServicePromoSection";
import SectionTitle from "../components/common/SectionTitle";
import ServicesIncludeSection from "../components/servicesAndCourses/ServicesIncludeSection";
import SectionDescription from "../components/common/SectionDescription";
import "../GlobalStyles.css";
import LazySectionLoader from "../components/common/LazySectionLoader";
import ServicesCarouselSkeleton from "../components/skeletons/ServicesCarouselSkeleton";
import ServicesColumnsSkeleton from "../components/skeletons/ServicesColumnsSkeleton";
import CoursesCarouselSkeleton from "../components/skeletons/CoursesCarouselSkeleton";
import CoursesColumnsSkeleton from "../components/skeletons/CoursesColumnsSkeleton";
import useScrollToHash from "../hooks/useScrollToHash";


// Lazy imports
const ServicesCarouselSection = lazy(
  () => import("../components/servicesAndCourses/ServicesCarouselSection")
);
const ServicesColumnSection = lazy(
  () => import("../components/servicesAndCourses/ServicesColumnsSection")
);
const CoursesCarouselSection = lazy(
  () => import("../components/servicesAndCourses/CourseCarouselSection")
);
const CoursesColumnSection = lazy(
  () => import("../components/servicesAndCourses/CourseColumnsSection")
);

// Componente principal Services
function Services({}: ServicesProps) {
  const [error, setError] = useState<string | null>(null);
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

  useScrollToHash();

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
          />

          <section
            id="services"
            className="container mx-auto mt-12 md:mt-24 md:mb-10 md:px-4 lg:px-8 xl:px-16 2xl:px-24 z-10"
            style={{ backgroundColor: colors.background, color: colors.text }}
          >
            {!isMobileView && (
              <LazySectionLoader
                minHeight="85vh"
                fallback={<ServicesCarouselSkeleton />}
              >
                <ServicesCarouselSection />
              </LazySectionLoader>
            )}
            {isMobileView && (
              <LazySectionLoader
                minHeight="300px"
                fallback={<ServicesColumnsSkeleton />}
              >
                <ServicesColumnSection />
              </LazySectionLoader>
            )}
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
            className="container mx-auto md:mb-10 md:px-4 lg:px-8 xl:px-16 2xl:px-24 py-16 md:py-32 z-10"
          >
            <SectionTitle
              title="NUESTROS CURSOS"
              className={COURSES_PAGE_TITLE_CLASS}
              style={{ color: colors.accent }}
            />
            <SectionDescription
              description={coursesDescription}
              className={COURSES_SUBTITLE_CLASS}
              style={{ color: colors.accent }}
            />

            {!isMobileView && (
              <LazySectionLoader
                minHeight="85vh"
                fallback={<CoursesCarouselSkeleton />}
              >
                <CoursesCarouselSection />
              </LazySectionLoader>
            )}
            {isMobileView && (
              <LazySectionLoader
                minHeight="300px"
                fallback={<CoursesColumnsSkeleton />}
              >
                <CoursesColumnSection />
              </LazySectionLoader>
            )}
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
