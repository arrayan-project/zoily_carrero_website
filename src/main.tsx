// src/main.tsx

/**
 * Punto de entrada principal de la aplicación React.
 * Configura el proveedor de tema, enrutamiento, Helmet y carga asíncrona del AppShell.
 * Además registra el Service Worker para el fallback offline.
 */

import React, { lazy, Suspense } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import { ThemeProvider } from './components/context/themeContext';
import './GlobalStyles.css';

const AppShell = lazy(() => import('./components/layout/AppShell'));

// Renderizamos la aplicación
createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <HelmetProvider>
      <ThemeProvider>
        <BrowserRouter>
          <Suspense fallback={null}>
            <AppShell />
          </Suspense>
        </BrowserRouter>
      </ThemeProvider>
    </HelmetProvider>
  </React.StrictMode>
);

// Registro del Service Worker para fallback offline
if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker
      .register('/sw.js')
      .then(reg => {
        console.log('Service Worker registrado con scope:', reg.scope);
      })
      .catch(err => {
        console.error('Error al registrar Service Worker:', err);
      });
  });
}
