import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom"; // Importamos useLocation
import {
  Instagram,
  Facebook,
  MessageSquare,
  Pointer as Pinterest,
} from "lucide-react";
import PageBanner from "../components/common/PageBanner";
import SmoothImage from "../components/smoothImages/SmoothImage";
import images from "../assets/img/images";
import { MOBILE_BREAKPOINT } from "../constants/constants";
import SocialIcons from "../components/common/SocialIcons";
import SectionTitle from "../components/common/SectionTitle";
import PhoneImageContainer from "../components/ugc/PhoneImageContainer";
import SectionDescription from "../components/common/SectionDescription";
import Footer from "../components/common/Footer"; // Importamos el componente Footer
import useWindowSize from "../hooks/useWindowSize";

interface UGCProps {}

const UGC: React.FC<UGCProps> = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const location = useLocation(); // Obtenemos la ubicación actual
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

  // Nuevo useEffect para manejar el scroll al cargar la página
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

  return (
    <main className="ugc-page-container">
      {/* Banner principal */}
      <PageBanner
        title="POTENCIEMOS TU MARCA"
        imageSrcs={[images.contactBannerUp]}
        objectPosition="left-bottom"
      />

      {/* Main UGC Section */}
      <section
        id="ugc"
        className="ugc-section-completa flex md:flex-row flex-col m-0 bg-gray-100 overflow-hidden shadow-md"
      >
        {/* Left Section */}
        <div className="ugc-seccion-izquierda md:w-1/2 w-full flex flex-col">
          <section className="ugc-seccion-izquierda-superior md:h-3/4 h-[75%] bg-[rgb(242,232,225)] flex justify-center items-center">
            <div className="text-center mt-6">
              <h2 className="ugc-title-portafolio font-cinzel font-light text-3xl md:text-5xl lg:text-6xl text-gray-700 mb-2 tracking-normal md:text-6xl">
                PORTAFOLIO
              </h2>
              <h1 className="ugc-title-ugc font-serif text-[6rem] md:text-[12.5rem] lg:text-[15rem] text-[rgb(212,185,194)] font-bold leading-[0.9] mb-0 md:text-[15rem]">
                UGC
              </h1>
              <SocialIcons
                icons={[
                  { icon: Instagram, href: "#" },
                  { icon: Facebook, href: "#" },
                  { icon: Pinterest, href: "#" },
                  { icon: MessageSquare, href: "#" },
                ]}
                className="ugc-social-icons flex gap-3 md:mb-20 mb-5 justify-center items-center"
                iconClassName="ugc-social-icon text-gray-600 hover:text-gray-800 transition-colors duration-200 md:text-base"
              />
            </div>
          </section>
          <section className="ugc-seccion-izquierda-inferior md:h-1/4 h-[25%] bg-[rgb(229,210,196)] flex justify-center items-center">
            <span className="ugc-username font-serif text-2xl md:text-3xl lg:text-4xl text-gray-600 italic pl-0 md:text-center">
              @soyzoilycarrero
            </span>
          </section>
        </div>

        {/* Right Section (Image) */}
        <div className="ugc-seccion-derecha md:w-1/2 w-full">
          <SmoothImage
            src={images.zoilyblack}
            alt="Imagen UGC"
            className="ugc-image h-full w-full object-cover block"
          />
        </div>
      </section>

      {/* UGC Content Title */}
      <section className="ugc-section-title-container mt-20 text-center md:mt-36 md:mb-36 mb-14">
        <SectionTitle
          title="FOTOGRAFÍAS DE CONTENIDO UGC"
          className={`text-4xl md:text-5xl font-cinzel font-extralight text-center mb-12 tracking-wider`}
        />
        <SectionDescription
          description={[
            "Aquí podrás ver algunos ejemplos de fotografías de contenido UGC.",
            "Si te gusta lo que ves, no dudes en contactarme.",
          ]}
          className="mt-4 font-cinzel text-center"
        />
      </section>

      {/* UGC Examples Section */}
      <section className="ugc-section ugc-section-images-example-png bg-transparent shadow-none rounded-none mt-10 md:mt-10">
        <div className="ugc-right-section ugc-right-section-four-images-png flex flex-col md:flex-row justify-around items-center">
          <div className="ugc-images-container-png flex flex-col md:flex-row gap-2 w-full justify-around">
            {["ugc1", "ugc2", "ugc3", "ugc4"].map((image, index) => (
              <PhoneImageContainer
                key={index}
                phoneImage={images.phone}
                contentImage={images[image]}
                alt={`Ejemplo UGC ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Final Banner (Desktop Only) */}
      {!isMobileView && (
        <PageBanner
          title="'Te debes este momento'"
          imageSrcs={[images.contactBannerBottom]}
        />
      )}
      {isMobileView && (
            <Footer />
          )}
    </main>
  );
};

export default UGC;
