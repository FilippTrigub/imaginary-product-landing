import { defineConfig } from 'vite';

export default defineConfig({
  root: '.',
  build: {
    outDir: 'dist'
  },
  server: {
    port: 3000,
    open: true
  },
  // Expose variables with NEXT_PUBLIC_ and VITE_ prefixes to client-side code
  envPrefix: ['NEXT_PUBLIC_', 'VITE_'],
  optimizeDeps: {
    include: []
  }
});