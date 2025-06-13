
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
  positionVariant?: 'default' | 'scrollTopReplacement';
}

const FloatingContactButton = forwardRef<HTMLButtonElement, FloatingContactButtonProps>(
  ({ onClick, positionVariant = 'default' }, ref) => {
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

    const baseContainerClasses = "fixed z-[1000] flex items-center justify-center";
    let positionSpecificClasses = '';
    if (positionVariant === 'scrollTopReplacement') {
      positionSpecificClasses = "bottom-[10px] right-[10px] sm:bottom-[15px] sm:right-[15px] md:bottom-[20px] md:right-[20px]";
    } else {
      positionSpecificClasses = "bottom-[75px] right-[10px] sm:bottom-[90px] md:bottom-[90px] md:right-[20px]";
    }

    return (
      <div className={`${baseContainerClasses} ${positionSpecificClasses}`}>
        <button
          ref={ref}
          type="button"
          onClick={handleClick}
          aria-label="Abrir modal de contacto"
          aria-haspopup="dialog"
          className={`
            flex justify-center items-center
            bg-[pink] text-white
            border-none cursor-pointer
            shadow-[0px_4px_10px_rgba(0,0,0,0.2)]
            transition duration-300 ease-in-out
            hover:bg-[#ff4081]
            animate-pulse
            w-[35px] h-[35px] rounded-[6px]
            sm:w-[40px] sm:h-[40px] sm:rounded-full
            md:w-[40px] md:h-[40px]
          `}
        >
          <Mail
            className={`text-white w-[15px] h-[15px] md:w-[15px] md:h-[15px]`}
          />
        </button>
      </div>
    );
  }
);

export default FloatingContactButton;