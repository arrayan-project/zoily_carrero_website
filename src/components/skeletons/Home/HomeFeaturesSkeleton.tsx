/**
 * Skeleton para la sección de características destacadas en el Home.
 * Imitación precisa de la imagen lateral y grilla de 2x2 características.
 */
const HomeFeaturesSkeleton = () => (
  <section className="pt-1 md:px-1 md:mb-1 animate-pulse bg-white dark:bg-black">
    <div className="w-full mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 items-stretch gap-0 h-full">
        {/* Imagen (lado izquierdo) */}
        <div className="overflow-hidden w-full h-full">
          <div className="w-full h-full min-h-[250px] bg-gray-200 rounded-md shadow-md" />
        </div>

        {/* Grid de features */}
        <div className="grid grid-cols-1 md:grid-cols-2 h-full">
          {[...Array(4)].map((_, i) => (
            <div key={i} className="flex items-center justify-center px-6 min-h-[200px] md:min-h-full">
              <div className="space-y-3 text-center w-full">
                <div className="h-6 w-3/4 mx-auto bg-gray-300 rounded" />
                <div className="h-4 w-full mx-auto bg-gray-200 rounded" />
                <div className="h-4 w-5/6 mx-auto bg-gray-200 rounded" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default HomeFeaturesSkeleton;
