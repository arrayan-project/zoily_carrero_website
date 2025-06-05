const HomeBrandsSkeleton = () => (
  <section className="py-16 px-4 animate-pulse bg-gray-100">
    <div className="container mx-auto text-center space-y-8">
      <div className="h-8 w-1/4 mx-auto bg-gray-300 rounded" />
      <div className="flex gap-8 justify-center overflow-hidden">
        {[...Array(6)].map((_, i) => (
          <div key={i} className="w-32 h-32 bg-gray-200 rounded-lg" />
        ))}
      </div>
    </div>
  </section>
);

export default HomeBrandsSkeleton;
