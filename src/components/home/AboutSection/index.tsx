// src/components/home/AboutSection/index.tsx
import AboutImagesSection   from './AboutImagesSection';
import AboutMainContent     from './AboutMainContent';
import AboutWhyUsSection    from './AboutWhyUsSection';

export default function AboutSection() {
  return (
    <section id="about" 
    className="max-w-7xl mx-auto px-4 py-16 sm:px-6 lg:px-8">
    <AboutMainContent />
    <AboutWhyUsSection />
    <AboutImagesSection />
  </section>
  );
}
