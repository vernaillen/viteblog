import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'
import App from './App.vue'
import ViteBlogPlugin from "@viteblog/vue-plugin"
import routes from '~pages'
import 'virtual:windi.css'
import './css/markdown.css'
import './css/main.css'
import './css/prose.css'

const router = createRouter({
  history: createWebHistory(),
  routes,
})
const app = createApp(App)

app.use(router)
app.use(ViteBlogPlugin)
app.mount('#app')
