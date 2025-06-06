// vite.config.ts
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";
import { visualizer } from "rollup-plugin-visualizer";
import { imagetools } from "vite-imagetools";


export default defineConfig({
  plugins: [
    react(),
    imagetools(),
    visualizer({
      filename: "./dist/stats.html",
      template: "treemap",
      gzipSize: true,
      brotliSize: true,
      open: false,      
    }),
  ],
  build: {
    cssCodeSplit: true,
    rollupOptions: {
      output: {
        manualChunks(id: string) {
          if (id.includes("node_modules")) {
            // 1) React Router (por ruta exacta)
            if (
              id.includes("node_modules/react-router-dom/") ||
              id.includes("node_modules/@remix-run/router/")
            ) {
              return "vendor-router";
            }

            // 2) React Helmet Async (por ruta exacta)
            if (id.includes("node_modules/react-helmet-async/")) {
              return "vendor-helmet";
            }

            // 3) React (paquete “react” exacto, sin incluir react-dom)
            if (
              id.includes("node_modules/react/") &&
              !id.includes("node_modules/react-dom/")
            ) {
              return "vendor-react";
            }

            // 4) React-DOM (paquete “react-dom” exacto)
            if (id.includes("node_modules/react-dom/")) {
              return "vendor-react-dom";
            }

            // 5) Scheduler (dentro de React-DOM, para que React y React-DOM + scheduler queden juntos)
            if (id.includes("node_modules/scheduler/")) {
              return "vendor-react-dom";
            }

            // 6) Todo lo demás de node_modules va a “vendor”
            return "vendor";
          }
          // si no entra en node_modules, Vite genera chunks según su lógica por defecto
        },
      },
    },
    target: "es2017",
    minify: "esbuild",
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src"),
    },
  },
});
