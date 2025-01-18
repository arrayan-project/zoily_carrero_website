import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navigation from './components/Navigation';
import Home from './pages/Home';
import Weddings from './pages/Weddings';
import Corporate from './pages/Corporate';
import Blog from './pages/Blog';
import ALaCarte from './pages/ALaCarte';
import Contact from './pages/Contact';

function App() {
  return (
    <Router>
      <div className="relative min-h-screen">
        <Navigation />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/weddings" element={<Weddings />} />
          <Route path="/corporate" element={<Corporate />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/a-la-carte" element={<ALaCarte />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;