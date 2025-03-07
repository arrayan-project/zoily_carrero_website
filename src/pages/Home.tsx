import { useState, useEffect } from 'react';
import { Instagram, Facebook, Pointer as Pinterest } from 'lucide-react';
import { backgrounds } from '../assets/img/images';
import { Link } from 'react-router-dom'; // Importa Link
import { useTheme } from '../components/context/useTheme';
import { MOBILE_BREAKPOINT } from '../constants';

interface HomeProps {
  onSmoothScroll: (sectionId: string) => void;
}

function Home({onSmoothScroll}: HomeProps) {
  const [currentBg, setCurrentBg] = useState(0);
  const [fadeOut, setFadeOut] = useState(false);
  const { theme } = useTheme();
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const isMobileView = windowWidth < MOBILE_BREAKPOINT;

  useEffect(() => {
    const interval = setInterval(() => {
      setFadeOut(true);
      setTimeout(() => {
        setCurrentBg((prev) => (prev + 1) % backgrounds.length);
        setFadeOut(false);
      }, 1000);
    }, 8000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div className="relative min-h-screen">
      {backgrounds.map((bg, index) => (
        <div
          key={bg}
          className={`absolute inset-0 bg-transition ${
            index === currentBg ? 'opacity-100' : 'opacity-0'
          } ${fadeOut && index === currentBg ? 'opacity-0' : ''}`}
          style={{
            backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${bg})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            zIndex: 0,
          }}
        />
      ))}

      <div className="relative z-10 min-h-screen flex flex-col">
        <main className="flex-grow flex flex-col items-center justify-center text-center px-4">
          <h1 className="font-cinzel text-4xl md:text-6xl font-extralight text-white tracking-[0.2em] mb-4">
            ZOILY CARRERO
          </h1>
          <h2 className="font-cinzel text-xl md:text-2xl text-white font-light tracking-[0.3em] mb-12">
            SERVICIOS PROFESIONALES DE MAQUILLAJE Y PEINADOS
          </h2>

          {/* Contenedor de botones */}
          <div className="flex flex-col sm:flex-row gap-4">
            {/* Botón "Ver Servicios" */}
            {isMobileView ? (
              <button
                onClick={() => onSmoothScroll('services')}
                className="px-6 py-3 bg-white text-black font-normal font-cinzel rounded shadow hover:bg-gray-200 transition duration-200 text-center"
              >
                Ver Servicios
              </button>
            ) : (
              <Link to="/services" className="px-6 py-3 bg-white text-black font-normal font-cinzel rounded shadow hover:bg-gray-200 transition duration-200 text-center">
                Ver Servicios
              </Link>
            )}

            {/* Botón "Agenda tu cita" */}
            {isMobileView ? (
              <button
                onClick={() => onSmoothScroll('contact')}
                className="px-6 py-3 bg-pink-500 text-white font-normal font-cinzel rounded shadow hover:bg-pink-800 transition duration-200 text-center"
              >
                Agenda tu cita
              </button>
            ) : (
              <Link to="/contact" className="px-6 py-3 bg-pink-500 text-white font-normal font-cinzel rounded shadow hover:bg-pink-800 transition duration-200 text-center">
                Agenda tu cita
              </Link>
            )}
          </div>
        </main>
      </div>
    </div>
  );
}

export default Home;
