import React from 'react';
import Home from '../pages/Home';
import Services from '../pages/Services';
import UGC from '../pages/UGC';
import Store from '../pages/Store';
import Gallery from '../pages/Gallery';
import About from '../pages/About';
import Contact from '../pages/Contact';

interface ContentProps {
  isMobileView: boolean;
  children?: React.ReactNode;
}

function Content({ isMobileView}: ContentProps) {
  return (
    <>
      {isMobileView && (
        <>
          <section id="home" className="page-section">
            <Home />
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
        </>
      )}
    </>
  );
}

export default Content;
