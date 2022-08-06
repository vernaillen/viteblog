import { createI18n, I18n } from 'vue-i18n'
import { ViteBlogOptions } from './types';
import messages from '@intlify/vite-plugin-vue-i18n/messages'

let i18nInstance: I18n;
export const createI18nInstance = (options: ViteBlogOptions) => {
  console.log('createI18nInstance')
  i18nInstance = createI18n({
    legacy: false,
    locale: options.defaultLocale ? options.defaultLocale : 'en',
    fallbackLocale: options.fallbackLocale ? options.fallbackLocale : 'nl',
    globalInjection: true,
    messages
  })

  return i18nInstance
}

export const getI18n = () => {
  if (i18nInstance)
   return i18nInstance.global
} 
