// Home.tsx
import { useState, useEffect } from "react";
import { Instagram, Facebook, Pointer as Pinterest } from "lucide-react";
import {  } from "../assets/img/images";
import { MOBILE_BREAKPOINT } from "../constants";
import AnimationWrapper from "../components/AnimationWrapper"; //importamos
import BackgroundCarousel from '../components/BackgroundCarousel'; // Importar el componente
import HomeButton from "../components/HomeButton"; //Importar componente

interface HomeProps {
  onSmoothScroll: (sectionId: string) => void;
}

function Home({ onSmoothScroll }: HomeProps) {
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
          <AnimationWrapper animationClassName="fade-in">
            <h1 className="font-cinzel text-4xl md:text-6xl font-extralight text-white tracking-[0.2em] mb-4">
              ZOILY CARRERO
            </h1>
          </AnimationWrapper>
          <AnimationWrapper animationClassName="fade-in">
            <h2 className="font-cinzel text-xl md:text-2xl text-white font-light tracking-[0.3em] mb-12">
              SERVICIOS PROFESIONALES DE MAQUILLAJE Y PEINADOS
            </h2>
          </AnimationWrapper>
          <AnimationWrapper animationClassName="fade-in">
            <div className="flex flex-col sm:flex-row gap-4">
              <HomeButton 
              isMobileView={isMobileView} 
              onSmoothScroll={onSmoothScroll} 
              to=
              "services" className="px-6 py-3 bg-white text-black font-normal font-cinzel rounded shadow hover:bg-gray-200 transition duration-200 text-center"
              > 
                Ver Servicios
              </HomeButton>

              <HomeButton 
              isMobileView={isMobileView} 
              onSmoothScroll={onSmoothScroll} 
              to="contact" 
              className="px-6 py-3 bg-pink-500 text-white font-normal font-cinzel rounded shadow hover:bg-pink-800 transition duration-200 text-center"
              >
                Agenda tu cita
              </HomeButton>
            </div>
          </AnimationWrapper>
        </main>
      </div>
    </div>
  );
}

export default Home;
