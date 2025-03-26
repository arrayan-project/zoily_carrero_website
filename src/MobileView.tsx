// MobileView.tsx
import ThemeToggleButton from "./components/buttons/ThemeToggleButton";
import ScrollToTopButton from "./components/buttons/ScrollTopButton";
import LayoutMobile from "./components/layout/MobileFrame";
import Content from "./components/layout/PageSections";

interface LandingPageMobileProps {
  onSmoothScroll: (sectionId: string) => void;
}

function LandingPageMobile({ onSmoothScroll }: LandingPageMobileProps) {
  return (
    <LayoutMobile>
        <div className="fixed top-4 left-4 z-50">
          <ThemeToggleButton />
        </div>
        <Content onSmoothScroll={onSmoothScroll}/>
        <ScrollToTopButton />
    </LayoutMobile>
  );
}

export default LandingPageMobile;
