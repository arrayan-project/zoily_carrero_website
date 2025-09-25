/**
 * Skeleton para la sección de enlaces destacados del Home.
 * Simula títulos, subtítulos y el layout visual asimétrico en desktop + móvil.
 */
const HomeLinksSkeleton = () => (
  <section className="mb-16 md:mb-1 animate-pulse bg-white dark:bg-black">
    <div className="container mx-auto px-4 space-y-6 text-center">
      {/* Títulos */}
      <div className="h-8 w-1/3 mx-auto bg-gray-300 rounded" />
      <div className="h-5 w-2/3 mx-auto bg-gray-200 rounded" />
      <div className="h-4 w-1/2 mx-auto bg-gray-200 rounded" />
    </div>

    {/* Desktop layout */}
    <div className="hidden md:grid md:grid-cols-2 md:h-[600px] lg:h-[1000px] mt-10">
      {/* Imagen grande izquierda */}
      <div className="w-full h-full bg-gray-200 rounded-md" />

      {/* Dos imágenes apiladas derecha */}
      <div className="flex flex-col h-full">
        <div className="h-1/2 w-full bg-gray-200 rounded-md mb-4" />
        <div className="h-1/2 w-full bg-gray-200 rounded-md" />
      </div>
    </div>

    {/* Mobile layout */}
    <div className="md:hidden grid grid-cols-1 gap-6 px-4 mt-10">
      {[...Array(3)].map((_, i) => (
        <div key={i} className="w-full h-[60vw] sm:h-[50vw] bg-gray-200 rounded-md" />
      ))}
    </div>
  </section>
);

export default HomeLinksSkeleton;
