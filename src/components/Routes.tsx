/*
#### Responsabilidad ####
- Define las rutas de la aplicación.

#### Componentes que renderiza ####
- Home, Services, UGC, Store, Gallery, About, Contact.

#### Lógica Clave ####
- Routes y Route: Define las rutas.
- Content: Dentro de las rutas, se renderiza Content, que es el que contiene las secciones.
*/


import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Content from './PageSections';
import Home from '../pages/Home';
import Services from '../pages/Services';
import UGC from '../pages/UGC';
import Store from '../pages/Store';
import Gallery from '../pages/Gallery';
import About from '../pages/About';
import Contact from '../pages/Contact';

interface RoutesProps {
  onSmoothScroll: (sectionId: string) => void;
}

const MyRoutes = ({ onSmoothScroll }: RoutesProps) => {
  return (
    <Routes>
      <Route path="/" element={<Home onSmoothScroll={onSmoothScroll} />} />
      <Route path="/services" element={<Services />} />
      <Route path="/ugc" element={<UGC />} />
      <Route path="/store" element={<Store />} />
      <Route path="/gallery" element={<Gallery />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/*" element={<Home onSmoothScroll={onSmoothScroll} />} />
    </Routes>
  );
};

export default MyRoutes;
