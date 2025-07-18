
import React from "react";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { useParams } from "react-router-dom";
import { statesOfIndia } from "../Location";


const Location = () => {
  const { location } = useParams();
  // Convert route param back to state name
  // Normalize both location param and state names for robust matching
  const normalize = (str) => encodeURIComponent(str.toLowerCase().replace(/\s+/g, '-'));
  const stateName = statesOfIndia.find(
    (state) => normalize(state) === normalize(location || '')
  );

  if (!stateName) {
    return (
      <HelmetProvider>
        <Helmet>
          <title>Location Not Found - Chhaya Packaging</title>
          <meta name="robots" content="noindex" />
        </Helmet>
        <div className="container mx-auto py-10 px-4">
          <h1 className="text-3xl font-bold mb-6 text-center text-red-600">Location Not Found</h1>
          <p className="text-center text-lg">The requested location does not exist.</p>
        </div>
      </HelmetProvider>
    );
  }

  return (
    <HelmetProvider>
      <Helmet>
        <title>{stateName} - Market Place | Chhaya Packaging</title>
        <meta name="description" content={`Find Chhaya Packaging's products and services in ${stateName}.`} />
        <meta name="keywords" content={`Market Place, Chhaya Packaging, ${stateName}, Packaging Services`} />
      </Helmet>
      <div className="container mx-auto py-10 px-4">
        <h1 className="text-3xl font-bold mb-6 text-center">Chhaya Packaging in {stateName}</h1>
        <div className="mb-8 text-center">
          <img src="/src/assets/banner1.jpg" alt="Chhaya Packaging Banner" className="mx-auto rounded shadow mb-4 max-h-60" />
          <p className="text-lg">Welcome to our {stateName} location page. We provide high-quality packaging solutions tailored for businesses and industries in {stateName}.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
          <div className="bg-white shadow rounded p-6">
            <h2 className="text-xl font-semibold mb-2">Our Services in {stateName}</h2>
            <ul className="list-disc list-inside text-left">
              <li>Corrugated Box Manufacturing</li>
              <li>Custom Packaging Design</li>
              <li>Eco-friendly Packaging Solutions</li>
              <li>Bulk Order Fulfillment</li>
              <li>Fast Delivery Across {stateName}</li>
            </ul>
          </div>
          <div className="bg-white shadow rounded p-6">
            <h2 className="text-xl font-semibold mb-2">Contact Us ({stateName})</h2>
            <p className="mb-1">Phone: <a href="tel:+911234567890" className="text-blue-600 hover:underline">+91 12345 67890</a></p>
            <p className="mb-1">Email: <a href="mailto:info@chhayapackaging.com" className="text-blue-600 hover:underline">info@chhayapackaging.com</a></p>
            <p>Address: 123, Industrial Area, {stateName}, India</p>
          </div>
        </div>
        <div className="bg-white shadow rounded p-6 text-center">
          <h2 className="text-xl font-semibold mb-2">Why Choose Chhaya Packaging in {stateName}?</h2>
          <ul className="list-disc list-inside inline-block text-left">
            <li>Trusted by 500+ businesses in {stateName}</li>
            <li>ISO Certified Quality</li>
            <li>Competitive Pricing</li>
            <li>Dedicated Local Support</li>
          </ul>
        </div>
      </div>
    </HelmetProvider>
  );
};

export default Location;
