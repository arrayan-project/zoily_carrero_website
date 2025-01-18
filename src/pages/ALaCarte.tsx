import React from 'react';

function ALaCarte() {
  const services = [
    {
      category: "Signature Bouquets",
      items: [
        { name: "Classic Romance", price: "$150", description: "A timeless arrangement of roses and peonies" },
        { name: "Garden Fresh", price: "$125", description: "Seasonal blooms in a natural, gathered style" },
        { name: "Luxury Collection", price: "$200", description: "Premium flowers in an artistic design" }
      ]
    },
    {
      category: "Event Packages",
      items: [
        { name: "Intimate Gathering", price: "$500", description: "Perfect for events up to 20 guests" },
        { name: "Medium Event", price: "$1,200", description: "Suitable for events up to 50 guests" },
        { name: "Grand Celebration", price: "$2,500", description: "Comprehensive package for 100+ guests" }
      ]
    },
    {
      category: "Individual Items",
      items: [
        { name: "Centerpiece", price: "from $85", description: "Custom designed table arrangements" },
        { name: "Boutonniere", price: "$25", description: "Elegant single flower accent" },
        { name: "Corsage", price: "$45", description: "Wrist or pin-on style available" }
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 py-16 md:py-24">
        <h1 className="text-4xl md:text-5xl font-montserrat text-center mb-12 tracking-wider text-gray-800">
          À LA CARTE SERVICES
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => (
            <div key={index} className="bg-white rounded-lg shadow-sm p-8">
              <h2 className="text-2xl font-montserrat tracking-wide text-gray-700 mb-6 text-center">
                {service.category}
              </h2>
              <div className="space-y-6">
                {service.items.map((item, itemIndex) => (
                  <div key={itemIndex} className="border-b border-gray-100 pb-4 last:border-0">
                    <div className="flex justify-between items-center mb-2">
                      <h3 className="font-montserrat text-lg text-gray-800">{item.name}</h3>
                      <span className="font-montserrat text-pink-600">{item.price}</span>
                    </div>
                    <p className="text-gray-600 text-sm">{item.description}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="bg-white rounded-lg shadow-sm p-8 text-center">
          <h2 className="text-2xl font-montserrat tracking-wide text-gray-700 mb-6">
            Custom Orders
          </h2>
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
            Don't see exactly what you're looking for? We specialize in creating custom floral designs
            tailored to your specific needs and preferences. Contact us to discuss your vision.
          </p>
          <button className="px-8 py-3 bg-pink-600 text-white rounded-lg hover:bg-pink-700 transition-colors font-montserrat tracking-wider">
            REQUEST CUSTOM QUOTE
          </button>
        </div>
      </div>
    </div>
  );
}

export default ALaCarte;