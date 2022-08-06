import { Router, RouteLocationNormalizedLoaded } from 'vue-router'
import { useLocale } from './stores/lang'

const viteBlogInitRouting = (route: RouteLocationNormalizedLoaded, router: Router) => {

  const pathHasLang = (path: string) => {
    return path.startsWith('/nl/') || path.startsWith('/en/')
  }
  const pushCorrectLangPath = (path: string) => {
    if (pathHasLang(path))
      router.push(`/${useLocale().lang}${path.substring(3)}`) // replace lang in path
    else
      router.push(`/${useLocale().lang}${path}`) // prepend lang to path
  }
  const urlLanguage = route.path.substring(1, 3)
  if (urlLanguage !== useLocale().lang) {
    if (pathHasLang(route.path)) {
      console.log('change site language to url from path')
      useLocale().lang = urlLanguage // change site language to url from path
    }
    pushCorrectLangPath(route.path)
  }

  router.beforeEach((to, from, next) => {
    const langFromRoute = to.path.substring(1, 3)
    if (langFromRoute !== useLocale().lang)
      pushCorrectLangPath(to.path)
    next()
  })
}

export { viteBlogInitRouting }