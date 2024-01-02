import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import commonjs from '@rollup/plugin-commonjs';
import { nodePolyfills } from 'vite-plugin-node-polyfills'

// ... other imports ...

export default defineConfig({
  plugins: [
    react(),
    commonjs(),
    nodePolyfills(),
    // other plugins...
  ],
  // ... other configurations ...
});
