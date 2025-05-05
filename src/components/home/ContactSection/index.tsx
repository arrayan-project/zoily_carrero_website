// src/components/home/ContactSection/index.tsx
import React from 'react';
import { useTheme } from '../../../components/context/useThemeHook';
import ContactMainTitle          from './ContactMainTitle';
import ContactInfoSection        from './ContactInfoSection';
import ContactSocialMediaSection from './ContactSocialMediaSection';
import ContactForm              from './ContactUsForm';

export default function ContactSection() {
  const { colors } = useTheme();

  return (
    <div
      id="contact"
      className="min-h-screen"
      style={{ backgroundColor: colors.background, color: colors.text }}
    >
      <section className="max-w-6xl mx-auto px-4 py-16 md:py-24">
        <ContactMainTitle />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <section className="shadow-sm p-2 md:p-8">
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
