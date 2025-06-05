// src/pages/Services.tsx
import { useState, lazy } from "react";
import { ServicesProps } from "../interfaces/interfaces";
import { ErrorBoundary } from "react-error-boundary";
import { useTheme } from "../components/context/themeContext";
import { ModalProvider, useModal } from "../components/modals/modalServ-Cour/ModalContextServices";
import { Helmet } from "react-helmet-async";
import ModalContainer from "../components/modals/modalServ-Cour/ModalRootServices";
import ErrorComponent from "../components/common/ErrorComponent";
import "../GlobalStyles.css";
import LazySectionLoader from "../components/common/LazySectionLoader";
import ServicesCarouselSkeleton from "../components/skeletons/Services/ServicesCarouselSkeleton";
import useScrollToHash from "../hooks/useScrollToHash";


// Lazy imports
const MakeUpCarouselSection = lazy(() => import("../components/makeup/MakeUpCarouselSection"));


// Componente principal Services
function ServicesTest({}: ServicesProps) {
  const [error, setError] = useState<string | null>(null);

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

          <section
            id="services"
            className="w-full relative"
            style={{ backgroundColor: colors.background, color: colors.text }}
          >
              <LazySectionLoader
                minHeight="screen"
                fallback={<ServicesCarouselSkeleton />}
              >
                <MakeUpCarouselSection />
              </LazySectionLoader>

          </section>

          <ModalContentRender />
        </main>
      </ModalProvider>
    </ErrorBoundary>
  );
}
const ModalContentRender = () => {
  const { isModalOpen, closeModal, modalContent, clearModalContent } = useModal(); 
  return (
    <ModalContainer
      isModalOpen={isModalOpen}
      closeModal={closeModal}
      modalContent={modalContent}
      clearModalContent={clearModalContent}
    />
  );
};

export default ServicesTest;
