import { App, Plugin } from 'vue'
import LanguageSwitcher from './components/LanguageSwitcher.vue'
import MarkdownWrapper from './components/MarkdownWrapper.vue'
import 'virtual:windi.css'
//import 'virtual:viteblog.css'
// TODO find a way to load below css files via virtual:viteblog.css
import './css/markdown.css'
import './css/main.css'
import './css/prose.css'
//import { debug } from './utils'
import { ViteBlogOptions } from './types'
import { createI18nInstance } from './i18n'
import { createPinia } from 'pinia'
import { NavigationItems } from './navigation'
import { viteBlogInitRouting } from './routing'

const ViteBlogPlugin: Plugin = {
  install(app: App, options: ViteBlogOptions) {
    console.log('installing ViteBlogPlugin')
    console.log(options)

    const pinia = createPinia()
    const i18nInstance = createI18nInstance(options)

    app.use(pinia)
    app.use(i18nInstance)
    app.component('MarkdownWrapper', MarkdownWrapper)
    app.component('LanguageSwitcher', LanguageSwitcher)
  },
}

export { ViteBlogPlugin, ViteBlogOptions, NavigationItems, viteBlogInitRouting }