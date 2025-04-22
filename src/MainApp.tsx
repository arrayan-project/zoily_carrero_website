// MainApp.tsx
import { useEffect, useState, useRef } from 'react';
import { BrowserRouter as Router, useLocation } from 'react-router-dom';
import { ThemeProvider } from './components/context/themeContext';
import { useTheme } from './components/context/useThemeHook';
import Navigation from './components/navigation/NavBarMenu';
import { MOBILE_BREAKPOINT } from './constants/constants';
import FloatingContactButton from './components/buttons/FloatingContactButton';
import ContactModal from './components/modals/ContactUsModal';
import './GlobalStyles.css';
import ContentDesktop from './components/layout/DesktopView';
import LandingPageMobile from './MobileView';
import ThemeToggleButton from './components/buttons/ThemeToggleButton';
import ScrollToTopButton from './components/buttons/ScrollTopButton';
import Footer3 from './components/common/Footer3';
import { HelmetProvider } from 'react-helmet-async';

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const isInternalScroll = useRef(false);
  const isNavigating = useRef(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const handleSmoothScroll = (sectionId: string = 'home') => {
    isInternalScroll.current = true;
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <HelmetProvider>
      <ThemeProvider>
        <div className='relative w-full overflow-x-hidden'>
          <Router>
            <MainContent
              handleSmoothScroll={handleSmoothScroll}
              openModal={openModal}
              closeModal={closeModal}
              isModalOpen={isModalOpen}
              isInternalScroll={isInternalScroll}
              isNavigating={isNavigating}
            />
          </Router>
        </div>
      </ThemeProvider>
    </HelmetProvider>
  );
}

interface MainContentProps {
  handleSmoothScroll: (sectionId: string) => void;
  openModal: () => void;
  closeModal: () => void;
  isModalOpen: boolean;
  isInternalScroll: React.MutableRefObject<boolean>;
  isNavigating: React.MutableRefObject<boolean>;
}

function MainContent({ handleSmoothScroll, openModal, closeModal, isModalOpen, isInternalScroll, isNavigating }: MainContentProps) {
  const { colors, theme } = useTheme();
  const location = useLocation();
  // Simplificamos la lógica de ocultar/mostrar
  const showHeaderAndFooter = location.pathname !== "/"; // Es más claro decir cuándo mostrarlo
  const themeClasses = showHeaderAndFooter
    ? `bg-[${colors.background}] text-[${colors.accent}]` // Usa los colores del tema
    : ''; // Sin clases extra si está oculto
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const isMobileView = windowWidth < MOBILE_BREAKPOINT;

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);

    // Aplicar clase al body para modo oscuro (opcional pero útil)
    if (theme === 'dark') {
      document.body.classList.add('dark-mode');
    } else {
      document.body.classList.remove('dark-mode');
    }

    return () => {
      window.removeEventListener('resize', handleResize);
      document.body.classList.remove('dark-mode'); // Limpiar al desmontar
    };
  }, [theme]);

  useEffect(() => {
    // Scroll al inicio en cambio de ruta, excepto si es scroll interno o navegación
    if (!isInternalScroll.current && !isNavigating.current) {
      window.scrollTo(0, 0);
    }
    // Reiniciar flags después de que el efecto se complete
    isInternalScroll.current = false;
    isNavigating.current = false;
  }, [location.pathname, isInternalScroll, isNavigating]); // Añadir refs a dependencias

  return (
    <div className="w-full">
      <FloatingContactButton onClick={openModal} />
      <ContactModal isOpen={isModalOpen} onClose={closeModal} />
      <ScrollToTopButton />
      {isMobileView ? (
        <div className="w-full relative">
          {/* Asegúrate que Navigation reciba las props necesarias */}
          <Navigation
            className="fixed top-0 left-0 w-full z-50"
            onSmoothScroll={handleSmoothScroll}
            isMobileView={isMobileView}
            isInternalScroll={isInternalScroll}
            isNavigating={isNavigating}
          />
          <LandingPageMobile onSmoothScroll={handleSmoothScroll} isMobileView={isMobileView} />
        </div>
      ) : (
        <div className={` ${themeClasses} w-full`}>
          <div className="fixed top-4 left-4 z-[70]">
            <ThemeToggleButton />
          </div>
          {/* Mostrar Navigation si showHeaderAndFooter es true */}
          {showHeaderAndFooter && (
            <Navigation
              className="md:mb-12"
              onSmoothScroll={handleSmoothScroll}
              isMobileView={isMobileView}
              isInternalScroll={isInternalScroll}
              isNavigating={isNavigating}
            />
          )}
          <ContentDesktop onSmoothScroll={handleSmoothScroll} isMobileView={isMobileView} />
          {/* Mostrar Footer3 si showHeaderAndFooter es true */}
          {showHeaderAndFooter && <Footer3 />}
        </div>
      )}
    </div>
  );
}

export default App;
