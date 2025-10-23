import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  base: '/Mis-Princesas-CandyBar/', // <- necesario para GitHub Pages
  plugins: [react()],
  base: './https://github.com/DiegoZucco/Mis-Princesas-CandyBar', // <- necesario para despliegues locales o en servidores personalizados
})