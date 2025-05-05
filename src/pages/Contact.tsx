// src/pages/Contact.tsx
import { useEffect } from "react";
import { useTheme } from "../components/context/useThemeHook";
import "../GlobalStyles.css";
import ContactForm from "../components/forms/ContactUsForm";
import useWindowSize from "../hooks/useWindowSize";
import { useLocation } from "react-router-dom";
import LazyFooter from "../components/common/LazyFooter";
import ContactInfoSection from "../components/contact/ContactInfoSection";
import ContactSocialMediaSection from "../components/contact/ContactSocialMediaSection";
import ContactMainTitle from "../components/contact/ContactMainTitle";
import { Helmet } from 'react-helmet-async';

interface ContactProps {}

function Contact({}: ContactProps) {
  const { colors } = useTheme();
  const { isMobileView } = useWindowSize();
  const location = useLocation();
  const isMobile = typeof window !== 'undefined' ? window.innerWidth < 768 : false;


  useEffect(() => {
    const hash = location.hash;
    if (hash) {
      const element = document.querySelector(hash);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    } else {
      window.scrollTo(0, 0);
    }
  }, [location.hash]);

  return (
    <div
      className={`min-h-screen`} 
      style={{ backgroundColor: colors.background, color: colors.text }}
    >
       {!isMobile && (
      <Helmet>
        <title>Contacta con Zoily Carrero MakeUp | Maquillaje Profesional</title>
        <meta
          name="description"
          content="¿Lista para tu transformación? Contacta con Zoily Carrero MakeUp para agendar tu cita de maquillaje profesional, cursos o colaboraciones UGC. ¡Hablemos!"
        />
      </Helmet>
      )}
      <section id="contact" className="max-w-6xl mx-auto px-4 py-16 md:py-24">
        <ContactMainTitle />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <section className={`shadow-sm p-2 md:p-8`}>
            <ContactForm />
          </section>

          <section className="space-y-8">
            <ContactInfoSection />
            <ContactSocialMediaSection />
          </section>
        </div>
      </section>
    </div>
  );
}

export default Contact;
