// src/components/common/LazyFooter.tsx
import { lazy, Suspense, useEffect, useRef, useState } from "react";

const Footer3 = lazy(() => import("./Footer3"));

const LazyFooter = () => {
  const [visible, setVisible] = useState(false);
  const ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
        }
      },
      { rootMargin: "100px" }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div ref={ref}>
      {visible && (
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
