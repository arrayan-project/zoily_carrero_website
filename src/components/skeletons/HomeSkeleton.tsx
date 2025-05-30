/**
 * Skeleton de carga para la sección "Home".
 * Muestra placeholders animados mientras se carga el contenido real.
 *
 * @component
 * @returns {JSX.Element}
 */
const HomeSkeleton = () => (
    <section id="home" className="min-h-[700px] bg-white">
      <div className="max-w-6xl mx-auto px-4 py-16 space-y-6">
        <div className="h-10 bg-gray-300 rounded w-2/3 mx-auto animate-pulse" />
        <div className="h-64 bg-gray-100 rounded animate-pulse" />
        <div className="h-10 w-1/3 mx-auto bg-gray-200 rounded animate-pulse" />
      </div>
    </section>
  );
  export default HomeSkeleton;