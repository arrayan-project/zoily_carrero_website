// src/pages/MakeUp.tsx
import { useState, lazy, Suspense } from "react";
import { ServicesProps } from "../interfaces/interfaces";
import { ErrorBoundary } from "react-error-boundary";
import { useTheme } from "../components/context/themeContext";
import {
  ModalProvider,
  useModal,
} from "../components/modals/modalServ-Cour/ModalContextServices";
import { LazyHelmetProvider, LazyHelmet } from "../utils/LazyHelmet";
import ModalContainer from "../components/modals/modalServ-Cour/ModalRootServices";
import ErrorComponent from "../components/common/ErrorComponent";
import "../GlobalStyles.css";
import LazySectionLoader from "../components/common/LazySectionLoader";
import ServicesCarouselSkeleton from "../components/skeletons/Services/ServicesCarouselSkeleton";
import useScrollToHash from "../hooks/useScrollToHash";

// Lazy imports
const MakeUpCarouselSection = lazy(
  () => import("../components/makeup/MakeUpCarouselSection")
);

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
          <Suspense fallback={null}>
            <LazyHelmetProvider>
              <LazyHelmet>
                <title>
                  Servicios y Cursos de Maquillaje Profesional | Zoily Carrero
                </title>
                <meta
                  name="description"
                  content="Descubre los servicios de maquillaje (novias, social, quinceañera, glam, básico, full, eventos, piel madura, señoras) y cursos de automaquillaje ofrecidos por Zoily Carrero. ¡Transforma tu look o aprende nuevas técnicas!"
                />

                {/* ––– Open Graph ––– */}
                <meta
                  property="og:title"
                  content="Servicios y Cursos de Maquillaje Profesional | Zoily Carrero"
                />
                <meta
                  property="og:description"
                  content="Descubre los servicios de maquillaje (novias, social, quinceañera, glam, básico, full, eventos, piel madura, señoras) y cursos de automaquillaje ofrecidos por Zoily Carrero. ¡Transforma tu look o aprende nuevas técnicas!"
                />
                <meta
                  property="og:image"
                  content="https://zoilycarrero.web.app/img/zoilynegro.webp"
                />
                {/* ← Cambiado de “/home” a la ruta real de Servicios (por ejemplo /services) */}
                <meta
                  property="og:url"
                  content="https://zoilycarrero.web.app/services"
                />
                <meta property="og:type" content="website" />
                <meta
                  property="og:site_name"
                  content="SoyZoilyCarrero MakeUp"
                />
                <meta property="og:locale" content="es_CL" />

                {/* ––– Twitter Card ––– */}
                <meta name="twitter:card" content="summary_large_image" />
                <meta
                  name="twitter:title"
                  content="Servicios y Cursos de Maquillaje Profesional | Zoily Carrero"
                />
                <meta
                  name="twitter:description"
                  content="Descubre los servicios de maquillaje (novias, social, quinceañera, glam, básico, full, eventos, piel madura, señoras) y cursos de automaquillaje ofrecidos por Zoily Carrero. ¡Transforma tu look o aprende nuevas técnicas!"
                />
                <meta
                  name="twitter:image"
                  content="https://zoilycarrero.web.app/img/zoilynegro.webp"
                />

                {/* ––– Canonical ––– */}
                {/* ← Cambiado de “/home” a la ruta real de Servicios */}
                <link
                  rel="canonical"
                  href="https://zoilycarrero.web.app/services"
                />
              </LazyHelmet>
            </LazyHelmetProvider>
          </Suspense>

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
  const { isModalOpen, closeModal, modalContent, clearModalContent } =
    useModal();
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
