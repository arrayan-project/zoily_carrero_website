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
  build: {
    cssCodeSplit: true,
    rollupOptions: {
      output: {
        manualChunks(id: string) {
          if (id.includes("node_modules")) {
            // React and scheduler
            if (id.includes("react") && !id.includes("react-router-dom")) {
              return "vendor-react";
            }
            if (id.includes("scheduler")) {
              return "vendor-scheduler";
            }
            // React DOM
            if (id.includes("react-dom")) {
              return "vendor-react-dom";
            }
            // Routing libraries
            if (id.includes("react-router-dom") || id.includes("@remix-run/router")) {
              return "vendor-router";
            }
            // Head management
            if (id.includes("react-helmet-async")) {
              return "vendor-helmet";
            }
            // Firebase
            if (id.includes("firebase")) {
              return "vendor-firebase";
            }
            // Utility libraries
            if (id.includes("lodash") || id.includes("moment")) {
              return "vendor-utils";
            }
            // Default vendor chunk
            return "vendor";
          }
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
