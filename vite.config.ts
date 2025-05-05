// vite.config.ts
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";
import { visualizer } from "rollup-plugin-visualizer";

export default defineConfig({
  plugins: [
    react(),
    visualizer({
      filename: "./dist/stats.html",
      template: "treemap",
      gzipSize: true,
      brotliSize: true,
      open: false,
    }),
  ],
  define: {
    "process.env.NODE_ENV": '"production"',
  },
  build: {
    minify: "esbuild",
    target: "es2015",
    sourcemap: false,
    outDir: "dist",
    chunkSizeWarningLimit: 500,
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes('node_modules')) {
            if (id.includes('/pages/Home'))   
              return 'home';
            if (id.includes('/pages/Services')) 
              return 'services';
            if (id.includes('/pages/Gallery')) 
             return 'gallery';
            if (id.includes('/pages/UGC'))   
              return 'ugc';
            if (id.includes('/pages/Store')) 
              return 'store';
            if (id.includes('/pages/About'))  
              return 'about';
            if (id.includes('/pages/Contact'))  
              return 'contact';
            if (id.includes('react-router-dom') || id.includes('react-helmet-async')) {
              return 'router'; // Navegación y SEO
            }
            if (id.includes('lucide-react')) {
              return 'lucide'; // Iconos
            }
            if (id.includes('react-google-recaptcha')) {	
              return 'recaptcha'; // Google reCAPTCHA
            }
            if (id.includes('react')) {
              return 'react'; // React + ReactDOM
            }
            if (id.includes('firebase')) {
              return 'firebase'; // Firebase si en el futuro lo usas
            }
            if (id.includes('tailwindcss') || id.includes('autoprefixer') || id.includes('postcss')) {
              return 'styles'; // Herramientas de CSS
            }
            // Todas las demás librerías se agrupan en "vendor"
            return 'vendor';
          }
        }
      },
    },
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src"),
    },
  },
});
