import { App, Plugin } from 'vue'
import MarkdownWrapper from './MarkdownWrapper.vue'
import 'virtual:windi.css'
//import 'virtual:viteblog.css'
// TODO find a way to load below css files via virtual:viteblog.css
import './css/markdown.css'
import './css/main.css'
import './css/prose.css'
import { debug } from './utils'

const ViteBlogPlugin: Plugin = {
  install(app: App) {
    debug('installing MarkdownWrapper')
    app.component('MarkdownWrapper', MarkdownWrapper)
  },
}

export default ViteBlogPlugin
