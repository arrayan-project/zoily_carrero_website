// src/pages/Home.tsx
import { useState, useEffect, memo } from "react";
import { MOBILE_BREAKPOINT } from "../constants";
import AnimationWrapper from "../components/AnimationLayer";
import BackgroundCarousel from "../components/BackgroundSlider";
import HomeButton from "../components/HomeButton";
import { homeInfo } from "../data/homeData"; // Importamos los datos
import HomeTitle from "../components/HomeTitle"; // Importamos el componente HomeTitle

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
    <div className="relative min-h-screen">
      <BackgroundCarousel />
      <div className="relative z-10 min-h-screen flex flex-col">
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
                  aria-label={`Ir a la sección de ${homeInfo.button1Text}`} // Agregamos aria-label
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
                  aria-label={`Ir a la sección de ${homeInfo.button2Text}`} // Agregamos aria-label
                >
                  {homeInfo.button2Text}
                </HomeButton>
              )}
            </div>
          </AnimationWrapper>
        </main>
      </div>
    </div>
  );
});

export default Home;
