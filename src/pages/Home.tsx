import React, { useState, useEffect } from 'react';
import { Instagram, Facebook, Pointer as Pinterest } from 'lucide-react';

const backgrounds = [
  'https://images.unsplash.com/photo-1522093007474-d86e9bf7ba6f?auto=format&fit=crop&w=2000',
  'https://images.unsplash.com/photo-1526047932273-341f2a7631f9?auto=format&fit=crop&w=2000',
  'https://images.unsplash.com/photo-1519225421980-715cb0215aed?auto=format&fit=crop&w=2000',
  'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=2000'
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