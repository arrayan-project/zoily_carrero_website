// src/Routes.tsx
import { Routes, Route, Navigate, } from 'react-router-dom';
import { lazy, Suspense  } from 'react';

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

interface AppRoutesProps {
  onSmoothScroll: (sectionId: string) => void;
  isMobileView: boolean;
}

export default function AppRoutes({ onSmoothScroll, isMobileView }: AppRoutesProps) {
  return (
    <Suspense fallback={<div>Cargando…</div>}>
    <Routes>
      <Route
        path="/home"
        element={<Home onSmoothScroll={onSmoothScroll} isMobileView={isMobileView} />}
      />

      <Route path="/services" element={<Services />} />
      <Route path="/gallery"  element={<Gallery />} />
      <Route path="/ugc"      element={<UGC />} />

      {/* Desktop independent pages */}
      <Route path="/store"   element={<Store />} />
      <Route path="/about"   element={<About />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/faq"     element={<FAQ />} />
      <Route path="/terms"   element={<Terms />} />
      <Route path="/policy"  element={<Policy />} />

      {/* Redirect root to home */}
      <Route path="/" element={<Navigate to="/home" replace />} />
    </Routes>
    </Suspense>
  );
}
