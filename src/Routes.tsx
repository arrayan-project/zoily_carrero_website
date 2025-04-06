// src/Routes.tsx
import { lazy, Suspense, useState } from 'react';
import { Routes, Route } from 'react-router-dom';
// Carga diferida de los componentes
const Home = lazy(() => import('./pages/Home'));
const Services = lazy(() => import('./pages/Services'));
const Gallery = lazy(() => import('./pages/Gallery'));
const UGC = lazy(() => import('./pages/UGC'));
const Store = lazy(() => import('./pages/Store'));
const About = lazy(() => import('./pages/About'));
const Contact = lazy(() => import('./pages/Contact'));

interface RoutesProps {
  onSmoothScroll: (sectionId: string) => void;
  isMobileView: boolean;
}

const MyRoutes = ({ onSmoothScroll, isMobileView }: RoutesProps) => {
  const [error] = useState<string | null>(null);

  if (error) {
    console.error("Error en MyRoutes:", error);
    return (
      <div className="error-container">
        <p className="error-message">Ha ocurrido un error inesperado al cargar las rutas.</p>
      </div>
    );
  }

  return (
    <Suspense fallback={<div className="loading-container">Cargando...</div>}>
      <Routes>
        <Route path="/" element={<Home onSmoothScroll={onSmoothScroll} isMobileView={isMobileView} />} />
        <Route path="/services" element={<Services />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/ugc" element={<UGC />} />
        <Route path="/store" element={<Store />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/*" element={<Home onSmoothScroll={onSmoothScroll} isMobileView={isMobileView} />} />
      </Routes>
    </Suspense>
  );
};

export default MyRoutes;
