/**
 * Skeleton de carga para la sección "Acerca de".
 * Muestra placeholders animados mientras se carga el contenido real.
 *
 * @component
 * @returns {JSX.Element}
 */
const AboutSkeleton = () => (
    <section id="about" className="min-h-[700px] bg-white">
      <div className="max-w-5xl mx-auto px-4 py-16 space-y-6">
        <div className="h-8 w-2/3 mx-auto bg-gray-300 rounded animate-pulse" />
        <div className="h-64 bg-gray-100 rounded animate-pulse" />
        <div className="h-6 w-1/3 mx-auto bg-gray-200 rounded animate-pulse" />
      </div>
    </section>
  );
  export default AboutSkeleton;