import ThemeToggleButton from "./components/ThemeToggleButton";
import ScrollToTopButton from "./components/ScrollTopButton";
import LayoutMobile from "./components/LayoutMobile";
import Content from "./components/Content";

interface LandingPageMobileProps {
  openModal: () => void;
  isMobileView: boolean;
  onSmoothScroll: (sectionId: string) => void;
}

function LandingPageMobile({ openModal, isMobileView, onSmoothScroll  }: LandingPageMobileProps) {
  return (
    <LayoutMobile>
      <div className="relative">
        <div className="fixed top-4 left-4 z-50">
          <ThemeToggleButton />
        </div>
        <Content isMobileView={isMobileView} onSmoothScroll={onSmoothScroll}/> {/*Se pasa la prop a content*/}
        <ScrollToTopButton />
      </div>
    </LayoutMobile>
  );
}

export default LandingPageMobile;
