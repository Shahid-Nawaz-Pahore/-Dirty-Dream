import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import { VitePluginRadar } from 'vite-plugin-radar'

// https://vite.dev/config/
export default defineConfig({
  server: {
    allowedHosts: ['gestural-britni-babyishly.ngrok-free.dev']
  },
  plugins: [
    react(),
    tailwindcss(),
    VitePluginRadar({
      // Google Analytics 4
      enableDev: false,
      analytics: {
        id: 'G-5H74G3JR3Z',  // Your GA4 Measurement ID
      },
    }),
  ],
})
