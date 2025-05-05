/// src/MainApp.tsx
import AppShell from './components/layout/AppShell';

export default function MainApp() {

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