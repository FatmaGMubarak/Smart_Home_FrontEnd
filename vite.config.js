import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '');
  return {
    define: {
      'process.env.VITE_TEMPERATURE_KEY': JSON.stringify(env.VITE_TEMPERATURE_KEY),
      'process.env.VITE_Temperature_URL': JSON.stringify(env.VITE_Temperature_URL)
    },
    plugins: [react()],
  }
})