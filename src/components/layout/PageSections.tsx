import React, { lazy, Suspense } from "react";

const Home = lazy(() => import("../../pages/Home"));
const Store = lazy(() => import("../../pages/Store"));
const About = lazy(() => import("../../pages/About"));
const Contact = lazy(() => import("../../pages/Contact"));

interface PageSectionsProps {
  onSmoothScroll: (id: string) => void;
  isMobileView: boolean;
}

const PageSections: React.FC<PageSectionsProps> = ({ onSmoothScroll, isMobileView }) => {
  return (
    <main>
      <Suspense fallback={<div className="text-pink-500 animate-pulse">Cargando Inicio...</div>}>
        <section id="home">
          <Home onSmoothScroll={onSmoothScroll} isMobileView={isMobileView} />
        </section>
      </Suspense>

      <Suspense fallback={<div className="text-pink-500 animate-pulse">Cargando Tienda...</div>}>
        <section id="store">
          <Store />
        </section>
      </Suspense>

      <Suspense fallback={<div className="text-pink-500 animate-pulse">Cargando Acerca de...</div>}>
        <section id="about">
          <About />
        </section>
      </Suspense>

      <Suspense fallback={<div className="text-pink-500 animate-pulse">Cargando Contacto...</div>}>
        <section id="contact">
          <Contact />
        </section>
      </Suspense>
    </main>
  );
};

export default PageSections;
