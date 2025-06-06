// src/pages/Contact.tsx
import { lazy, Suspense } from "react";
import { useTheme } from "../components/context/themeContext";
import "../GlobalStyles.css";
import { LazyHelmetProvider, LazyHelmet } from "../utils/LazyHelmet";
import ContactSkeleton from "../components/skeletons/ContactSkeleton";
import useScrollToHash from "../hooks/useScrollToHash";
import { ErrorBoundary } from "react-error-boundary";
import ErrorComponent from "../components/common/ErrorComponent"; // Ajusta la ruta si es necesario

const ContactForm = lazy(() => import("../components/forms/ContactUsForm"));
const ContactInfoSection = lazy(
  () => import("../components/contact/ContactInfoSection")
);
const ContactMainTitle = lazy(
  () => import("../components/contact/ContactMainTitle")
);

interface ContactProps {}

function Contact({}: ContactProps) {
  const { colors } = useTheme();
  const isMobile =
    typeof window !== "undefined" ? window.innerWidth < 768 : false;

  useScrollToHash();

  const handleResetBoundary = () => {
    // Intenta recargar la página.
    window.location.reload();
  };

  return (
    <ErrorBoundary
      FallbackComponent={ErrorComponent}
      onReset={handleResetBoundary}
    >
      <div
        className={`min-h-screen`}
        style={{ backgroundColor: colors.background, color: colors.text }}
      >
        {!isMobile && (
          <Suspense fallback={null}>
            <LazyHelmetProvider>
              <LazyHelmet>
                <title>
                  Contacta con Zoily Carrero MakeUp | Maquillaje Profesional
                </title>
                <meta
                  name="description"
                  content="¿Lista para tu transformación? Contacta con Zoily Carrero MakeUp para agendar tu cita de maquillaje profesional, cursos o colaboraciones UGC. ¡Hablemos!"
                />
              </LazyHelmet>
            </LazyHelmetProvider>
          </Suspense>
        )}

        <section id="contact" className="max-w-6xl mx-auto px-4 py-16 md:py-24">
          <Suspense fallback={<ContactSkeleton />}>
            <ContactMainTitle />
          </Suspense>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <section className={`shadow-sm p-2 md:p-8`}>
              <Suspense fallback={<ContactSkeleton />}>
                <ContactForm />
              </Suspense>
            </section>
            <section className="space-y-8">
              <Suspense fallback={<ContactSkeleton />}>
                <ContactInfoSection />
              </Suspense>
            </section>
          </div>
        </section>
      </div>
    </ErrorBoundary>
  );
}

export default Contact;
