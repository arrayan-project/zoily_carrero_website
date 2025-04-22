import React, { useState } from "react";
import { Helmet } from 'react-helmet-async';

interface EventCategoryProps {
  title: string;
  imageUrl: string;
  items: string[];
}

const EventCategory: React.FC<EventCategoryProps> = ({ title, imageUrl, items }) => (
  <div>
    <img
      src={imageUrl}
      alt={`${title} Image`}
      className="w-full h-80 object-cover rounded-lg shadow-lg mb-8"
    />
    <h2 className="text-2xl font-montserrat tracking-wide text-gray-700 mb-4">{title}</h2>
    <ul className="space-y-3 text-gray-600">
      {items.map((item, index) => (
        <li key={index}>• {item}</li>
      ))}
    </ul>
  </div>
);

const Store = () => {
  const [error, setError] = useState<string | null>(null);

  try {
    return (
      <div id="store" className="min-h-screen bg-gray-50">
        <Helmet>
          <title>Maquillaje para Eventos Corporativos y Sociales | Zoily Carrero</title>
          <meta
            name="description"
            content="Realza tu evento corporativo o social con maquillaje profesional. Zoily Carrero ofrece servicios para conferencias, lanzamientos, galas, fiestas y más."
          />
        </Helmet>
        <div className="max-w-6xl mx-auto px-4 py-16 md:py-24">
          <h1 className="text-4xl md:text-5xl font-montserrat text-center mb-12 tracking-wider text-gray-800">
            CORPORATE & SOCIAL EVENTS
          </h1>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 mb-16">
            <EventCategory
              title="Corporate Events"
              imageUrl="https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&w=800"
              items={[
                "Conferences and Conventions",
                "Product Launches",
                "Award Ceremonies",
                "Holiday Parties",
                "Corporate Galas",
              ]}
            />
            <EventCategory
              title="Social Events"
              imageUrl="https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?auto=format&fit=crop&w=800"
              items={[
                "Birthday Celebrations",
                "Anniversary Parties",
                "Engagement Parties",
                "Baby Showers",
                "Graduation Ceremonies",
              ]}
            />
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
  } catch (err) {
    setError("An error occurred while loading the store.");
    console.error("Error in Store component:", err);
    return <div className="text-center text-red-500">{error}</div>;
  }
};

export default Store;
