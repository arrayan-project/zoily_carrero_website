// src/pages/Home.tsx
import { useState, useEffect, memo, lazy, Suspense } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { homeInfo, homeLinks, homeFeatures, homeBrands, galleryFeatures } from "../data/homeData";
import { Helmet } from 'react-helmet-async';
import { useTheme } from "../components/context/useThemeHook";
import BackgroundSliderHome from "../components/sliders/BackgroundSliderHome";
import HomeButton          from "../components/buttons/HomeButton";
import HomeTitle           from "../components/home/HomeTitle";
import ScrollDownArrow     from "../components/common/ScrollDownArrow";
import LazyFooter          from "../components/common/LazyFooter";

// Secciones Home
const HomeLinksSection    = lazy(() => import("../components/home/HomeLinksSection"));
const HomeFeaturesSection = lazy(() => import("../components/home/HomeFeaturesSection"));
const HomeBrandsSection   = lazy(() => import("../components/home/HomeBrandsSection"));
const HomeGallerySection  = lazy(() => import("../components/home/HomeGallerySection"));

// Secciones adicionales integradas en mobile
const AboutSection        = lazy(() => import("../components/home/AboutSection"));
const ContactSection      = lazy(() => import("../components/home/ContactSection"));

interface HomeProps {
  onSmoothScroll: (sectionId: string) => void;
  isMobileView: boolean;
}

const Home = memo(({ onSmoothScroll, isMobileView }: HomeProps) => {
  const [, setWindowWidth] = useState(window.innerWidth);
  const navigate = useNavigate();
  const { hash } = useLocation();
  const { colors } = useTheme();

  // Handle window resize
  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // On mount, check for saved section scroll request
  useEffect(() => {
    const section = sessionStorage.getItem('scrollToSection');
    if (isMobileView && section) {
      onSmoothScroll(section);
      sessionStorage.removeItem('scrollToSection');
    }
  }, [isMobileView, onSmoothScroll]);

  // Scroll when hash changes
  useEffect(() => {
    if (isMobileView && hash) {
      const section = hash.slice(1);
      import(`../components/home/${section.charAt(0).toUpperCase() + section.slice(1)}Section`)
        .then(() => {
          document.getElementById(section)?.scrollIntoView({ behavior: 'smooth' });
        });
    }
  }, [hash, isMobileView]);

  const handleVerServiciosClick = () => navigate("/services#services");
  const handleAgendaTuCitaClick = () => {
    if (isMobileView) onSmoothScroll("contact");
    else navigate("/contact#contact");
  };

  return (
    <div
      id="home"
      className="relative transition-colors duration-300"
      style={{ backgroundColor: colors.background, color: colors.text }}
    >
      <Helmet>
        <title>Zoily Carrero MakeUp - Maquillaje Profesional y Cursos</title>
        <meta
          name="description"
          content="Descubre el arte del maquillaje profesional con Zoily Carrero. Ofrecemos servicios personalizados, cursos de automaquillaje y contenido UGC. ¡Agenda tu cita!"
        />
      </Helmet>

      {/* Hero */}
      <div className="relative mb-10 md:mb-24">
        <BackgroundSliderHome />
        <div className="absolute inset-0 z-10 flex flex-col items-center justify-center w-full">
          <main className="flex-grow flex flex-col items-center justify-center text-center px-4">
            {homeInfo?.title && homeInfo?.subtitle && (
              <HomeTitle title={homeInfo.title} subtitle={homeInfo.subtitle} />
            )}
            <div className="flex flex-col sm:flex-row gap-4">
              {homeInfo.button1Text && (
                <HomeButton
                  isMobileView={isMobileView}
                  onClick={handleVerServiciosClick}
                  className="px-6 py-3 bg-white text-black font-normal font-cinzel rounded shadow hover:bg-gray-200 transition duration-200"
                >
                  {homeInfo.button1Text}
                </HomeButton>
              )}
              {homeInfo.button2Text && (
                <HomeButton
                  isMobileView={isMobileView}
                  onClick={handleAgendaTuCitaClick}
                  className="px-6 py-3 bg-pink-700 text-white font-normal font-cinzel rounded shadow hover:bg-pink-900 transition duration-200"
                >
                  {homeInfo.button2Text}
                </HomeButton>
              )}
            </div>
          </main>
          <ScrollDownArrow />
        </div>
      </div>

      {isMobileView ? (
        <Suspense fallback={null}>
          {/* Secciones Home en mobile */}
          <HomeLinksSection
            title={homeLinks.title}
            subtitle={homeLinks.subtitle}
            subtitle1={homeLinks.subtitle1}
            links={homeLinks.links}
            isMobileView={isMobileView}
            onSmoothScroll={onSmoothScroll}
          />
          <HomeFeaturesSection
            imageSrc={homeFeatures.imageSrc}
            alt={homeFeatures.alt}
            features={homeFeatures.features}
          />
          <HomeBrandsSection brands={homeBrands.brands} />
          <HomeGallerySection
            imageSrc={galleryFeatures.imageSrc}
            alt={galleryFeatures.alt}
            gallery={galleryFeatures.gallery}
          />

          {/* Secciones About */}
          <div id="about">
            <AboutSection />
          </div>

          {/* Secciones Contact */}
          <div id="contact">
            <ContactSection />
          </div>
          <LazyFooter />
        </Suspense>
      ) : (
        <Suspense fallback={null}>
          {/* Desktop: Home sections + footer */}
          <HomeLinksSection
            title={homeLinks.title}
            subtitle={homeLinks.subtitle}
            subtitle1={homeLinks.subtitle1}
            links={homeLinks.links}
            isMobileView={isMobileView}
            onSmoothScroll={onSmoothScroll}
          />
          <HomeFeaturesSection
            imageSrc={homeFeatures.imageSrc}
            alt={homeFeatures.alt}
            features={homeFeatures.features}
          />
          <HomeBrandsSection brands={homeBrands.brands} />
          <HomeGallerySection
            imageSrc={galleryFeatures.imageSrc}
            alt={galleryFeatures.alt}
            gallery={galleryFeatures.gallery}
          />
        </Suspense>
      )}
    </div>
  );
});

export default Home;
