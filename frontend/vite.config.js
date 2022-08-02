import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'


export default defineConfig({


  base: '/static/',
  build: {
 
    outDir: '../whip_up_proj/static',

    emptyOutDir: true,
  },
  plugins: [react()]
})