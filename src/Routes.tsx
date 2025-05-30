/**
 * Definición de rutas principales de la aplicación.
 * Utiliza React Router para el enrutamiento y carga perezosa de las páginas.
 *
 * @file Routes.tsx
 */
import { Routes, Route, Navigate } from 'react-router-dom';
import { lazy } from 'react';

const Home     = lazy(() => import('./pages/Home'));
const Services = lazy(() => import('./pages/Services'));
const Gallery  = lazy(() => import('./pages/Gallery'));
const UGC      = lazy(() => import('./pages/UGC'));
const Store    = lazy(() => import('./pages/Store'));
const About    = lazy(() => import('./pages/About'));
const Contact  = lazy(() => import('./pages/Contact'));
const FAQ      = lazy(() => import('./pages/FAQ'));
const Terms    = lazy(() => import('./pages/Terms'));
const Policy   = lazy(() => import('./pages/Policy'));

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/home"     element={<Home />} />
      <Route path="/services" element={<Services />} />
      <Route path="/gallery"  element={<Gallery />} />
      <Route path="/ugc"      element={<UGC />} />
      <Route path="/store"    element={<Store />} />
      <Route path="/about"    element={<About />} />
      <Route path="/contact"  element={<Contact />} />
      <Route path="/faq"      element={<FAQ />} />
      <Route path="/terms"    element={<Terms />} />
      <Route path="/policy"   element={<Policy />} />
      <Route path="*"         element={<Navigate to="/home" replace />} />
    </Routes>
  );
}
