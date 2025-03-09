/*
##### Responsabilidad ##### 
- Renderiza la estructura de la vista móvil.

#### Componentes que renderiza #### 
- LayoutMobile, ThemeToggleButton, Content, ScrollToTopButton.

#### Lógica Clave ####
- LayoutMobile: Envuelve el contenido principal de la vista móvil.
- div extra: Contiene un div extra para que el boton funcione correctamente.
- Content: Renderiza las secciones.
- ThemeToggleButton: El boton de cambiar el tema.
- ScrollToTopButton: El boton de scroll. 
*/

import ThemeToggleButton from "./components/ThemeToggleButton";
import ScrollToTopButton from "./components/ScrollTopButton";
import LayoutMobile from "./components/MobileFrame";
import Content from "./components/PageSections";

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
