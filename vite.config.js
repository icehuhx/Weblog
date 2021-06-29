import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
        '@': path.resolve(__dirname, './src')
    }  
  },
  build: {
    outDir: 'dist',
    assetsRoot: path.resolve(__dirname, './dist'),
    assetsSubDirectory: 'static',
    assetsPublicPath: './'
  }
})
