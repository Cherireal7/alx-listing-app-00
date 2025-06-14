import React, { useState } from 'react';
import { PROPERTYLISTINGSAMPLE } from '@/constants';
import Pill from '@/components/Pill';
import type { PropertyProps } from '@/interfaces';

const FILTERS = ['Top Villa', 'Self Checkin', 'Luxury', 'Pet Friendly', 'Free Parking'];

const IndexPage: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState<string | null>(null);

  // Filter properties based on active filter
  const filteredProperties = activeFilter
    ? PROPERTYLISTINGSAMPLE.filter((property) =>
        property.category.some((cat) => cat.toLowerCase().includes(activeFilter.toLowerCase()))
      )
    : PROPERTYLISTINGSAMPLE;

  return (
    <>
      {/* Hero Section */}
      <section
        className="relative bg-cover bg-center h-64 flex flex-col justify-center items-center text-white"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1470&q=80')`,
        }}
      >
        <h1 className="text-4xl font-bold mb-2">Find your favorite place here!</h1>
        <p className="text-lg max-w-xl text-center">
          The best prices for over 2 million properties worldwide.
        </p>
      </section>

      {/* Filter Pills */}
      <section className="py-6 flex flex-wrap gap-4 justify-center bg-gray-50">
        {FILTERS.map((filter) => (
          <Pill
            key={filter}
            label={filter}
            selected={activeFilter === filter}
            onClick={() => setActiveFilter(activeFilter === filter ? null : filter)}
          />
        ))}
      </section>

      {/* Listing Section */}
      <section className="px-4 py-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
        {filteredProperties.map((property: PropertyProps, idx: number) => (
          <div key={idx} className="border rounded-lg overflow-hidden shadow hover:shadow-lg transition">
            <img
              src={property.image}
              alt={property.name}
              className="w-full h-48 object-cover"
              loading="lazy"
            />
            <div className="p-4">
              <h2 className="text-xl font-semibold">{property.name}</h2>
              <p className="text-gray-500 text-sm mb-2">
                {property.address.city}, {property.address.state}
              </p>
              <div className="flex justify-between items-center">
                <span className="text-blue-600 font-bold">${property.price} / night</span>
                <span className="text-yellow-500 font-semibold">⭐ {property.rating.toFixed(2)}</span>
              </div>
            </div>
          </div>
        ))}
      </section>
    </>
  );
};

export default IndexPage;
