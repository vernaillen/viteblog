import { defineStore } from 'pinia'
import { i18n } from '../i18n'

export const useLocale = defineStore('localeStore', {
  state: () => ({
    lang: 'nl',
    availableLocales: ['en']
  }),
  actions: {
    setLanguage(newLang: string) {
      this.lang = newLang
      i18n.locale.value = newLang
    },
    setAvailableLocales(availableLocales: string[]) {
      this.availableLocales = availableLocales
    }
  },
})
