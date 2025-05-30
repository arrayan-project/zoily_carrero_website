// src/pages/UGC.tsx
import React, { lazy, Suspense } from "react";
import { useTheme } from "../components/context/themeContext";
import { Helmet } from "react-helmet-async";
import UGCMainSectionSkeleton from "../components/skeletons/UGCMainSectionSkeleton";
import UGCPhoneExampleSectionSkeleton from "../components/skeletons/UGCPhoneExampleSectionSkeleton";
import useScrollToHash from "../hooks/useScrollToHash";

const UGCMainSection = lazy(() => import("../components/ugc/UGCMainSection"));
const UGCContentTitleSection = lazy(() => import("../components/ugc/UGCContentTitleSection"));
const UGCPhoneExampleSection = lazy(() => import("../components/ugc/UGCPhoneExampleSection"));
const UGCMiddleBanner = lazy(() => import("../components/ugc/UGCMiddleBanner"));
const UGCBrandsAlliances = lazy(() => import("../components/ugc/UGCBrandsAlliances"));

interface UGCProps {}

const UGC: React.FC<UGCProps> = () => {

  useScrollToHash();

  const { colors } = useTheme();

  return (
    <main
      className="ugc-page-container"
      style={{ backgroundColor: colors.background, color: colors.text }}
    >
      <Helmet>
        <title>
          Creadora Contenido UGC Belleza | Zoily Carrero | Auténtica y Creativa
        </title>
        <meta
          name="description"
          content="Zoily Carrero: Creadora de contenido UGC especializada en belleza. Genero fotos y videos auténticos que conectan con tu audiencia. ¡Colaboremos!"
        />
      </Helmet>

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
          title="FOTOGRAFÍAS DE CONTENIDO UGC"
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
        <UGCBrandsAlliances />
      </Suspense>

      <Suspense fallback={<div className="h-24" />}>
        <UGCMiddleBanner text="Me encanta colaborar con marcas que buscan destacar, construir confianza y dejar una impresión duradera en su comunidad." />
      </Suspense>
    </main>
  );
};

export default UGC;
