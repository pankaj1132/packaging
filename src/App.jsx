import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ScrollToTop from './Components/ScrollToTop';
import BackToTop from './Components/BackToTop';
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';
import HomePage from './Pages/Home';
import AboutPage from './Pages/AboutPage';
import MarketPlace from './Pages/MarketPlace';
import Location from './Pages/LocationPage';
import Contact from './Pages/Contact';
import ServiceDetail from './Components/ServiceDetail';
import TopHeader from './Components/TopHeader';
import { HelmetProvider } from 'react-helmet-async';

function App() {
  return (
    <HelmetProvider>
    <Router>

      <ScrollToTop />
      <div className="App">
        <TopHeader />
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/services/:serviceName" element={<ServiceDetail />} />
          <Route path="/market-place" element={<MarketPlace />} />
          <Route path="/market-place/:location" element={<Location />} />
        </Routes>
        <Footer />
        <BackToTop />
      </div>
    </Router>
    </HelmetProvider>
  );
}

export default App;