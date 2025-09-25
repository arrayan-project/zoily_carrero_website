/**
 * Skeleton visual para el Hero del Home.
 * Imitación precisa del fondo, overlay y estructura central.
 */
const HomeHeroSkeleton = () => (
  <div className="relative w-full h-[95vh] overflow-hidden animate-pulse">
    {/* Imagen de fondo simulada */}
    <div className="absolute inset-0 w-full h-full bg-gray-300 object-cover" />

    {/* Overlay oscuro */}
    <div className="absolute inset-0 w-full h-full bg-black opacity-40" />

    {/* Contenido central (simulación de títulos y botones) */}
    <div className="relative z-10 flex flex-col items-center md:items-end justify-center text-center h-full w-full px-4 md:px-24 space-y-6">
      {/* Título */}
      <div className="h-10 w-2/3 bg-white/60 rounded" />
      {/* Subtítulo */}
      <div className="h-6 w-1/2 bg-white/50 rounded" />

      {/* Botones falsos */}
      <div className="flex flex-col sm:flex-row gap-4 mt-10">
        <div className="h-10 w-40 bg-white/70 rounded" />
        <div className="h-10 w-40 bg-white/50 rounded" />
      </div>
    </div>

    {/* Flecha decorativa inferior */}
    <div className="absolute bottom-8 w-full flex justify-center z-10">
      <div className="h-6 w-6 border-b-2 border-r-2 border-white/60 rotate-45" />
    </div>
  </div>
);

export default HomeHeroSkeleton;
