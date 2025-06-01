import React from "react";
import corporateEventImage from "/img/store/corporate-events.webp";
import socialEventImage from "/img/store/social-events.webp";
import useScrollToHash from "../hooks/useScrollToHash";
import { ErrorBoundary } from "react-error-boundary";
import ErrorComponent from "../components/common/ErrorComponent"; 

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
      loading="lazy"
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
  useScrollToHash();


const handleResetBoundary = () => {
    window.location.reload();
  };

  return (
    <ErrorBoundary FallbackComponent={ErrorComponent} onReset={handleResetBoundary}>
      <div id="store" className="min-h-[900px] bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 py-16 md:py-24">
          <h1 className="text-4xl md:text-5xl font-montserrat text-center mb-12 tracking-wider text-gray-800">
            CORPORATE & SOCIAL EVENTS
          </h1>

            <EventCategory
              title="Corporate Events"
              imageUrl={corporateEventImage}
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
              imageUrl={socialEventImage}
              items={[
                "Birthday Celebrations",
                "Anniversary Parties",
                "Engagement Parties",
                "Baby Showers",
                "Graduation Ceremonies",
              ]}
            />

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
    </ErrorBoundary>
  );
};

export default Store;
