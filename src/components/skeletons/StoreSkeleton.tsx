/**
 * Skeleton de carga para la sección "Tienda".
 * Muestra placeholders animados mientras se carga el contenido real.
 *
 * @component
 * @returns {JSX.Element}
 */
const StoreSkeleton = () => (
    <section id="store" className="min-h-[900px] bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 py-16 space-y-8">
        <div className="h-10 w-2/3 bg-gray-300 rounded mx-auto animate-pulse" />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="h-80 bg-gray-200 rounded-lg animate-pulse" />
          <div className="h-80 bg-gray-200 rounded-lg animate-pulse" />
        </div>
        <div className="h-10 w-1/2 bg-gray-300 rounded mx-auto animate-pulse" />
      </div>
    </section>
  );
  export default StoreSkeleton;