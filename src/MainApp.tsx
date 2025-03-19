/*
##### Responsabilidad #####
- Es el componente principal. Gestiona el tamaño de la pantalla, el tema, la modal de contacto, 
y decide qué renderizar (vista móvil o escritorio). 
- Contiene los botones ThemeToggleButton y ScrollToTopButton.

##### Componentes que renderiza ##### 
- LandingPageMobile, ContentDesktop, Navigation y Footer.

##### Lógica Clave #####
- isMobileView: Determina si se muestra la vista móvil o la de escritorio.
- MainContent: Renderiza condicionalmente LandingPageMobile o ContentDesktop según isMobileView.
*/

import { useEffect, useState } from 'react';
import { BrowserRouter as Router, useLocation } from 'react-router-dom';
import { ThemeProvider } from './components/context/themeContext';
import { useTheme } from './components/context/useThemeHook';
import Navigation from './components/navigation/NavBarMenu';
import Footer from './components/common/Footer';
import { MOBILE_BREAKPOINT } from './constants/constants';
import FloatingContactButton from './components/buttons/FloatingContactButton';
import ContactModal from './components/modals/ContactUsModal';
import './GlobalStyles.css';
import ContentDesktop from './components/layout/DesktopView';
import LandingPageMobile from './MobileView';
import ThemeToggleButton from './components/buttons/ThemeToggleButton';
import ScrollToTopButton from './components/buttons/ScrollTopButton';



function App() {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const isMobileView = windowWidth < MOBILE_BREAKPOINT;

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const handleSmoothScroll = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };


  return (
    <ThemeProvider>
      <div className='relative'>
        <Router basename="/zoily_carrero_website/">
          {/* Renderizado condicional */}
          <MainContent isMobileView={isMobileView} handleSmoothScroll={handleSmoothScroll} openModal={openModal} closeModal={closeModal} isModalOpen={isModalOpen}/>
        </Router>
      </div>
    </ThemeProvider>
  );
}
interface MainContentProps {
  isMobileView: boolean;
  handleSmoothScroll: (sectionId: string) => void;
  openModal: () => void;
  closeModal: () => void;
  isModalOpen: boolean;
}

function MainContent({ isMobileView, handleSmoothScroll, openModal, closeModal, isModalOpen }: MainContentProps) {
  const { theme } = useTheme();
  const location = useLocation();
  const hideHeaderAndFooter = location.pathname === "/";
  const themeClasses = !hideHeaderAndFooter ? (theme === 'light' ? 'bg-white text-amber-700' : 'bg-gray-800 text-rose-400') : '';

  return (
    <>
      <FloatingContactButton onClick={openModal} />
      <ContactModal isOpen={isModalOpen} onClose={closeModal} />
      <ScrollToTopButton />
      {isMobileView ? (
        <>
          <LandingPageMobile onSmoothScroll={handleSmoothScroll} />
        </>
      ) : (
        <div className={` ${themeClasses}`}>
            <div className="fixed top-4 left-4 z-50">
              <ThemeToggleButton />
            </div>
          {!hideHeaderAndFooter && <Navigation className="md:mb-12" />}
          <ContentDesktop onSmoothScroll={handleSmoothScroll} />
          {!hideHeaderAndFooter && <Footer />}
        </div>
      )}
    </>
  );
}

export default App;
