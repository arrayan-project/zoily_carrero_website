/*
#### Responsabilidad ####
- Renderiza las diferentes secciones de la página (Home, Services, etc.).

#### Componentes que renderiza ####
- Home, Services, UGC, Store, Gallery, About, Contact.

#### Lógica Clave ####
- <section>: Cada sección se renderiza en una etiqueta <section>.
- onSmoothScroll: Se pasa la función para el scroll suave al componente Home.
*/


import React from 'react';
import Home from '../pages/Home';
import Services from '../pages/Services';
import UGC from '../pages/UGC';
import Store from '../pages/Store';
import Gallery from '../pages/Gallery';
import About from '../pages/About';
import Contact from '../pages/Contact';

interface ContentProps {
  onSmoothScroll: (sectionId: string) => void;
}

function Content({ onSmoothScroll }: ContentProps) {
  return (
    <div>
      <section id="home" className="page-section">
        <Home onSmoothScroll={onSmoothScroll} />
      </section>
      <section id="services" className="page-section">
        <Services />
      </section>
      <section id="ugc" className="page-section">
        <UGC />
      </section>
      <section id="store" className="page-section">
        <Store />
      </section>
      <section id="gallery" className="page-section">
        <Gallery />
      </section>
      <section id="about" className="page-section">
        <About />
      </section>
      <section id="contact" className="page-section">
        <Contact />
      </section>
    </div>
  );
}

export default Content;