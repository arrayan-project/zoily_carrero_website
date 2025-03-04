import React from 'react';
    import ThemeToggleButton from './components/ThemeToggleButton';
    import Home from './pages/Home';
    import Services from './pages/Services';
    import About from './pages/About';
    import Contact from './pages/Contact';
    import Gallery from './pages/Gallery';
    import Store from './pages/Store';
    import UGC from './pages/UGC';
    import ScrollToTopButton from './components/ScrollTopButton';
    import LayoutMobile from './components/LayoutMobile';
    import HomeContainer from './components/HomeContainer';

    function LandingPageMobile() {


      return (
        <LayoutMobile> {/* Envuelve el contenido con LayoutMobile */}
        <div className="relative"> {/* Asegura el apilamiento vertical */}
            <div className="fixed top-4 left-4 z-50"> {/* Añade una clase para estilos */}
                <ThemeToggleButton />
        </div>
        <HomeContainer>
          <section id="home" className="page-section"> {/* Añade una clase para estilos */}
            <Home />
          </section>
        </HomeContainer>
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
          <ScrollToTopButton />
        </div>
        </LayoutMobile>
      );
    }

    export default LandingPageMobile;