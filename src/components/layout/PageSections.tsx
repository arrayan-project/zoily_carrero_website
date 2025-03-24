/*
#### Responsabilidad ####
- Renderiza las diferentes secciones de la página (Home, Services, etc.).

#### Componentes que renderiza ####
- Home, Services, UGC, Store, Gallery, About, Contact.

#### Lógica Clave ####
- <section>: Cada sección se renderiza en una etiqueta <section>.
- onSmoothScroll: Se pasa la función para el scroll suave al componente Home.
*/


import React, { lazy, Suspense, useState } from 'react';
// Carga diferida de los componentes
const Home = lazy(() => import('../../pages/Home'));
const Services = lazy(() => import('../../pages/Services'));
const Gallery = lazy(() => import('../../pages/Gallery'));
const UGC = lazy(() => import('../../pages/UGC'));
const Store = lazy(() => import('../../pages/Store'));
const About = lazy(() => import('../../pages/About'));
const Contact = lazy(() => import('../../pages/Contact'));

interface ContentProps {
  onSmoothScroll: (sectionId: string) => void;
  className?: string; // Prop para clases adicionales
}

function Content({ onSmoothScroll, className }: ContentProps) {
  const [error, setError] = useState<string | null>(null);

  if (error) {
    console.error("Error en PageSections:", error);
    return (
      <div className="error-container">
        <p className="error-message">Ha ocurrido un error inesperado al cargar las secciones.</p>
      </div>
    );
  }

  return (
    <div className={className}>
      <Suspense fallback={<div className="loading-container">Cargando...</div>}>
        <section id="home" className="page-section">
          <Home onSmoothScroll={onSmoothScroll} />
        </section>
        <section id="services" className="page-section">
          <Services />
        </section>
        <section id="gallery" className="page-section">
          <Gallery />
        </section>
        <section id="ugc" className="page-section">
          <UGC />
        </section>
        <section id="store" className="page-section">
          <Store />
        </section>
        <section id="about" className="page-section">
          <About />
        </section>
        <section id="contact" className="page-section">
          <Contact />
        </section>
      </Suspense>
    </div>
  );
}

export default Content;