import React from "react";
import Home from "../pages/Home";
import Services from "../pages/Services";
import UGC from "../pages/UGC";
import Store from "../pages/Store";
import Gallery from "../pages/Gallery";
import About from "../pages/About";
import Contact from "../pages/Contact";
import { Routes, Route } from 'react-router-dom';

interface ContentDesktopProps {
  onSmoothScroll: (sectionId: string) => void;
}

const ContentDesktop = ({onSmoothScroll}: ContentDesktopProps) => {
  return (
    <Routes> {/*se agrega rutas para las paginas*/}
          <Route path="/" element={<Home onSmoothScroll={onSmoothScroll}/>} />
          <Route path="/services" element={<Services />} />
          <Route path="/ugc" element={<UGC />} />
          <Route path="/store" element={<Store />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
  );
};

export default ContentDesktop;
