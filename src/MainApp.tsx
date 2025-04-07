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



function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const isInternalScroll = useRef(false); // Creamos la ref
  const isNavigating = useRef(false); // Nueva ref para controlar la navegación

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const handleSmoothScroll = (sectionId: string = 'home') => {
    isInternalScroll.current = true; // Indicamos que es un scroll interno
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      // No necesitamos el timeout aquí, el useEffect se encargará
    }
  };

  return (
    <ThemeProvider>
      <div className='relative w-full overflow-x-hidden'>
        <Router>
          <MainContent handleSmoothScroll={handleSmoothScroll} openModal={openModal} closeModal={closeModal} isModalOpen={isModalOpen} isInternalScroll={isInternalScroll} isNavigating={isNavigating} /> {/* Pasamos la ref */}
        </Router>
      </div>
    </ThemeProvider>
  );
}

interface MainContentProps {
  handleSmoothScroll: (sectionId: string) => void;
  openModal: () => void;
  closeModal: () => void;
  isModalOpen: boolean;
  isInternalScroll: React.MutableRefObject<boolean>;
  isNavigating: React.MutableRefObject<boolean>; // Recibimos la nueva ref
}

function MainContent({ handleSmoothScroll, openModal, closeModal, isModalOpen, isInternalScroll, isNavigating }: MainContentProps) {
  const {colors, theme } = useTheme();
  const location = useLocation();
  const hideHeaderAndFooter3 = location.pathname === "/";
  const themeClasses = !hideHeaderAndFooter3
  ? `bg-[${colors.background}] text-[${colors.accent}]` // Use theme colors
  : '';
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const isMobileView = windowWidth < MOBILE_BREAKPOINT;

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);

    if (theme === 'dark') {
      document.body.classList.add('dark-mode');
    } else {
      document.body.classList.remove('dark-mode');
    }

    return () => {
      window.removeEventListener('resize', handleResize);
      document.body.classList.remove('dark-mode');
    };
  }, [theme]);

  useEffect(() => {
    if (!isInternalScroll.current && !isNavigating.current) { // Solo reiniciamos si no es un scroll interno y no estamos navegando
      window.scrollTo(0, 0);
    }
    isInternalScroll.current = false; // Reiniciamos la ref después del scroll
    isNavigating.current = false; // Reiniciamos la ref después de la navegación
  }, [location.pathname]);

  return (
    <div className="w-full">
      <FloatingContactButton onClick={openModal} />
      <ContactModal isOpen={isModalOpen} onClose={closeModal} />
      <ScrollToTopButton />
      {isMobileView ? (
        <div className="w-full relative">
          <Navigation className="fixed top-0 left-0 w-full z-50" onSmoothScroll={handleSmoothScroll} isMobileView={isMobileView} isInternalScroll={isInternalScroll} isNavigating={isNavigating} /> {/* Pasamos la ref */}
          <LandingPageMobile onSmoothScroll={handleSmoothScroll} isMobileView={isMobileView} />
        </div>
      ) : (
        <div className={` ${themeClasses} w-full`}>
          <div className="fixed top-4 left-4 z-[70]">
            <ThemeToggleButton />
          </div>
          {!hideHeaderAndFooter3 && <Navigation className="md:mb-12" onSmoothScroll={handleSmoothScroll} isMobileView={isMobileView} isInternalScroll={isInternalScroll} isNavigating={isNavigating} />} {/* Pasamos la ref */}
          <ContentDesktop onSmoothScroll={handleSmoothScroll} isMobileView={isMobileView} />
          {!hideHeaderAndFooter3 && <Footer3/>}
        </div>
      )}
    </div>
  );
}

export default App;
