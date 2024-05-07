import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vitejs.dev/config/
export default defineConfig({
  base: '/react-redux-example/',
  server: {
    port: 3000
  },
  plugins: [react()],
})
