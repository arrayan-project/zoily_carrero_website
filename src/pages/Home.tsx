import React, { useState, useEffect } from 'react';
import { Instagram, Facebook, Pointer as Pinterest } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

const backgrounds = [
  'https://images.unsplash.com/photo-1526047932273-341f2a7631f9?auto=format&fit=crop&w=2000',
  'https://images.unsplash.com/photo-1519225421980-715cb0215aed?auto=format&fit=crop&w=2000',
  'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=2000',
  'https://images.squarespace-cdn.com/content/v1/583f664cbebafbe20765df66/1578095645512-BQ9UROH8F9Y8BLYE2XF9/honeygold-180.jpg?format=1500w',
  'https://images.squarespace-cdn.com/content/v1/583f664cbebafbe20765df66/c6cccc22-90ae-4e11-b0d4-9dbd66916575/maritwilliamsphoto2021-katieelijanwedding-1212.jpg?format=1500w',
  'https://images.squarespace-cdn.com/content/v1/583f664cbebafbe20765df66/77e16fd2-efb0-4a6a-bc04-f19f79fbdba7/maritwilliamsphoto2021-katieelijanwedding-339.jpg?format=1500w',
  'https://images.squarespace-cdn.com/content/v1/583f664cbebafbe20765df66/1526340291692-3QY555B30SEGQOH0A1AE/0011.jpg?format=1500w'
];

function Home() {
  const [currentBg, setCurrentBg] = useState(0);
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setFadeOut(true);
      setTimeout(() => {
        setCurrentBg((prev) => (prev + 1) % backgrounds.length);
        setFadeOut(false);
      }, 1000);
    }, 5000);

    return () => clearInterval(interval);
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
            zIndex: -1,
          }}
        />
      ))}

      <div className="relative z-10 min-h-screen flex flex-col">
        <main className="flex-grow flex flex-col items-center justify-center text-center px-4">
          <h1 className="font-montserrat text-4xl md:text-6xl text-white tracking-[0.2em] mb-4">
            ZOILY CARRERO
          </h1>
          <h2 className="font-montserrat text-xl md:text-2xl text-white tracking-[0.3em] mb-12">
            SERVICIOS PROFESIONALES DE MAQUILLAJE Y PEINADOS
          </h2>
        
        {/* Contenedor de botones */}
        <div className="flex flex-col sm:flex-row gap-4">
            <Link
              to="/services"
              className="px-6 py-3 bg-white text-black font-semibold rounded shadow hover:bg-gray-200 transition duration-200 text-center"
            >
              Ver Servicios
            </Link>
            <Link
              to="/contact"
              className="px-6 py-3 bg-pink-500 text-white font-semibold rounded shadow hover:bg-pink-600 transition duration-200 text-center"
            >
              Agenda tu cita
            </Link>
          </div>
        </main>

        <footer className="pb-6 md:pb-8">
          <div className="flex justify-center space-x-6">
            <a href="#instagram" className="social-icon">
              <Instagram size={24} />
            </a>
            <a href="#pinterest" className="social-icon">
              <Pinterest size={24} />
            </a>
            <a href="#facebook" className="social-icon">
              <Facebook size={24} />
            </a>
          </div>
        </footer>
      </div>
    </div>
  );
}

export default Home;