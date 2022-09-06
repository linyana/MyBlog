import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { resolve } from 'path'
import mdPlugin  from 'vite-plugin-markdown';


// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    mdPlugin.plugin({
      mode: ['html'],
    })
  ],
  base: '/MyBlog/',
  resolve: {
    alias: {
      '@': resolve(__dirname, './src')
    }
  },

})
