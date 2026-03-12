import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/CoE-Software-Development-Integration-Services-Organigrama-y-Asignacion/',
})
