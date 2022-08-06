import { defineConfig } from 'vite'
import Vue from '@vitejs/plugin-vue'
import Inspect from 'vite-plugin-inspect'
import ViteBlogFramework from '@viteblog/vite-plugin'
import WindiCSS from 'vite-plugin-windicss'

const config = defineConfig({
  plugins: [
    Vue({
      include: [/\.vue$/, /\.md$/],
    }),
    ViteBlogFramework({
      test: false,
      extentions: ['vue', 'md'],
      include: [/\.vue$/, /\.md$/],
    }),
    WindiCSS(),
    Inspect(),
  ],
})

export default config
