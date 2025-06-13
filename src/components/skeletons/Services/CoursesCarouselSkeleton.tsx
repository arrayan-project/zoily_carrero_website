/**
 * Skeleton visual para la sección del carrusel de cursos.
 * Imita fondo, overlay, textos grandes y botón flotante como el diseño real.
 */
const CoursesCarouselSkeleton = () => (
  <div className="relative w-full h-screen overflow-hidden animate-pulse">
    {/* Imagen de fondo gris simulada */}
    <div className="absolute inset-0 bg-gray-300 object-cover" />

    {/* Overlay oscuro semitransparente */}
    <div className="absolute inset-0 bg-black opacity-30 z-0" />

    {/* Contenido textual (nombre de curso y descripción) */}
    <div className="relative z-10 flex flex-col justify-center h-full w-full px-6 md:px-16 space-y-6">
      <div className="h-12 w-2/3 bg-white/60 rounded" />
      <div className="h-6 w-1/2 bg-white/50 rounded" />
    </div>

    {/* Botón modal simulado */}
    <div className="absolute top-2/3 md:top-1/2 right-4 md:right-8 z-10 transform -translate-y-1/2">
      <div className="w-16 h-16 md:w-24 md:h-24 bg-white/40 rounded-full" />
    </div>

    {/* Flechas de navegación izquierda y derecha */}
    <div className="absolute left-4 md:left-8 top-1/2 transform -translate-y-1/2 z-10">
      <div className="w-12 h-12 bg-white/40 rounded-full" />
    </div>
    <div className="absolute right-4 md:right-8 top-1/2 transform -translate-y-1/2 z-10">
      <div className="w-12 h-12 bg-white/40 rounded-full" />
    </div>
  </div>
);

export default CoursesCarouselSkeleton;
