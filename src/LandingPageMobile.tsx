import ThemeToggleButton from "./components/ThemeToggleButton";
import ScrollToTopButton from "./components/ScrollTopButton";
import LayoutMobile from "./components/LayoutMobile";
import HomeContainer from "./components/HomeContainer";
import Content from "./components/Content";

function LandingPageMobile() {
  return (
    <LayoutMobile>
      <div className="relative">
        <div className="fixed top-4 left-4 z-50">
          <ThemeToggleButton />
        </div>
        <HomeContainer>
          <Content isMobileView={true} />
        </HomeContainer>
        <ScrollToTopButton />
      </div>
    </LayoutMobile>
  );
}

export default LandingPageMobile;
