import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'
import { TanStackRouterVite } from '@tanstack/router-plugin/vite'

// https://vite.dev/config/
export default defineConfig({
  build: {
    outDir: 'dist', // Diretório de saída do build
    // Adicione outras configurações de build, se necessário
  },
  plugins: [
    TanStackRouterVite({ target: 'react', autoCodeSplitting: true }),
    react(),
  ],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src")
    }
  }
})

