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
    WindiCSS(),
    ViteBlogFramework({
      test: false,
      extentions: ['vue', 'md'],
      include: [/\.vue$/, /\.md$/],
    }),
    Inspect(),
  ],
})

export default config
