import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  server: {
    host: '0.0.0.0', // This will make Vite listen on all available network interfaces
    port: 3000, // You can change this port number if needed
  },
})