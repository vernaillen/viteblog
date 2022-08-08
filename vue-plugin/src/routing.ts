import { Router, RouteLocationNormalizedLoaded } from 'vue-router'
import { useLocale } from './stores/lang'

const viteBlogInitRouting = (route: RouteLocationNormalizedLoaded, router: Router) => {
  console.log('init routing')

  const getLangFromPath = (path: string) => {
    if (path.length > 2) {
      const langFromPath = path.substring(1, 3)
      console.log('pathHasLang - langFromPath: '+ langFromPath)
      console.log('useLocale().availableLocales: ' + useLocale().availableLocales)
      if (Object.values(useLocale().availableLocales).indexOf(langFromPath) !== -1)
        return langFromPath
    }
    else return
  }
  const pushCorrectLangPath = (path: string) => {
    console.log('pushing correct path ' + path)
    if (getLangFromPath(path)) {
      console.log('replace lang in path: ' + `/${useLocale().lang}${path.substring(3)}`)
      router.push(`/${useLocale().lang}${path.substring(3)}`) // replace lang in path
    } else {
      console.log('prepend lang in path: ' + `/${useLocale().lang}${path}`)
      router.push(`/${useLocale().lang}${path}`) // prepend lang to path
    }
  }

  router.beforeEach((to, from, next) => {
    const urlLanguage = getLangFromPath(to.path)
    if (!from.name) {
      console.log('detected page load or refresh')
      if (urlLanguage !== useLocale().lang) {
        if (urlLanguage) {
          console.log('updating language, cause urlLanguage ' + urlLanguage + ' is not ' + useLocale().lang)
          useLocale().setLanguage(urlLanguage) // change site language to url from path
        }
      }
    }
    if (urlLanguage !== useLocale().lang) {
      console.log('pushCorrectLangPath, cause urlLanguage ' + urlLanguage + ' is not ' + useLocale().lang)
      pushCorrectLangPath(to.path)
    } else {
      console.log('do nothing')
    }
    next()
  })
}

export { viteBlogInitRouting }