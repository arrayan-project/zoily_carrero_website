// src/utils/LazyHelmet.tsx
import React from "react";

// Carga dinámica de HelmetProvider
const LazyHelmetProvider = React.lazy(async () => {
  const mod = await import("react-helmet-async");
  return { default: mod.HelmetProvider };
});

// Carga dinámica de Helmet
const LazyHelmet = React.lazy(async () => {
  const mod = await import("react-helmet-async");
  return { default: mod.Helmet };
});

export { LazyHelmetProvider, LazyHelmet };
