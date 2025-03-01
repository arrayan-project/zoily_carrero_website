// src/App.tsx
import React, {useState} from 'react';
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { ThemeProvider} from './components/context/ThemeContext'; // Ruta CORRECTA a ThemeContext
import { useTheme } from './components/context/useTheme';
import ThemeToggleButton from './components/ThemeToggleButton';
import Navigation from './components/Navigation';
import ScrollToTopButton from './components/ScrollTopButton';
import Footer from './components/Footer';
import Home from './pages/Home';
import Services from './pages/Services';
import UGC from './pages/UGC';
import Store from './pages/Store';
import Gallery from './pages/Gallery';
import About from './pages/About';
import Contact from './pages/Contact';



function Layout() {
  const location = useLocation();
  const hideHeaderAndFooter = location.pathname === "/";
  const { theme } = useTheme();
  const themeClasses = !hideHeaderAndFooter ? (theme === 'light' ? 'bg-white text-amber-700' : 'bg-gray-800 text-rose-400') : '';

  return (
    <div className={`relative min-h-screen ${themeClasses}`}>
      {!hideHeaderAndFooter && <Navigation className="md:mb-12" />}
      {/* Contenedor para el botón en la esquina superior izquierda */}
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
  return (
    <ThemeProvider>
      <Router basename="/zoily_carrero_website/">
        <Layout />
      </Router>
    </ThemeProvider>
  );
}

export default App;