<script setup lang="ts">
import { viteBlogInitRouting } from '@viteblog/vue-plugin'
viteBlogInitRouting(useRoute(), useRouter())
const { t } = useI18n()
</script>

<template>
  <header class="items-center justify-center w-full mb-10">
    <h1 class="font-bold text-center text-3xl text-gray-500 md:text-5xl my-5">
      <router-link to="/">{{ t('website.title')}}</router-link>
    </h1>
    <h2 class="text-center text-xl text-gray-300 md:text-2xl mb-10">
      {{ t('website.description')}}
    </h2>

    <nav class="
        relative
        flex 
        py-4
        pl-5
        bg-gray-100
        text-gray-500
        hover:text-gray-700
        focus:text-gray-700
        shadow-lg
        navbar navbar-expand-lg navbar-light
        justify-between
        ">
      <navigation />
      <div class="mr-12 max-w-full">
        <language-switcher />
      </div>
    </nav>
  </header>

  <main class="flex flex-col">
    <div class="container px-10">
      <router-view />
    </div>
  </main>
</template>
