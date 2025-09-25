/**
 * Componente que carga el Footer de forma diferida (lazy) cuando es visible en pantalla.
 * Utiliza un skeleton de carga mientras el Footer real se carga.
 *
 * @component
 * @returns {JSX.Element}
 */
import { lazy, Suspense } from "react";
import { useRevealOnScroll } from "../../hooks/useRevealOnScroll";

const Footer3 = lazy(() => import("./Footer3"));

const LazyFooter = () => {
  // Usa el hook con rootMargin personalizado
  const { ref, isVisible } = useRevealOnScroll({ rootMargin: "100px" });

  return (
    <div ref={ref}>
      {isVisible && (
        <Suspense
          fallback={
            <div className="bg-black text-white py-10 px-4">
              <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
                <div className="space-y-3">
                  <div className="h-6 w-3/4 bg-gray-600 rounded animate-pulse" />
                  <div className="h-4 w-full bg-gray-700 rounded animate-pulse" />
                  <div className="h-4 w-5/6 bg-gray-700 rounded animate-pulse" />
                </div>
                <div className="space-y-3">
                  <div className="h-6 w-2/3 bg-gray-600 rounded animate-pulse" />
                  <div className="h-4 w-full bg-gray-700 rounded animate-pulse" />
                  <div className="h-4 w-4/5 bg-gray-700 rounded animate-pulse" />
                </div>
                <div className="space-y-3">
                  <div className="h-6 w-2/3 bg-gray-600 rounded animate-pulse" />
                  <div className="h-4 w-full bg-gray-700 rounded animate-pulse" />
                  <div className="h-4 w-4/5 bg-gray-700 rounded animate-pulse" />
                </div>
                <div className="space-y-3">
                  <div className="h-6 w-2/3 bg-gray-600 rounded animate-pulse" />
                  <div className="h-4 w-5/6 bg-gray-700 rounded animate-pulse" />
                  <div className="h-4 w-full bg-gray-700 rounded animate-pulse" />
                </div>
              </div>
            </div>
          }
        >
          <Footer3 />
        </Suspense>
      )}
    </div>
  );
};

export default LazyFooter;