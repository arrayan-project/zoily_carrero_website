import { useEffect, useState, useRef, lazy, Suspense } from 'react';
import { BrowserRouter as Router, useLocation, useNavigate } from 'react-router-dom';
import { ThemeProvider } from './components/context/themeContext';
import { useTheme } from './components/context/useThemeHook';
import { MOBILE_BREAKPOINT } from './constants/breakpoints';
import './GlobalStyles.css';
import { HelmetProvider } from 'react-helmet-async';
import ScrollToTop from './utils/ScrollToTop';
import LazyFooter from "./components/common/LazyFooter"

// Lazy-loaded components
const Navigation = lazy(() => import('./components/navigation/NavBarMenu'));
const FloatingContactButton = lazy(() => import('./components/buttons/FloatingContactButton'));
const ContactModal = lazy(() => import('./components/modals/ContactUsModal'));
const ContentDesktop = lazy(() => import('./components/layout/ContentDesktop'));
const LandingPageMobile = lazy(() => import('./LandingPageMobile'));
const ThemeToggleButton = lazy(() => import('./components/buttons/ThemeToggleButton'));
const ScrollToTopButton = lazy(() => import('./components/buttons/ScrollTopButton'));

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const isInternalScroll = useRef(false);
  const isNavigating = useRef(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

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
        <div className="relative w-full overflow-x-hidden">
          <Router>
          <ScrollToTop />
            <Suspense fallback={<div className="text-center py-10">Cargando...</div>}>
              <MainContent
                handleSmoothScroll={handleSmoothScroll}
                openModal={openModal}
                closeModal={closeModal}
                isModalOpen={isModalOpen}
                isInternalScroll={isInternalScroll}
                isNavigating={isNavigating}
              />
            </Suspense>
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
  const navigate = useNavigate();
  const showHeaderAndFooter = location.pathname !== "/";
  const themeClasses = showHeaderAndFooter
    ? `bg-[${colors.background}] text-[${colors.accent}]`
    : '';
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const isMobileView = windowWidth < MOBILE_BREAKPOINT;
  const [hasEvaluatedViewport, setHasEvaluatedViewport] = useState(false);

  useEffect(() => {
    const init = () => {
      const handleResize = () => setWindowWidth(window.innerWidth);

      window.addEventListener('resize', handleResize);

      if (theme === 'dark') {
        document.body.classList.add('dark-mode');
      } else {
        document.body.classList.remove('dark-mode');
      }

      setHasEvaluatedViewport(true);

      return () => {
        window.removeEventListener('resize', handleResize);
        document.body.classList.remove('dark-mode');
      };
    };

    if ('requestIdleCallback' in window) {
      requestIdleCallback(init);
    } else {
      setTimeout(init, 1);
    }
  }, [theme]);

  useEffect(() => {
    if (!isInternalScroll.current && !isNavigating.current) {
      window.scrollTo(0, 0);
    }
    isInternalScroll.current = false;
    isNavigating.current = false;
  }, [location.pathname]);

  useEffect(() => {
    if (!isMobileView) {
      if ('requestIdleCallback' in window) {
        requestIdleCallback(() => {
          import("./pages/Services");
          import("./pages/Gallery");
          import("./pages/UGC");
          import("./pages/Store");
        });
      } else {
        setTimeout(() => {
          import("./pages/Services");
          import("./pages/Gallery");
          import("./pages/UGC");
          import("./pages/Store");
        }, 1);
      }
    }
  }, [isMobileView]);

  useEffect(() => {
    if (isMobileView && location.pathname === "/") {
      const scrollTarget = sessionStorage.getItem("scrollToSection");
      if (scrollTarget) {
        const interval = setInterval(() => {
          const el = document.getElementById(scrollTarget);
          if (el) {
            el.scrollIntoView({ behavior: "smooth" });
            sessionStorage.removeItem("scrollToSection");
            clearInterval(interval);
          }
        }, 100);
        setTimeout(() => clearInterval(interval), 3000); // failsafe
      }
    }
  }, [location.pathname, isMobileView]);

  useEffect(() => {
    const landingSections = ["/about", "/contact"];
    const pathname = location.pathname;
  
    if (hasEvaluatedViewport && isMobileView && landingSections.includes(pathname)) {
      const sectionId = pathname.replace("/", "");
      sessionStorage.setItem("scrollToSection", sectionId);
      navigate("/");
    }
  }, [location.pathname, isMobileView, hasEvaluatedViewport]);

  return (
    <div className="w-full">
      <FloatingContactButton onClick={openModal} />
      <ContactModal isOpen={isModalOpen} onClose={closeModal} />
      {!isMobileView &&
        ["/", "/services", "/ugc", "/store", "/gallery"].includes(location.pathname) && (
          <Suspense fallback={null}>
            <ScrollToTopButton />
          </Suspense>
        )}

      {isMobileView ? (
        <div className="w-full relative">
          <Navigation
            className="fixed top-0 left-0 w-full z-50"
            onSmoothScroll={handleSmoothScroll}
            isMobileView={isMobileView}
            isInternalScroll={isInternalScroll}
            isNavigating={isNavigating}
          />
          <LandingPageMobile 
            onSmoothScroll={handleSmoothScroll} 
            isMobileView={isMobileView} />
        </div>
      ) : (
        <div className={` ${themeClasses} w-full`}>
          <div className="fixed top-4 left-4 z-[70]">
            <ThemeToggleButton />
          </div>
          {showHeaderAndFooter && (
            <Navigation
              className="md:mb-12"
              onSmoothScroll={handleSmoothScroll}
              isMobileView={isMobileView}
              isInternalScroll={isInternalScroll}
              isNavigating={isNavigating}
            />
          )}
          <ContentDesktop 
            onSmoothScroll={handleSmoothScroll} 
            isMobileView={isMobileView} />
          {showHeaderAndFooter && <LazyFooter />}
        </div>
      )}
    </div>
  );
}

export default App;
