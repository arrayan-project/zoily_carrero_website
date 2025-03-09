/*
#### Responsabilidad ####
-  Define las rutas y renderiza las secciones en la vista de escritorio.

#### Componentes que renderiza ####
- MyRoutes.

#### Lógica Clave ####
- MyRoutes: Renderiza las rutas, que son las que renderizan las diferentes secciones.
*/

import MyRoutes from './Routes';

interface ContentDesktopProps {
  onSmoothScroll: (sectionId: string) => void;
}

const ContentDesktop = ({onSmoothScroll}: ContentDesktopProps) => {
  return (
        <MyRoutes onSmoothScroll={onSmoothScroll}/>
  );
};

export default ContentDesktop;
