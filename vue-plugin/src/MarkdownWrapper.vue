<script setup lang="ts">
defineProps({
  frontmatter: {
    type: Object,
    required: true,
  },
})
</script>

<template>
  <div class="text-lg mb-11">Markdown Wrapper</div>
  <div class="container mx-auto px-4 pt-16 my-20">
    <div class="flex flex-wrap">
      <div class="w-full px-4 sm:px-6 lg:px-8 mb-10">
        <div class="prose m-auto">
          <div class="flex flex-wrap">
            <h1 class="animate-pulse">
              {{ frontmatter.title }}
            </h1>
          </div>
          <div v-if="frontmatter.desc" class="flex flex-wrap">
            <h4>
              {{ frontmatter.desc }}
            </h4>
          </div>
          <div v-if="frontmatter.subtitle" class="flex flex-wrap">
            <em>
              {{ frontmatter.subtitle }}
            </em>
          </div>
          <img v-if="frontmatter.image" :src="frontmatter.image" class="rounded-md">
          <article ref="content">
            <slot />
          </article>
        </div>
      </div>
    </div>
  </div>
</template>
