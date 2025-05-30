
/**
 * Botón flotante para abrir el modal de contacto.
 * Incluye animación y manejo de errores al intentar abrir el contacto.
 *
 * @component
 * @param {FloatingContactButtonProps} props - Props del botón flotante.
 * @returns {JSX.Element}
 */
import { useState, useCallback, forwardRef } from 'react';
import { Mail } from "../../assets/icons";
import './FloatingContactButton.css';

interface FloatingContactButtonProps {
  onClick: () => void;
}

const FloatingContactButton = forwardRef<HTMLButtonElement, FloatingContactButtonProps>(
  ({ onClick }, ref) => {
    const [error, setError] = useState<string | null>(null);

    const handleClick = useCallback(() => {
      try {
        onClick();
      } catch (err) {
        console.error('FloatingContactButton error:', err);
        setError('No se pudo abrir el contacto.');
      }
    }, [onClick]);

    if (error) {
      return (
        <div
          role="alert"
          className="fixed inset-0 flex items-center justify-center bg-red-600 text-white z-[1100] p-4"
        >
          <p>{error}</p>
        </div>
      );
    }

    return (
      <div
        className={`fixed z-[1000] flex items-center justify-center bottom-[75px] right-[10px] sm:bottom-[90px] md:bottom-[100px] md:right-[20px]`}
      >
        <button
          ref={ref}
          type="button"
          onClick={handleClick}
          aria-label="Abrir modal de contacto"
          className={`
            flex justify-center items-center
            bg-[pink] text-white
            border-none cursor-pointer
            shadow-[0px_4px_10px_rgba(0,0,0,0.2)]
            transition duration-300 ease-in-out
            hover:bg-[#ff4081]
            animate-pulse
            w-[40px] h-[40px] rounded-[6px]
            sm:w-[50px] sm:h-[50px] sm:rounded-full
            md:w-[60px] md:h-[60px]
          `}
        >
          <Mail
            className={`text-white w-[20px] h-[20px] md:w-[30px] md:h-[30px]`}
          />
        </button>
      </div>
    );
  }
);

export default FloatingContactButton;