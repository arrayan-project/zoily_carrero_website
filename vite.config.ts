import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import { visualizer } from 'rollup-plugin-visualizer';
import { imagetools } from 'vite-imagetools';
import compression from 'vite-plugin-compression';
import prerender from '@prerenderer/rollup-plugin';

export default defineConfig({
  plugins: [
    react(),
    imagetools(),
    compression(),
    visualizer({
      filename: './dist/stats.html',
      template: 'treemap',
      gzipSize: true,
      brotliSize: true,
      open: false,
    }),
    // Brotli secundario (opcional)
    compression({ algorithm: 'brotliCompress', ext: '.br' }),
    // Prerender de rutas
    prerender({
      routes: ['/', '/services', '/courses', '/gallery', '/ugc', '/about', '/contact'],
      renderer: '@prerenderer/renderer-puppeteer',
      rendererOptions: {
        renderAfterDocumentEvent: 'render-event',
        launchOptions: { args: ['--no-sandbox'] }
      }
    }),
  ],
  build: {
    cssCodeSplit: true,
    rollupOptions: {
      output: {
        manualChunks(id: string) {
          if (id.includes('node_modules')) {
            if (id.includes('firebase')) return 'vendor-firebase';
            if (id.includes('react-helmet-async')) return 'vendor-helmet';
            if (/lodash|moment/.test(id)) return 'vendor-utils';
            return 'vendor';
          }
        }
      }
    },
    target: 'es2017',
    minify: 'esbuild'
  },
  resolve: {
    alias: { '@': path.resolve(__dirname, 'src') }
  }
});
