const AboutWhyUsSkeleton = () => (
  <section className="mt-24 lg:mt-32 py-16 px-4 md:px-6 lg:px-8 xl:px-16 2xl:px-24 animate-pulse">
    <div className="max-w-screen-lg mx-auto space-y-8">
      <div className="h-6 w-1/3 mx-auto bg-gray-300 rounded" />
      <ul className="space-y-4">
        {[...Array(4)].map((_, i) => (
          <li key={i} className="flex items-center space-x-4">
            <div className="h-6 w-6 bg-gray-300 rounded-full" />
            <div className="h-4 w-3/4 bg-gray-200 rounded" />
          </li>
        ))}
      </ul>
    </div>
  </section>
);

export default AboutWhyUsSkeleton;
