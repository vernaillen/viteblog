import { defineStore } from 'pinia'
import { getI18n } from '../i18n'

export const useLocale = defineStore('localeStore', {
  state: () => ({
    lang: 'nl',
  }),
  actions: {
    setLanguage(newLang: string) {
      const i18n = getI18n()
      if (i18n) i18n.locale = newLang
      this.lang = newLang
    },
  },
})
