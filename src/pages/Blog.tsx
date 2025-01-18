import React from 'react';

function Blog() {
  const posts = [
    {
      id: 1,
      title: "Spring Wedding Flower Trends",
      date: "March 15, 2024",
      image: "https://images.unsplash.com/photo-1522093007474-d86e9bf7ba6f?auto=format&fit=crop&w=800",
      excerpt: "Discover the latest floral trends that are making waves in spring weddings this year."
    },
    {
      id: 2,
      title: "Creating the Perfect Centerpiece",
      date: "March 10, 2024",
      image: "https://images.unsplash.com/photo-1526047932273-341f2a7631f9?auto=format&fit=crop&w=800",
      excerpt: "Learn our expert tips for designing stunning centerpieces that will wow your guests."
    },
    {
      id: 3,
      title: "Sustainable Floristry Practices",
      date: "March 5, 2024",
      image: "https://images.unsplash.com/photo-1519225421980-715cb0215aed?auto=format&fit=crop&w=800",
      excerpt: "Explore how we're making our floral designs more environmentally friendly."
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 py-16 md:py-24">
        <h1 className="text-4xl md:text-5xl font-montserrat text-center mb-12 tracking-wider text-gray-800">
          FLORAL INSIGHTS
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map(post => (
            <article key={post.id} className="bg-white rounded-lg shadow-sm overflow-hidden">
              <img
                src={post.image}
                alt={post.title}
                className="w-full h-64 object-cover"
              />
              <div className="p-6">
                <p className="text-sm text-gray-500 mb-2 font-montserrat">{post.date}</p>
                <h2 className="text-xl font-montserrat tracking-wide text-gray-800 mb-3">
                  {post.title}
                </h2>
                <p className="text-gray-600 mb-4">
                  {post.excerpt}
                </p>
                <button className="text-pink-600 font-montserrat text-sm tracking-wider hover:text-pink-700 transition-colors">
                  READ MORE →
                </button>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-16 text-center">
          <h2 className="text-2xl font-montserrat tracking-wide text-gray-700 mb-8">
            Subscribe to Our Newsletter
          </h2>
          <div className="max-w-md mx-auto">
            <div className="flex gap-4">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-200"
              />
              <button className="px-6 py-2 bg-pink-600 text-white rounded-lg hover:bg-pink-700 transition-colors font-montserrat tracking-wider">
                SUBSCRIBE
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Blog;