// src/pages/Home.tsx
import { useState, useEffect, memo } from "react";
import { MOBILE_BREAKPOINT } from "../constants/constants";
import AnimationWrapper from "../components/common/AnimationLayer";
import BackgroundCarousel from "../components/sliders/BackgroundSlider";
import HomeButton from "../components/buttons/HomeButton";
import { homeInfo, homeLinks, homeFeatures, homeBrands } from "../data/homeData"; // Importamos los datos
import HomeTitle from "../components/home/HomeTitle"; // Importamos el componente HomeTitle
import HomeLinksSection from "../components/home/HomeLinksSection"; // Importamos el nuevo componente
import HomeFeaturesSection from "../components/home/HomeFeaturesSection"; // Importamos el nuevo componente
import HomeBrandsSection from "../components/home/HomeBrandsSection"; // Importamos el nuevo componente
import ScrollDownArrow from "../components/common/ScrollDownArrow"; // Importamos el nuevo componente


interface HomeProps {
  onSmoothScroll: (sectionId: string) => void;
}

const Home = memo(({ onSmoothScroll }: HomeProps) => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const isMobileView = windowWidth < MOBILE_BREAKPOINT;

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className="relative">
      <div className="relative mb-10 md:mb-24">
        <BackgroundCarousel />
        <div className="absolute inset-0 z-10 flex flex-col items-center justify-center w-full"> {/* Añadimos absolute inset-0 */}
          <main className="flex-grow flex flex-col items-center justify-center text-center px-4">
            {homeInfo && homeInfo.title && homeInfo.subtitle && (
              <HomeTitle
                title={homeInfo.title}
                subtitle={homeInfo.subtitle}
              />
            )}
            <AnimationWrapper animationClassName="fade-in">
              <div className="flex flex-col sm:flex-row gap-4">
                {homeInfo && homeInfo.button1Text && (
                  <HomeButton
                    isMobileView={isMobileView}
                    onSmoothScroll={onSmoothScroll}
                    to="services"
                    className="px-6 py-3 bg-white text-black font-normal font-cinzel rounded shadow hover:bg-gray-200 transition duration-200 text-center"
                    aria-label={`Ir a la sección de ${homeInfo.button1Text}`}
                  >
                    {homeInfo.button1Text}
                  </HomeButton>
                )}
                {homeInfo && homeInfo.button2Text && (
                  <HomeButton
                    isMobileView={isMobileView}
                    onSmoothScroll={onSmoothScroll}
                    to="contact"
                    className="px-6 py-3 bg-pink-500 text-white font-normal font-cinzel rounded shadow hover:bg-pink-800 transition duration-200 text-center"
                    aria-label={`Ir a la sección de ${homeInfo.button2Text}`}
                  >
                    {homeInfo.button2Text}
                  </HomeButton>
                )}
              </div>
            </AnimationWrapper>
          </main>
          <ScrollDownArrow /> {/* Renderizamos el componente */}
        </div>
      </div>
      {/* Seccion de enlaces */}
      <HomeLinksSection
        title={homeLinks.title}
        subtitle={homeLinks.subtitle}
        subtitle1={homeLinks.subtitle1}
        links={homeLinks.links}
        isMobileView={isMobileView} // Pasar isMobileView
        onSmoothScroll={onSmoothScroll} // Pasar onSmoothScroll
    />
      {/* Seccion de caracteristicas */}
      <HomeFeaturesSection
        imageSrc={homeFeatures.imageSrc}
        alt={homeFeatures.alt}
        features={homeFeatures.features}
      />
      {/* Seccion de marcas */}
      <HomeBrandsSection brands={homeBrands.brands} />
    </div>
  );
});

export default Home;
