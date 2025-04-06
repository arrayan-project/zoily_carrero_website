// src/pages/Contact.tsx
import { useEffect } from "react";
import { useTheme } from "../components/context/useThemeHook";
import "../GlobalStyles.css";
import ContactForm from "../components/forms/ContactUsForm";
import useWindowSize from "../hooks/useWindowSize";
import { useLocation } from "react-router-dom";
import Footer from "../components/common/Footer";
import ContactInfoSection from "../components/contact/ContactInfoSection";
import ContactSocialMediaSection from "../components/contact/ContactSocialMediaSection";
import ContactMainTitle from "../components/contact/ContactMainTitle";

interface ContactProps {}

function Contact({}: ContactProps) {
  const { colors } = useTheme();
  const { isMobileView } = useWindowSize();
  const location = useLocation();

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
      {isMobileView && <Footer />}
    </div>
  );
}

export default Contact;
