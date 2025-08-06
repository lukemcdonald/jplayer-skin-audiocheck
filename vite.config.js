import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  root: 'src',
  base: process.env.VITE_BASE_PATH || '/jplayer-skin-audiocheck/',
  plugins: [
    tailwindcss(),
  ],
  build: {
    outDir: '../dist',
  },
})
