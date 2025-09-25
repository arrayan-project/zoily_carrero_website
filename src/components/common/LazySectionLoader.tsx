/**
 * Componente para cargar secciones de forma diferida (lazy) usando Intersection Observer.
 * Renderiza el contenido solo cuando la sección entra en pantalla, mostrando un fallback mientras tanto.
 *
 * @component
 * @param {LazySectionLoaderProps} props - Props del loader, incluyendo el componente hijo, fallback, altura mínima, rootMargin y triggerOnce.
 * @returns {JSX.Element}
 */
import React, { Suspense, ReactNode } from 'react';
import { useInView } from 'react-intersection-observer';

interface LazySectionLoaderProps {
  children?: ReactNode; // El componente lazy que queremos cargar (ej: <Home />)
  fallback?: ReactNode; // Lo que se muestra mientras carga (opcional)
  minHeight?: string;   // Altura mínima para reservar espacio (importante para evitar saltos)
  rootMargin?: string;  // Margen para empezar a cargar antes de que sea visible (opcional)
  triggerOnce?: boolean;// Cargar solo la primera vez que sea visible (opcional, recomendado)
}

const LazySectionLoader: React.FC<LazySectionLoaderProps> = ({
  children,
  fallback = <div className="min-h-screen w-full flex items-center justify-center">Cargando...</div>, // Fallback por defecto
  minHeight = '10vh', // Una altura mínima razonable por defecto
  rootMargin = '200px 0px', // Empieza a cargar 200px antes de entrar en pantalla
  triggerOnce = true, // Carga solo una vez
}) => {
  const { ref, inView } = useInView({
    triggerOnce: triggerOnce,
    rootMargin: rootMargin,
  });

  return (
    // Este div es el que observamos. Le damos una altura mínima.
    <div ref={ref} style={{ minHeight: minHeight, width: '100%' }}>
      {/* Solo si 'inView' es true, renderizamos el Suspense y el componente hijo */}
      {inView ? (
        <Suspense fallback={fallback}>
          {children}
        </Suspense>
      ) : (
        // Mientras no está en vista, mostramos el fallback para ocupar espacio
        fallback
      )}
    </div>
  );
};

export default LazySectionLoader;
