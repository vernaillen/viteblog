import type { Plugin } from 'vite'
import { createFilter } from '@rollup/pluginutils'
// import Pages from 'vite-plugin-pages'
// import { vueI18n } from '@intlify/vite-plugin-vue-i18n'
import { debug } from './utils'
import type { Options } from './types'

function ViteBlogPlugin(options: Options): Plugin {
  debug('loading ViteBlogPlugin')

  const filter = createFilter(
    options.include || /\.md$/,
    options.exclude,
  )

  return {
    name: 'vite-plugin-vue-markdown',
    enforce: 'pre',

    transform(raw, id) {
      debug(`transform: ${id}`)
      if (!filter(id))
        return
      try {
        return raw
      }
      catch (e: any) {
        this.error(e)
      }
    },

    /* async handleHotUpdate(ctx) {
      debug(ctx)
      if (!filter(ctx.file))
        return

      const defaultRead = ctx.read
      ctx.read = async function() {
        return 'test'
      }
    }, */
    // Pages(),
    // vueI18n(),

  }
}

export default ViteBlogPlugin
