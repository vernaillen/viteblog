<template>
  <header class="items-center justify-center mb-10">
    <h1 class="font-bold text-center text-3xl text-gray-500 md:text-5xl my-5">
      ViteBlog
    </h1>
    <h2 class="text-center text-xl text-gray-300 md:text-2xl mb-10">
      Next generation Blog Framework, using Vite, Vue, Markdown, etc
    </h2>
    <navigation />
  </header>

  <main class="flex flex-col">
    <div class="container px-10">
      <router-view />
    </div>
  </main>
</template>
