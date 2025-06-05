/**
 * Skeleton visual para el Hero del Home.
 * Imita la estructura con título, subtítulo, botones y fondo.
 */
const HomeHeroSkeleton = () => (
  <div className="relative w-full min-h-[100dvh] flex items-center justify-center text-center animate-pulse bg-gray-100 overflow-hidden">
    {/* Simulación de imagen de fondo */}
    <div className="absolute inset-0 bg-gray-300 z-0" />

    {/* Contenido central simulado */}
    <div className="relative z-10 flex flex-col items-center md:items-end justify-center w-full h-full px-4 md:px-24 space-y-6">
      {/* Título y subtítulo */}
      <div className="h-10 w-2/3 bg-white/60 rounded" />
      <div className="h-6 w-1/2 bg-white/50 rounded" />

      {/* Botones falsos */}
      <div className="flex flex-col sm:flex-row gap-4 mt-10">
        <div className="h-10 w-40 bg-white/70 rounded" />
        <div className="h-10 w-40 bg-white/50 rounded" />
      </div>
    </div>

    {/* Flecha inferior */}
    <div className="absolute bottom-8 w-full flex justify-center z-10">
      <div className="h-6 w-6 border-b-2 border-r-2 border-white/60 rotate-45" />
    </div>
  </div>
);

export default HomeHeroSkeleton;
