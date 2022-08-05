<script setup lang="ts">
import routes from '~pages'
</script>

<template>
    <nav class="
        relative
        w-full
        flex flex-wrap
        py-4
        pl-5
        bg-gray-100
        text-gray-500
        hover:text-gray-700
        focus:text-gray-700
        shadow-lg
        navbar navbar-expand-lg navbar-light
        ">
        <ul class="flex">
            <li class="mr-6" v-for="route, index in routes" :key="index">
                <router-link :to="route.path">{{ route.name }}</router-link>
            </li>
        </ul>
    </nav>
</template>