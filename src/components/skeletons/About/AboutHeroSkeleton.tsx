/**
 * Skeleton de carga para la sección Hero de la página "Sobre mí".
 * Muestra placeholders de fondo y texto simulando la cabecera principal.
 *
 * @component
 * @returns {JSX.Element}
 */
const AboutHeroSkeleton = () => (
  <div className="relative w-full h-screen flex items-center justify-center text-center animate-pulse bg-gray-100">
    {/* Simulación de imagen de fondo */}
    <div className="absolute inset-0 bg-gray-300 object-cover" />

    {/* Placeholder de contenido del Hero */}
    <div className="relative z-10 flex flex-col md:items-start justify-center w-full h-full md:text-left px-4 sm:px-6 md:px-12 lg:px-64 space-y-4">
      <div className="h-10 w-2/3 bg-white/60 rounded mx-auto md:mx-0" />
      <div className="h-6 w-1/2 bg-white/50 rounded mx-auto md:mx-0" />
    </div>
  </div>
);

export default AboutHeroSkeleton;
