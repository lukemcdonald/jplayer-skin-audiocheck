import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  root: 'src',
  base: '/jplayer-skin-audiocheck/',
  plugins: [
    tailwindcss(),
  ],
  build: {
    outDir: '../dist',
  },
})
