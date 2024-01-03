import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'


export default defineConfig({
  resolve: {
    alias: {
      stream: 'stream-browserify',
      crypto: 'crypto-browserify',
    },
  },
  plugins: [react(), {
    name: 'replace-crypto',
    configureServer: ({ middlewares }) => {
      middlewares.use((req, res, next) => {
        if (req.path === '/node:crypto') {
          req.url = req.url.replace('/node:crypto', '')
        }
        next()
      })
    }
  }],
  define: {
    global: "globalThis",
  }
})