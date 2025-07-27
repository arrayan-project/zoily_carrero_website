// src/pages/UGC.tsx
import React, { lazy, Suspense } from "react";
import { useTheme } from "../components/context/themeContext";
import { LazyHelmetProvider, LazyHelmet } from "../utils/LazyHelmet";
import UGCMainSectionSkeleton from "../components/skeletons/UGC/UGCMainSectionSkeleton";
import UGCPhoneExampleSectionSkeleton from "../components/skeletons/UGC/UGCPhoneExampleSectionSkeleton";
import useScrollToHash from "../hooks/useScrollToHash";
import { ErrorBoundary } from "react-error-boundary";
import ErrorComponent from "../components/common/ErrorComponent";

const UGCMainSection = lazy(() => import("../components/ugc/UGCMainSection"));
const UGCContentTitleSection = lazy(
  () => import("../components/ugc/UGCContentTitleSection")
);
const UGCPhoneExampleSection = lazy(
  () => import("../components/ugc/UGCPhoneExampleSection")
);
const UGCMiddleBanner = lazy(() => import("../components/ugc/UGCMiddleBanner"));
const UGCBrandsAlliances = lazy(
  () => import("../components/ugc/UGCBrandsAlliances")
);

interface UGCProps {}

const UGC: React.FC<UGCProps> = () => {
  useScrollToHash();

  const { colors } = useTheme();

  const handleResetBoundary = () => {
    // Intenta recargar la página.
    window.location.reload();
  };

  return (
    <ErrorBoundary
      FallbackComponent={ErrorComponent}
      onReset={handleResetBoundary}
    >
      <main
        className="ugc-page-container"
        style={{ backgroundColor: colors.background, color: colors.text }}
      >
        <Suspense fallback={null}>
          <LazyHelmetProvider>
            <LazyHelmet>
              {/* Título y descripción */}
              <title>
                Creadora Contenido UGC Belleza | Zoily Carrero | Auténtica y
                Creativa
              </title>
              <meta
                name="description"
                content="Zoily Carrero: Creadora de contenido UGC especializada en belleza. Genero fotos y videos auténticos que conectan con tu audiencia. ¡Colaboremos!"
              />

              {/* ––– Open Graph ––– */}
              <meta
                property="og:title"
                content="Creadora Contenido UGC Belleza | Zoily Carrero | Auténtica y Creativa"
              />
              <meta
                property="og:description"
                content="Zoily Carrero: Creadora de contenido UGC especializada en belleza. Genero fotos y videos auténticos que conectan con tu audiencia. ¡Colaboremos!"
              />
              <meta
                property="og:image"
                content="https://zoilycarrero.web.app/img/zoilynegro.webp"
              />
              <meta
                property="og:url"
                content="https://zoilycarrero.web.app/ugc"
              />
              <meta property="og:type" content="website" />
              <meta property="og:site_name" content="SoyZoilyCarrero MakeUp" />
              <meta property="og:locale" content="es_CL" />

              {/* ––– Twitter Card ––– */}
              <meta name="twitter:card" content="summary_large_image" />
              <meta
                name="twitter:title"
                content="Creadora Contenido UGC Belleza | Zoily Carrero | Auténtica y Creativa"
              />
              <meta
                name="twitter:description"
                content="Zoily Carrero: Creadora de contenido UGC especializada en belleza. Genero fotos y videos auténticos que conectan con tu audiencia. ¡Colaboremos!"
              />
              <meta
                name="twitter:image"
                content="https://zoilycarrero.web.app/img/zoilynegro.webp"
              />

              {/* ––– Canonical ––– */}
              <link rel="canonical" href="https://zoilycarrero.web.app/ugc" />
            </LazyHelmet>
          </LazyHelmetProvider>
        </Suspense>

        {/* Main UGC Section */}
        <Suspense fallback={<UGCMainSectionSkeleton />}>
          <UGCMainSection
            imageKey="zoilyblackugc"
            leftSectionProps={{ username: "@soyzoilycarrero" }}
          />
        </Suspense>

        {/* UGC Content Title */}
        <Suspense fallback={<div className="h-32" />}>
          <UGCContentTitleSection
            title="CONTENIDO UGC"
            subtitle="— FOTOGRAFÍAS"
            description={[
              "Aquí podrás ver algunos ejemplos de fotografías de contenido UGC.",
              "Si te gusta lo que ves, no dudes en contactarme.",
            ]}
          />
        </Suspense>

        {/* UGC Examples Section */}
        <div className="md:w-full">
          <Suspense fallback={<UGCPhoneExampleSectionSkeleton />}>
            <UGCPhoneExampleSection
              images={[
                {
                  phoneImageKey: "phone",
                  contentImageKey: "ugc1",
                  alt: "Ejemplo UGC 1",
                },
                {
                  phoneImageKey: "phone",
                  contentImageKey: "ugc2",
                  alt: "Ejemplo UGC 2",
                },
                {
                  phoneImageKey: "phone",
                  contentImageKey: "ugc3",
                  alt: "Ejemplo UGC 3",
                },
                {
                  phoneImageKey: "phone",
                  contentImageKey: "ugc4",
                  alt: "Ejemplo UGC 4",
                },
              ]}
            />
          </Suspense>
        </div>

        <Suspense fallback={<div className="h-24" />}>
          <UGCMiddleBanner text="Soy creadora de contenido UGC especializada en generar piezas auténticas, creativas y alineadas con los valores de cada marca." />
        </Suspense>

        <Suspense fallback={<div className="h-64" />}>
          <UGCBrandsAlliances
            title="ALGUNAS COLABORACIONES"
            subtitle="— Alianzas"
          />
        </Suspense>

        <Suspense fallback={<div className="h-24" />}>
          <UGCMiddleBanner text="Me encanta colaborar con marcas que buscan destacar, construir confianza y dejar una impresión duradera en su comunidad." />
        </Suspense>
      </main>
    </ErrorBoundary>
  );
};

export default UGC;
