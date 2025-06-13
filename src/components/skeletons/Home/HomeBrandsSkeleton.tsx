/**
 * Skeleton para la sección de marcas.
 * Imitación del carrusel horizontal con logos de 32x32, paddings y espaciado coherente.
 */
const HomeBrandsSkeleton = () => (
  <section className="py-16 px-1 animate-pulse bg-gray-100">
    <div className="container mx-auto space-y-8">
      {/* Título */}
      <div className="h-8 w-1/4 mx-auto bg-gray-300 rounded" />

      {/* Carrusel de marcas simuladas */}
      <div className="relative overflow-hidden w-full">
        <div className="flex gap-8 whitespace-nowrap px-4">
          {[...Array(8)].map((_, i) => (
            <div
              key={i}
              className="w-32 h-32 bg-gray-200 rounded-lg flex-shrink-0"
            />
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default HomeBrandsSkeleton;
