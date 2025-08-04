import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'
import purgecssModule from '@fullhuman/postcss-purgecss'
import tailwindcss from 'tailwindcss'
import autoprefixer from 'autoprefixer'

const purgecss = purgecssModule.default

export default defineConfig({
  plugins: [
    vue(),
    purgecss({
      content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
      defaultExtractor: content => content.match(/[\w-/:]+(?<!:)/g) || []
    })
  ],
  css: {
    postcss: {
      plugins: [
        tailwindcss,
        autoprefixer,
      ],
    },
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
    },
  },
  base: '/',
  build: {
    outDir: 'dist',
    rollupOptions: {
      input: {
        main: path.resolve(__dirname, 'index.html'),
      },
    },
  }
})
