// src/pages/About.tsx
import { CheckCircle } from "lucide-react";
import images from "../assets/img/images";
import PageBanner from "../components/common/PageBanner";
import { useTheme } from "../components/context/useThemeHook";
import "../GlobalStyles.css";
import AnimationWrapper from "../components/common/AnimationLayer";
import { useState, useEffect } from "react";
import { getTextColorClass, getTextColorClassParagraph } from "../utils/utils";
import { whyUsPoints, aboutImages, aboutInfo } from "../data/aboutData";
import ImageWithFallback from "../components/common/ImageWithFallback";
import useWindowSize from "../hooks/useWindowSize";
import ErrorComponent from "../components/common/ErrorComponent";

interface ServicesProps {}

function About({}: ServicesProps) {
  const { theme } = useTheme();
  const { isMobileView } = useWindowSize();
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    try {
      // Código de inicialización o manejo de tamaño de ventana, si es necesario
    } catch (err) {
      setError("Error al cargar el tamaño de la ventana.");
      console.error("Error en useEffect:", err);
    }
  }, []);

  return (
    <div className={`min-h-screen ${theme === "dark" ? "text-white" : "text-gray-800"}`}>
      <PageBanner
        title="GUSTO EN CONOCERTE!"
        imageSrcs={[images.aboutBannerUp]}
        objectPosition="left-bottom"
      />

      <section id="about" className="max-w-7xl mx-auto px-4 py-16 sm:px-6 lg:px-8">
        <div className="lg:flex lg:items-start lg:justify-between lg:gap-8">
          <div className="lg:w-2/5 mb-8 lg:mb-0">
            <AnimationWrapper animationClassName="fade-in-up">
              <ImageWithFallback
                src={images.zoilyblack}
                alt="Equipo trabajando"
                fallbackSrc="/img/default-image.png"
                className="rounded-lg shadow-xl object-cover aspect-[3/4] w-full"
              />
            </AnimationWrapper>
          </div>

          <section className="lg:w-3/5 lg:ml-32 pt-12">
            <div className="max-w-lg">
              <AnimationWrapper animationClassName="fade-in-text">
                {aboutInfo?.title && (
                  <h2 className={`text-2xl md:text-5xl font-cinzel font-light text-center mb-12 tracking-wider ${getTextColorClass(theme)}`}>
                    {aboutInfo.title}
                  </h2>
                )}
              </AnimationWrapper>

              <div className="prose prose-lg">
                <AnimationWrapper animationClassName="fade-in-text">
                  {aboutInfo?.description1 && (
                    <p className={`leading-relaxed text-sm font-cinzel font-light md:text-base md:font-normal ${getTextColorClassParagraph(theme)}`}>
                      {aboutInfo.description1}
                    </p>
                  )}
                  {aboutInfo?.description2 && (
                    <p className={`mt-4 leading-relaxed text-sm font-cinzel font-light md:text-base md:font-normal ${getTextColorClassParagraph(theme)}`}>
                      {aboutInfo.description2}
                    </p>
                  )}
                </AnimationWrapper>
              </div>
            </div>

            <section className="mt-24 lg:mt-32 space-y-4">
              <AnimationWrapper animationClassName="fade-in-text">
                {aboutInfo?.whyUsTitle && (
                  <h3 className={`ml-20 text-2xl font-cinzel font-base mb-12 ${getTextColorClass(theme)}`}>
                    {aboutInfo.whyUsTitle}
                  </h3>
                )}
              </AnimationWrapper>

              <AnimationWrapper animationClassName="fade-in-text">
                <ul className="space-y-4">
                  {whyUsPoints.map((point, index) => (
                    <li key={index} className="flex items-center space-x-6">
                      <CheckCircle className="h-6 w-6 text-green-500 flex-shrink-0" />
                      <span className={`leading-relaxed font-cinzel text-sm font-light md:text-base md:font-normal ${getTextColorClass(theme)}`}>
                        {point}
                      </span>
                    </li>
                  ))}
                </ul>
              </AnimationWrapper>
            </section>
          </section>
        </div>

        <section className="mt-24 lg:mt-32 grid grid-cols-1 md:grid-cols-3 gap-6">
          {aboutImages.map((image, index) => (
            <div key={index} className="aspect-[4/3] overflow-hidden rounded-lg shadow-xl">
              <ImageWithFallback
                src={images.zoilyblack}
                alt={image.alt}
                fallbackSrc="/img/default-image.png"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
          ))}
        </section>
      </section>

      {!isMobileView && (
        <PageBanner
          title="'Te debes este momento'"
          imageSrcs={[images.aboutBannerBottom]}
        />
      )}
    </div>
  );
}

export default About;
