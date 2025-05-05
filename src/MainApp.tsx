/// src/MainApp.tsx
import React from 'react';
import useWindowSize from './hooks/useWindowSize';
import AppShell from './components/layout/AppShell';

export default function MainApp() {
  const { isMobileView } = useWindowSize();

  const handleSmoothScroll = (sectionId: string) => {
    const el = document.getElementById(sectionId);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <AppShell
      onSmoothScroll={handleSmoothScroll}
    />
  );
}