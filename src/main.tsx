/**
 * Punto de entrada principal de la aplicación React.
 * Configura el proveedor de tema, enrutamiento, Helmet y carga asíncrona del AppShell.
 *
 * @file main.tsx
 */
import React, { lazy, Suspense } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import { ThemeProvider } from './components/context/themeContext';
import './GlobalStyles.css';

const AppShell = lazy(() => import('./components/layout/AppShell'));

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
