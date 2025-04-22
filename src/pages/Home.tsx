// src/pages/Home.tsx
import { useState, useEffect, memo } from "react";
import { useNavigate } from "react-router-dom";
import BackgroundSliderHome from "../components/sliders/BackgroundSliderHome";
import HomeButton from "../components/buttons/HomeButton";
import { homeInfo, homeLinks, homeFeatures, homeBrands, galleryFeatures } from "../data/homeData";
import HomeTitle from "../components/home/HomeTitle";
import HomeLinksSection from "../components/home/HomeLinksSection";
import HomeFeaturesSection from "../components/home/HomeFeaturesSection";
import HomeBrandsSection from "../components/home/HomeBrandsSection";
import ScrollDownArrow from "../components/common/ScrollDownArrow";
import AnimationWrapper from "../components/common/AnimationLayer";
import HomeGallerySection from "../components/home/HomeGallerySection";
import { useTheme } from "../components/context/useThemeHook";
import Footer3 from "../components/common/Footer3";
import { Helmet } from 'react-helmet-async'; // <--- 1. Importa Helmet


interface HomeProps {
  onSmoothScroll: (sectionId: string) => void;
  isMobileView: boolean;
}

const Home = memo(({ onSmoothScroll, isMobileView }: HomeProps) => {
  const [, setWindowWidth] = useState(window.innerWidth);
  const navigate = useNavigate();
  const { colors } = useTheme();
  


  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const handleVerServiciosClick = () => {
    navigate("/services#services");
  };

  const handleAgendaTuCitaClick = () => {
    if (isMobileView) {
      onSmoothScroll("contact");
    } else {
      navigate("/contact#contact");
    }
  };

  return (
    <div
      className="relative transition-colors duration-300"
      style={{ backgroundColor: colors.background, color: colors.text }}
    > 
    <Helmet>
        <title>Zoily Carrero MakeUp - Maquillaje Profesional y Cursos</title>
        <meta
          name="description"
          content="Descubre el arte del maquillaje profesional con Zoily Carrero. Ofrecemos servicios personalizados, cursos de automaquillaje y contenido UGC. ¡Agenda tu cita!"
        />
    </Helmet>
      <div className="relative mb-10 md:mb-24">
        <BackgroundSliderHome />
        <div className="absolute inset-0 z-10 flex flex-col items-center justify-center w-full">
          <main className="flex-grow flex flex-col items-center justify-center text-center px-4">
            {homeInfo && homeInfo.title && homeInfo.subtitle && (
              <HomeTitle title={homeInfo.title} subtitle={homeInfo.subtitle} />
            )}
            <AnimationWrapper animationClassName="fade-in">
              <div className="flex flex-col sm:flex-row gap-4">
                {homeInfo && homeInfo.button1Text && (
                  <HomeButton
                    isMobileView={isMobileView}
                    onClick={handleVerServiciosClick}
                    className="px-6 py-3 bg-white text-black font-normal font-cinzel rounded shadow hover:bg-gray-200 transition duration-200 text-center"
                    aria-label={`Ir a la sección de ${homeInfo.button1Text}`}
                  >
                    {homeInfo.button1Text}
                  </HomeButton>
                )}
                {homeInfo && homeInfo.button2Text && (
                  <HomeButton
                    isMobileView={isMobileView}
                    onClick={handleAgendaTuCitaClick}
                    className="px-6 py-3 bg-pink-700 text-white font-normal font-cinzel rounded shadow hover:bg-pink-900 transition duration-200 text-center"
                    aria-label={`Ir a la sección de ${homeInfo.button2Text}`}
                  >
                    {homeInfo.button2Text}
                  </HomeButton>
                )}
              </div>
            </AnimationWrapper>
          </main>
          <ScrollDownArrow />
        </div>
      </div>
      <HomeLinksSection
        title={homeLinks.title}
        subtitle={homeLinks.subtitle}
        subtitle1={homeLinks.subtitle1}
        links={homeLinks.links}
        isMobileView={isMobileView}
        onSmoothScroll={onSmoothScroll}
      />
      <HomeFeaturesSection
        imageSrc={homeFeatures.imageSrc}
        alt={homeFeatures.alt}
        features={homeFeatures.features}
      />
      <HomeBrandsSection
        brands={homeBrands.brands}
      />
      <HomeGallerySection
        imageSrc={galleryFeatures.imageSrc}
        alt={galleryFeatures.alt}
        gallery={galleryFeatures.gallery}
      />

      {!isMobileView && (
        <Footer3 />
       )}
    </div>
  );
});

export default Home;
