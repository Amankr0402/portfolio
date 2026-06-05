import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000, // Serve frontend on port 3000 locally
    host: true, // Listen on all local interfaces (great for mobile preview testing)
  }
})
