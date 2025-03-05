import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { ThemeProvider } from './components/context/ThemeContext';
import { useTheme } from './components/context/useTheme';
import ThemeToggleButton from './components/ThemeToggleButton';
import Navigation from './components/Navigation';
import ScrollToTopButton from './components/ScrollTopButton';
import Footer from './components/Footer';
import LandingPageMobile from './LandingPageMobile';
import Content from './components/Content';
import Home from './pages/Home';
import Services from './pages/Services';
import UGC from './pages/UGC';
import Store from './pages/Store';
import Gallery from './pages/Gallery';
import About from './pages/About';
import Contact from './pages/Contact';
import { MOBILE_BREAKPOINT } from './constants';

function Layout() {
  const location = useLocation();
  const hideHeaderAndFooter = location.pathname === "/";
  const { theme } = useTheme();
  const themeClasses = !hideHeaderAndFooter ? (theme === 'light' ? 'bg-white text-amber-700' : 'bg-gray-800 text-rose-400') : '';

  return (
    <div className={`relative min-h-screen ${themeClasses}`}>
      {!hideHeaderAndFooter && <Navigation className="md:mb-12" />}
      <div className="fixed top-4 left-4 md:top-6 md:left-6 lg:top-8 lg:left-8 z-50">
        {!hideHeaderAndFooter && <ThemeToggleButton />}
      </div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<Services />} />
        <Route path="/ugc" element={<UGC />} />
        <Route path="/store" element={<Store />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      {!hideHeaderAndFooter && <Footer />}
      <ScrollToTopButton />
    </div>
  );
}

function App() {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const isMobileView = windowWidth < MOBILE_BREAKPOINT;

  return (
    <ThemeProvider>
      <Router basename="/zoily_carrero_website/">
        {isMobileView ? <LandingPageMobile /> : <Layout />}
      </Router>
    </ThemeProvider>
  );
}

export default App;
