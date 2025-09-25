/**
 * Botón flotante para volver al inicio de la página.
 * Se muestra solo cuando el usuario ha hecho scroll hacia abajo.
 *
 * @component
 * @returns {JSX.Element | null}
 */
import { useScrollVisibility } from '../../hooks/useScrollVisibility';

const ScrollToTopButton = () => {
  const isVisible = useScrollVisibility(300);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  if (!isVisible) return null;

  return (
    <button
      type="button"
      onClick={scrollToTop}
      className={`
        fixed bottom-[10px] right-[10px] w-[35px] h-[35px] rounded-[6px]
        sm:bottom-[15px] sm:right-[15px] sm:w-[30px] sm:h-[30px] sm:rounded-[8px]
        md:bottom-[20px] md:right-[20px] md:w-[40px] md:h-[40px] md:rounded-[10px]
        bg-[#b2443a] text-white border-none
        flex justify-center items-center
        cursor-pointer
        opacity-80 hover:opacity-100
        hover:bg-[#6d0006]
        hover:scale-110
        transition-opacity transition-transform duration-300 ease-linear
        z-[1000]
        shadow-[2px_2px_5px_rgba(0,0,0,0.2)]
      `}
      aria-label="Volver arriba"
    >
      ▲
    </button>
  );
};

export default ScrollToTopButton;
