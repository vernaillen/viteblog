import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'
import App from './App.vue'
import { ViteBlogPlugin, ViteBlogOptions } from "@viteblog/vue-plugin"
import routes from '~pages'
import 'virtual:windi.css'
import './css/markdown.css'
import './css/main.css'
import './css/prose.css'

const app = createApp(App)
const router = createRouter({
  history: createWebHistory(),
  routes,
})
app.use(router)

const viteBlogOptions: ViteBlogOptions = {
  defaultLocale: 'nl',
  fallbackLocale: 'en'
}
app.use(ViteBlogPlugin, viteBlogOptions)
app.mount('#app')
