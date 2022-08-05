import path from 'path'
import type { Plugin } from 'vite'
import Pages from 'vite-plugin-pages'
import Markdown from 'vite-plugin-vue-markdown'
import VueI18n from '@intlify/vite-plugin-vue-i18n'
import Components from 'unplugin-vue-components/vite'
import AutoImport from 'unplugin-auto-import/vite'
import type { Options } from './types'
import ViteBlogPlugin from './plugin'
import { debug } from './utils'

function ViteBlogFramework(options: Options): Plugin[] {
  debug('loading ViteBlogFramework')
  debug(options)
  return [
    Markdown({
      markdownItOptions: {
        html: true,
        linkify: true,
        typographer: true,
      },
      wrapperComponent: 'markdown-wrapper',
      /* markdownItSetup(md) {
        md.use(Anchor)
        md.use(Prism)
        md.use(LinkAttributes, {
          matcher: (link: string) => /^https?:\/\//.test(link),
          attrs: {
            target: '_blank',
            rel: 'noopener',
          },
        })
      }, */
      headEnabled: false,
    }),
    Pages({
      extensions: options.extentions,
      syncIndex: false,
      dirs: [
        { dir: 'src/pages', baseRoute: '' },
        { dir: 'content/nl', baseRoute: 'nl' },
        { dir: 'content/en', baseRoute: 'en' },
      ],
    }),
    AutoImport({
      imports: ['vue', 'vue-router', '@vueuse/head', 'vue-i18n'],
      dts: true, // generate TypeScript declaration
    }),
    Components({
      extensions: options.extentions,
      dts: true,
      include: options.include,
    }),
    VueI18n({
      runtimeOnly: true,
      compositionOnly: true,
      include: [path.resolve(__dirname, './content/*.yml')],
    }),
    ViteBlogPlugin(options),
  ]
}

export default ViteBlogFramework
