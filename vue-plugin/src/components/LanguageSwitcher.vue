<script setup lang="ts">
import { useI18n } from 'vue-i18n'
import { useLocale } from '../stores/lang'
import { useRoute, useRouter } from 'vue-router'
const { availableLocales, locale, t } = useI18n()
const route = useRoute()
const router = useRouter()

const setLanguage = (event: Event) => {
  const target = event.target as HTMLSelectElement
  locale.value = target.value
  useLocale().setLanguage(target.value)
  router.push(`/${target.value}/${route.path.substring(4)}`)
}
</script>

<template>
  <form style="display: flex">
    <span>{{ t('language') }}: </span>
    <select @change="setLanguage" style="background-color: transparent;">
      <option v-for="lang in availableLocales" :value="lang" :selected="locale === lang">
        {{ lang }}
      </option>
    </select>
  </form>
</template>
