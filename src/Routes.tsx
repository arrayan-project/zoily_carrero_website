// src/Routes.tsx
import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Home     from './pages/Home';
import Services from './pages/Services';
import Gallery  from './pages/Gallery';
import UGC      from './pages/UGC';
import Store    from './pages/Store';
import About    from './pages/About';
import Contact  from './pages/Contact';
import FAQ      from './pages/FAQ';
import Terms    from './pages/Terms';
import Policy   from './pages/Policy';

interface AppRoutesProps {
  onSmoothScroll: (sectionId: string) => void;
  isMobileView: boolean;
}

export default function AppRoutes({ onSmoothScroll, isMobileView }: AppRoutesProps) {
  return (
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
  );
}
