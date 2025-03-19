// src/pages/About.tsx
import { CheckCircle } from "lucide-react";
import images from "../assets/img/images";
import PageBanner from "../components/common/PageBanner";
import { useTheme } from "../components/context/useThemeHook";
import "../GlobalStyles.css";
import AnimationWrapper from "../components/common/AnimationLayer";
import { useEffect, useState } from "react";
import { getTextColorClass, getTextColorClassParagraph } from "../utils/utils";
import { whyUsPoints, aboutImages, aboutInfo } from "../data/aboutData"; // Importamos los datos
import ImageWithFallback from "../components/common/ImageWithFallback"; // Importamos el componente ImageWithFallback
import useWindowSize from "../hooks/useWindowSize"; // Importamos el hook
import ErrorComponent from "../components/common/ErrorComponent"; // Importamos el componente


interface ServicesProps {}

function About({}: ServicesProps) {
  const { theme } = useTheme();
  const { isMobileView } = useWindowSize(); // Usamos el hook
  const [error, setError] = useState<string | null>(null); // Nuevo estado para errores


  useEffect(() => {
    try {
      // Ya no es necesario el useEffect para el tamaño de la ventana
    } catch (err) {
      setError("Error al cargar el tamaño de la ventana.");
      console.error("Error en useEffect:", err);
    }
  }, []);

  // Si hay un error, mostrar el componente de error
  if (error) {
    return <ErrorComponent message={error} />;
  }

  return (
    <div
      className={`min-h-screen ${
        theme === "dark" ? "text-white" : "text-gray-800"
      }`}
    >
      <PageBanner
        title="GUSTO EN CONOCERTE!"
        imageSrcs={[images.aboutBannerUp]}
        objectPosition="left-bottom"
      ></PageBanner>
      <section className="max-w-7xl mx-auto px-4 py-16 sm:px-6 lg:px-8">
        <div className="lg:flex lg:items-start lg:justify-between lg:gap-8">
          {/* Imagen a la derecha */}
          <div className="lg:w-2/5 mb-8 lg:mb-0">
            <AnimationWrapper animationClassName="fade-in-up">
              <ImageWithFallback
                src={images.zoilyblack}
                alt="Equipo trabajando"
                fallbackSrc="/img/default-image.png" // Ruta a una imagen por defecto
                className={`rounded-lg shadow-xl object-cover aspect-[3/4] w-full`}
              />
            </AnimationWrapper>
          </div>

          {/* Contenido principal */}
          <div className="lg:w-3/5 lg:ml-32">
            <div className="pt-12">
              <div className="max-w-lg">
                <AnimationWrapper animationClassName="fade-in-text">
                  {aboutInfo && aboutInfo.title && (
                    <h2
                      className={`text-2xl md:text-5xl font-cinzel font-light text-center mb-12 tracking-wider ${getTextColorClass(
                        theme
                      )}`}
                    >
                      {aboutInfo.title}
                    </h2>
                  )}
                </AnimationWrapper>
                <div className="prose prose-lg">
                  <AnimationWrapper animationClassName="fade-in-text">
                    {aboutInfo && aboutInfo.description1 && (
                      <p
                        className={`leading-relaxed text-sm font-cinzel font-light md:text-base md:font-normal ${getTextColorClassParagraph(
                          theme
                        )}`}
                      >
                        {aboutInfo.description1}
                      </p>
                    )}
                    {aboutInfo && aboutInfo.description2 && (
                      <p
                        className={`mt-4 leading-relaxed text-sm font-cinzel font-light md:text-base md:font-normal ${getTextColorClassParagraph(
                          theme
                        )}`}
                      >
                        {aboutInfo.description2}
                      </p>
                    )}
                  </AnimationWrapper>
                </div>
              </div>

              {/* Por qué nosotros - Reposicionado */}
              <div className="mt-24 lg:mt-32">
                <div className="space-y-4 space-x-6">
                  <AnimationWrapper animationClassName="fade-in-text">
                    {aboutInfo && aboutInfo.whyUsTitle && (
                      <h3
                        className={`ml-20 text-2xl font-cinzel font-base mb-12 ${getTextColorClass(
                          theme
                        )}`}
                      >
                        {aboutInfo.whyUsTitle}
                      </h3>
                    )}
                  </AnimationWrapper>

                  <AnimationWrapper animationClassName="fade-in-text">
                    <ul className={`space-y-4`}>
                      {whyUsPoints.map((point, index) => (
                        <li key={index} className="flex items-center space-x-6">
                          <CheckCircle className="h-6 w-6 text-green-500 flex-shrink-0 " />
                          <span
                            className={`leading-relaxed font-cinzel text-sm font-light md:text-base md:font-normal ${getTextColorClass(
                              theme
                            )}`}
                          >
                            {point}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </AnimationWrapper>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Tres imágenes inferiores */}
        <div className="mt-24 lg:mt-32">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {aboutImages.map((image, index) => (
              <div
                key={index}
                className="aspect-[4/3] overflow-hidden rounded-lg shadow-xl"
              >
                <ImageWithFallback
                  src={images.zoilyblack}
                  alt={image.alt}
                  fallbackSrc="/img/default-image.png" // Ruta a una imagen por defecto
                  className={`w-full h-full object-cover hover:scale-105 transition-transform duration-300`}
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {!isMobileView && (
        <PageBanner
          title="'Te debes este momento'"
          imageSrcs={[images.aboutBannerBottom]}
        ></PageBanner>
      )}
    </div>
  );
}

export default About;
