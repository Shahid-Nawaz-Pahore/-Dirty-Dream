import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import { VitePluginRadar } from 'vite-plugin-radar'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
    VitePluginRadar({
      // Google Analytics 4
      enableDev: false,
      analytics: {
        id: 'G-GGR9QHGFLK',  // Your GA4 Measurement ID
      },
    }),
  ],
})
