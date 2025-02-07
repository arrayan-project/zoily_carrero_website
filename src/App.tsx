import React from 'react';
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navigation from './components/Navigation';
import Footer from './components/Footer';
import Home from './pages/Home';
import Services from './pages/Services';
import Store from './pages/Store';
import Gallery from './pages/Gallery';
import About from './pages/About';
import Contact from './pages/Contact';


function App() {
  return (
    <Router basename="/zoily_carrero_website/"> {/* Agrega basename aquí */}
      <div className="relative min-h-screen">
        <Navigation />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/store" element={<Store />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Footer />
      </div>
    </Router>
    
  );
}

export default App;

