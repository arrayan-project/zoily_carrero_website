// src/pages/UGC.tsx
import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import images from "../assets/images";
import UGCMainSection from "../components/ugc/UGCMainSection";
import UGCContentTitleSection from "../components/ugc/UGCContentTitleSection";
import UGCPhoneExampleSection from "../components/ugc/UGCPhoneExampleSection";
import UGCBrandsAlliances from "../components/ugc/UGCBrandsAlliances";
import { useTheme } from "../components/context/useThemeHook";
import UGCMiddleBanner from "../components/ugc/UGCMiddleBanner";
import { Helmet } from 'react-helmet-async';


interface UGCProps {}

const UGC: React.FC<UGCProps> = () => {
  const [, setWindowWidth] = useState(window.innerWidth);
  const location = useLocation();

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    const hash = location.hash;
    if (hash) {
      const element = document.querySelector(hash);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    } else {
      window.scrollTo(0, 0);
    }
  }, [location.hash]);

  const { colors } = useTheme();
  
  return (
    <main className="ugc-page-container" style={{ backgroundColor: colors.background, color: colors.text }}>
 
      <Helmet>
        <title>Creadora Contenido UGC Belleza | Zoily Carrero | Auténtica y Creativa</title>
        <meta
          name="description"
          content="Zoily Carrero: Creadora de contenido UGC especializada en belleza. Genero fotos y videos auténticos que conectan con tu audiencia. ¡Colaboremos!"
        />
      </Helmet>

      {/* Main UGC Section */}
      <UGCMainSection
        imageSrc={images.zoilyblackugc.webp}
        leftSectionProps={{ username: "@soyzoilycarrero" }}
      />

      {/* UGC Content Title */}
      <UGCContentTitleSection
        title="FOTOGRAFÍAS DE CONTENIDO UGC"
        description={[
          "Aquí podrás ver algunos ejemplos de fotografías de contenido UGC.",
          "Si te gusta lo que ves, no dudes en contactarme.",
        ]}
      />

      {/* UGC Examples Section */}
      <div className="md:w-full">
      <UGCPhoneExampleSection
        images={[
          {
            phoneImage: images.phone.webp,
            contentImage: images.ugc1.webp,
            alt: "Ejemplo UGC 1",
          },
          {
            phoneImage: images.phone.webp,
            contentImage: images.ugc2.webp,
            alt: "Ejemplo UGC 2",
          },
          {
            phoneImage: images.phone.webp,
            contentImage: images.ugc3.webp,
            alt: "Ejemplo UGC 3",
          },
          {
            phoneImage: images.phone.webp,
            contentImage: images.ugc4.webp,
            alt: "Ejemplo UGC 4",
          },
        ]}
      />
      </div>

      <UGCMiddleBanner 
      text="Soy creadora de contenido UGC especializada en generar piezas auténticas, 
      creativas y alineadas con los valores de cada marca."/>

      <UGCBrandsAlliances />

      <UGCMiddleBanner 
      text= "Me encanta colaborar con marcas que buscan destacar, construir confianza y dejar una impresión duradera en su comunidad."/>
    </main>
  );
};

export default UGC;
