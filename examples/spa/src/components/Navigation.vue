<script setup lang="ts">
const { locale, t } = useI18n()
</script>

<template>
    <ul class="flex w-full">
        <li class="mr-6">
            <router-link :to="`/${locale}`">
                {{ t('nav.home') }}
            </router-link>
        </li>
        <li class="mr-6">
            <router-link :to="`/${locale}/blog`">
                {{ t('nav.blog') }}
            </router-link>
        </li>
    </ul>
</template>

<style scoped>
    li a {
        padding: 16px 12px;
    }
    .router-link-active {
        border-bottom: 2px solid #BFAC22;
    }
</style>