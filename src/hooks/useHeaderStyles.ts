import { useTheme } from '../components/context/themeContext';

interface UseHeaderStylesProps {
  hasScrolled?: boolean;
  currentPathname?: string;
}

/**
 * Hook personalizado para gestionar los estilos dinámicos del header.
 * Calcula las clases de color para el texto, botones y líneas decorativas
 * basándose en el tema actual, el estado de scroll y la ruta de la página.
 *
 * @param {UseHeaderStylesProps} props - Propiedades para determinar los estilos.
 * @returns Un objeto con las clases CSS calculadas para los elementos del header.
 */
export function useHeaderStyles({ hasScrolled, currentPathname }: UseHeaderStylesProps) {
  const { theme } = useTheme();

  // Rutas que fuerzan un menú con texto blanco cuando no se ha hecho scroll
  const whiteMenuRoutes = ["/home", "/makeup", "/courses", "/about"];
  const isWhiteMenuRoute = currentPathname ? whiteMenuRoutes.includes(currentPathname) : false;

  // El texto es blanco si el tema es oscuro, o si estamos en una ruta de menú blanco sin haber hecho scroll.
  const useWhiteText = theme === 'dark' || (!hasScrolled && isWhiteMenuRoute);

  const navBarMenuButtonColor = useWhiteText ? 'text-white' : 'text-black';
  const decorativeLineColorClass = useWhiteText ? 'bg-white' : 'bg-black';
  const headerButtonClasses = useWhiteText
    ? 'text-white border-white hover:bg-white hover:text-black'
    : 'text-black border-black hover:bg-black hover:text-white';

  return { navBarMenuButtonColor, decorativeLineColorClass, headerButtonClasses };
}