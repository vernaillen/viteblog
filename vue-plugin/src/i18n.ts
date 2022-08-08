import { createI18n, I18n } from 'vue-i18n'
import messages from '@intlify/vite-plugin-vue-i18n/messages'

const i18nInstance = createI18n({
  legacy: false,
  locale: 'en',
  globalInjection: true,
  messages
})
const i18n = i18nInstance.global

export { i18n, i18nInstance }