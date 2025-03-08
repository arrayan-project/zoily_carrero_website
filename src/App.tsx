import { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { ThemeProvider } from './components/context/themeContext';
import { useTheme } from './components/context/useTheme';
import ThemeToggleButton from './components/ThemeToggleButton';
import Navigation from './components/Navigation';
import ScrollToTopButton from './components/ScrollTopButton';
import Footer from './components/Footer';
import { MOBILE_BREAKPOINT } from './constants';
import FloatingContactButton from './components/FloatingContactButton'; // Importar FloatingContactButton
import ContactModal from './components/ContactModal'; // Importar ContactModal
import './index.css';
import './App.css'; //Importar App.css
import Content from './components/Content'; //Importar Content
import ContentDesktop from './components/ContentDesktop'; //Importar ContentDesktop

interface AppProps {
  onSmoothScroll: (sectionId: string) => void;
  
}

function Layout({onSmoothScroll}:AppProps) {
  const location = useLocation();
  const hideHeaderAndFooter = location.pathname === "/";
  const { theme } = useTheme();
  const themeClasses = !hideHeaderAndFooter ? (theme === 'light' ? 'bg-white text-amber-700' : 'bg-gray-800 text-rose-400') : '';

  return (
    <div className={`min-h-screen ${themeClasses}`}> 
        {!hideHeaderAndFooter && <Navigation className="md:mb-12" />}
        <div className="fixed top-4 left-4 md:top-6 md:left-6 lg:top-8 lg:left-8 z-50">
          {!hideHeaderAndFooter && <ThemeToggleButton />}
        </div>
        {/* se renderizara el contenido desktop */}
        <ContentDesktop onSmoothScroll={onSmoothScroll}/> 
        {!hideHeaderAndFooter && <Footer />}

        <ScrollToTopButton />
    </div>
  );
}

function App() {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [isModalOpen, setIsModalOpen] = useState(false); // Estado para el modal

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  // Función para abrir el modal
  const openModal = () => {
    setIsModalOpen(true);
  };

  // Función para cerrar el modal
  const closeModal = () => {
    setIsModalOpen(false);
  };

  const isMobileView = windowWidth < MOBILE_BREAKPOINT;
  const handleSmoothScroll = (sectionId: string) => {
    console.log("Scrolling to:", sectionId);
    const element = document.getElementById(sectionId);
    if(element){
      element.scrollIntoView({ behavior: "smooth" })
    }
 }; //definimos la funcion que luego se pasa por props

  return (
    <ThemeProvider> {/* Se envuelve todo dentro de ThemeProvider */}
        <div className='relative'> {/* Se agrega este elemento padre */}
                <FloatingContactButton onClick={openModal} />
                <ContactModal isOpen={isModalOpen} onClose={closeModal} />
                <Router basename="/zoily_carrero_website/">
                <ThemeToggleButton />
                <ScrollToTopButton />
                {isMobileView ? <Content onSmoothScroll={handleSmoothScroll} /> : <Layout onSmoothScroll={handleSmoothScroll}/>}
                </Router>
        </div>
    </ThemeProvider>
  );
}

export default App;
