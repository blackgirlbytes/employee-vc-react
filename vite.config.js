import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import commonjs from '@rollup/plugin-commonjs';
import nodeResolve from '@rollup/plugin-node-resolve';

export default defineConfig({
  plugins: [
    react(),
    commonjs(),
    nodeResolve({
      browser: true,
    }),
    // other plugins...
  ],
  optimizeDeps: {
    include: ['@web5/credentials'],
  },
  build: {
    rollupOptions: {
      external: [], // any peer dependencies
    },
  },
});


