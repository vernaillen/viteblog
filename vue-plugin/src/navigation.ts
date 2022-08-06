import { computed } from 'vue';
import { useLocale } from './stores/lang'
import { useRouter, RouteRecord } from 'vue-router'

// TODO add this is input param
const hideBlogPosts = true;

const checkBlogPost = (route: RouteRecord) => {
    return !hideBlogPosts || !route.path.startsWith('/' + useLocale().lang + '/blog/')
}
const langFilter = (route: RouteRecord) => {
    return route.path.startsWith('/' + useLocale().lang) && checkBlogPost(route)
}
const NavigationItems = computed(() => {
    return useRouter().getRoutes().filter(langFilter)
})

export { NavigationItems }