import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import { fileURLToPath } from 'url';
import { visualizer } from 'rollup-plugin-visualizer';

// https://vitejs.dev/config/
export default defineConfig({
  //base: "https://arrayan-project.github.io/zoily_carrero_website/", se debe habilitar para deployar en github
  plugins: [
    react(),
    visualizer({
      open: true,
      filename: 'dist/stats.html', // Nombre del archivo de reporte
      gzipSize: true,
      brotliSize: true,
    }),],
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
  resolve: {
    alias: {
      '@src': path.resolve(fileURLToPath(import.meta.url), '../../src'), // Definimos el alias @src
    },
  }
});
