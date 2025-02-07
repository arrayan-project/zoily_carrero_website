import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  base: "https://arrayan-project.github.io/zoily_carrero_website/",
  plugins: [react()],
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
});
