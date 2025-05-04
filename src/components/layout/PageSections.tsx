// Updated src/components/layout/PageSections.tsx
import React, { lazy, Suspense } from "react";
import HomeSkeleton from "../../components/skeletons/HomeSkeleton";
import StoreSkeleton from "../../components/skeletons/StoreSkeleton";
import AboutSkeleton from "../../components/skeletons/AboutSkeleton";
import ContactSkeleton from "../../components/skeletons/ContactSkeleton";

const Home = lazy(() => import("../../pages/Home"));
const About = lazy(() => import("../../pages/About"));
const Contact = lazy(() => import("../../pages/Contact"));

// Define min-height placeholders for each section to reserve space
const placeholderHeights: Record<string, string> = {
  home: '100vh',
  store: '80vh',
  about: '70vh',
  contact: '60vh',
};

interface PageSectionsProps {
  onSmoothScroll: (id: string) => void;
  isMobileView: boolean;
}

const PageSections: React.FC<PageSectionsProps> = ({ onSmoothScroll, isMobileView }) => {
  return (
    <main>
      <section
        id="home"
        style={{ minHeight: placeholderHeights.home }}
      >
        <Suspense fallback={<HomeSkeleton />}>  
          <Home onSmoothScroll={onSmoothScroll} isMobileView={isMobileView} />
        </Suspense>
      </section>

      <section
        id="about"
        style={{ minHeight: placeholderHeights.about }}
      >
        <Suspense fallback={<AboutSkeleton />}>  
          <About />
        </Suspense>
      </section>

      <section
        id="contact"
        style={{ minHeight: placeholderHeights.contact }}
      >
        <Suspense fallback={<ContactSkeleton />}>  
          <Contact />
        </Suspense>
      </section>
    </main>
  );
};

export default PageSections;