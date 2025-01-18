import React from 'react';

function Weddings() {
  return (
    <div className="min-h-screen bg-pink-50">
      <div className="max-w-6xl mx-auto px-4 py-16 md:py-24">
        <h1 className="text-4xl md:text-5xl font-montserrat text-center mb-12 tracking-wider text-gray-800">
          WEDDING FLORALS
        </h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
          <div className="space-y-6">
            <img
              src="https://images.unsplash.com/photo-1519225421980-715cb0215aed?auto=format&fit=crop&w=800"
              alt="Wedding Bouquet"
              className="w-full h-96 object-cover rounded-lg shadow-lg"
            />
            <h2 className="text-2xl font-montserrat tracking-wide text-gray-700">Bridal Bouquets</h2>
            <p className="text-gray-600 leading-relaxed">
              Each bouquet is thoughtfully designed to complement your wedding style and color palette,
              creating an unforgettable statement piece for your special day.
            </p>
          </div>
          
          <div className="space-y-6">
            <img
              src="https://images.unsplash.com/photo-1522093007474-d86e9bf7ba6f?auto=format&fit=crop&w=800"
              alt="Wedding Centerpiece"
              className="w-full h-96 object-cover rounded-lg shadow-lg"
            />
            <h2 className="text-2xl font-montserrat tracking-wide text-gray-700">Reception Designs</h2>
            <p className="text-gray-600 leading-relaxed">
              From elegant centerpieces to dramatic installations, we transform your reception space
              into a breathtaking floral paradise.
            </p>
          </div>
        </div>

        <div className="text-center space-y-8">
          <h3 className="text-3xl font-montserrat tracking-wide text-gray-700">Our Services Include</h3>
          <ul className="grid grid-cols-1 md:grid-cols-3 gap-6 text-gray-600">
            <li className="p-6 bg-white rounded-lg shadow-sm">
              <h4 className="font-montserrat mb-3">Bridal Party Flowers</h4>
              <p>Bouquets, boutonnieres, and corsages</p>
            </li>
            <li className="p-6 bg-white rounded-lg shadow-sm">
              <h4 className="font-montserrat mb-3">Ceremony Décor</h4>
              <p>Arches, aisle designs, and altar arrangements</p>
            </li>
            <li className="p-6 bg-white rounded-lg shadow-sm">
              <h4 className="font-montserrat mb-3">Reception Flowers</h4>
              <p>Centerpieces, cake flowers, and installations</p>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Weddings;