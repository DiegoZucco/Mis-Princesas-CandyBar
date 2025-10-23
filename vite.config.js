import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: './https://github.com/DiegoZucco/Mis-Princesas-CandyBar', // <- necesario para despliegues locales o en servidores personalizados
})