import React from 'react';

function Corporate() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 py-16 md:py-24">
        <h1 className="text-4xl md:text-5xl font-montserrat text-center mb-12 tracking-wider text-gray-800">
          CORPORATE & SOCIAL EVENTS
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 mb-16">
          <div>
            <img
              src="https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&w=800"
              alt="Corporate Event"
              className="w-full h-80 object-cover rounded-lg shadow-lg mb-8"
            />
            <h2 className="text-2xl font-montserrat tracking-wide text-gray-700 mb-4">
              Corporate Events
            </h2>
            <ul className="space-y-3 text-gray-600">
              <li>• Conferences and Conventions</li>
              <li>• Product Launches</li>
              <li>• Award Ceremonies</li>
              <li>• Holiday Parties</li>
              <li>• Corporate Galas</li>
            </ul>
          </div>

          <div>
            <img
              src="https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?auto=format&fit=crop&w=800"
              alt="Social Event"
              className="w-full h-80 object-cover rounded-lg shadow-lg mb-8"
            />
            <h2 className="text-2xl font-montserrat tracking-wide text-gray-700 mb-4">
              Social Events
            </h2>
            <ul className="space-y-3 text-gray-600">
              <li>• Birthday Celebrations</li>
              <li>• Anniversary Parties</li>
              <li>• Engagement Parties</li>
              <li>• Baby Showers</li>
              <li>• Graduation Ceremonies</li>
            </ul>
          </div>
        </div>

        <div className="bg-white p-8 rounded-lg shadow-sm">
          <h3 className="text-2xl font-montserrat tracking-wide text-gray-700 mb-6 text-center">
            Our Approach
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <h4 className="font-montserrat text-lg mb-3 text-gray-700">Consultation</h4>
              <p className="text-gray-600">
                We begin with a detailed consultation to understand your vision, brand, and event objectives.
              </p>
            </div>
            <div className="text-center">
              <h4 className="font-montserrat text-lg mb-3 text-gray-700">Design</h4>
              <p className="text-gray-600">
                Our team creates custom floral designs that align with your event's theme and atmosphere.
              </p>
            </div>
            <div className="text-center">
              <h4 className="font-montserrat text-lg mb-3 text-gray-700">Execution</h4>
              <p className="text-gray-600">
                We handle all aspects of setup and styling to ensure a flawless event experience.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Corporate;