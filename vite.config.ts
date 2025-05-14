import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
  // Configure for GitHub Pages deployment
  base: './', // Sets the base path for all assets
  build: {
    outDir: 'dist', // Default directory
    // Generate the necessary files for GitHub Pages with SPA support
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ['react', 'react-dom', 'react-confetti'],
          ui: ['lucide-react']
        }
      }
    }
  }
});