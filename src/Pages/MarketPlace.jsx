
import React from "react";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { Link } from "react-router-dom";
import { statesOfIndia } from "../Location";

const MarketPlace = () => {
  return (
    <HelmetProvider>
      <Helmet>
        <title>Market Place - Chhaya Packaging</title>
        <meta name="description" content="Explore Chhaya Packaging's presence across all 28 states of India. Find our products and services in your state." />
        <meta name="keywords" content="Market Place, Chhaya Packaging, India, States, Packaging Services" />
      </Helmet>
      <div className="container mx-auto py-10 px-4">
        <h1 className="text-3xl font-bold mb-6 text-center">Market Place - 28 States of India</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {statesOfIndia.map((state) => (
            <Link
              key={state}
              to={`/market-place/${encodeURIComponent(state.toLowerCase().replace(/\s+/g, '-'))}`}
              className="bg-white shadow rounded p-4 text-center hover:bg-blue-50 transition block"
            >
              <h2 className="text-xl font-semibold">{state}</h2>
            </Link>
          ))}
        </div>
      </div>
    </HelmetProvider>
  );
};

export default MarketPlace;
