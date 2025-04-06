// src/pages/UGC.tsx
import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import images from "../assets/images";
import Footer from "../components/common/Footer";
import useWindowSize from "../hooks/useWindowSize";
import UGCMainSection from "../components/ugc/UGCMainSection";
import UGCContentTitleSection from "../components/ugc/UGCContentTitleSection";
import UGCPhoneExampleSection from "../components/ugc/UGCPhoneExampleSection";
import UGCBrandsAlliances from "../components/ugc/UGCBrandsAlliances";
import { useTheme } from "../components/context/useThemeHook";
import UGCMiddleBanner from "../components/ugc/UGCMiddleBanner";


interface UGCProps {}

const UGC: React.FC<UGCProps> = () => {
  const [, setWindowWidth] = useState(window.innerWidth);
  const location = useLocation();
  const { isMobileView } = useWindowSize();

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
 

      {/* Main UGC Section */}
      <UGCMainSection
        imageSrc={images.zoilyblack}
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
            phoneImage: images.phone,
            contentImage: images.ugc1,
            alt: "Ejemplo UGC 1",
          },
          {
            phoneImage: images.phone,
            contentImage: images.ugc2,
            alt: "Ejemplo UGC 2",
          },
          {
            phoneImage: images.phone,
            contentImage: images.ugc3,
            alt: "Ejemplo UGC 3",
          },
          {
            phoneImage: images.phone,
            contentImage: images.ugc4,
            alt: "Ejemplo UGC 4",
          },
        ]}
      />
      </div>

      <UGCMiddleBanner 
      text="Soy creadora de contenido UGC especializado en generar piezas auténticas, 
      creativas y alineadas con los valores de cada marca."/>

      <UGCBrandsAlliances />

      <UGCMiddleBanner 
      text= "Me encanta colaborar con marcas que buscan destacar, construir confianza y dejar una impresión duradera en su comunidad."/>

      {isMobileView && <Footer />}
    </main>
  );
};

export default UGC;
