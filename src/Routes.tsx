import { Routes, Route, Navigate } from "react-router-dom";
import { lazy, Suspense } from "react";

const Services = lazy(() => import("./pages/Services"));
const Gallery = lazy(() => import("./pages/Gallery"));
const UGC = lazy(() => import("./pages/UGC"));
const Home = lazy(() => import("./pages/Home"));
const Store = lazy(() => import("./pages/Store"));
const About = lazy(() => import("./pages/About"));
const Contact = lazy(() => import("./pages/Contact"));
const FAQ = lazy(() => import("./pages/FAQ")); 
const Policy = lazy(() => import("./pages/Policy")); 
const Terms = lazy(() => import("./pages/Terms"));

interface AppRoutesProps {
  isMobileView: boolean;
}

const AppRoutes: React.FC<AppRoutesProps> = ({ isMobileView }) => {
  return (
    
    <Suspense fallback={<div className="text-pink-500 animate-pulse">Cargando...</div>}>
      <Routes>
        <Route
          path="/"
          element={
            isMobileView ? <Navigate to="/" replace /> : <Home onSmoothScroll={() => {}} isMobileView={false} />
          }
        />
        <Route path="/services" element={<Services />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/ugc" element={<UGC />} />
        <Route path="/store" element={<Store />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/faq" element={<FAQ />} />
        <Route path="/policy" element={<Policy />} />
        <Route path="/terms" element={<Terms />} />
      </Routes>
    </Suspense>
  );
};

export default AppRoutes;
