import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path';
import purgecssModule from '@fullhuman/postcss-purgecss'

const purgecss = purgecssModule.default

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(),
    purgecss({
      content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
      defaultExtractor: content => content.match(/[\w-/:]+(?<!:)/g) || []
    })
  ],
  css: {
    postcss: {
      plugins: [
        require('tailwindcss'),
        require('autoprefixer'),
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
    outDir: 'dist', // natijaviy build uchun chiqish papkasi
    rollupOptions: {
      input: {
        main: path.resolve(__dirname, 'index.html'), // kirish nuqtasi
      },
    },
  }
})