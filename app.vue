<script setup lang="ts">
useHead({
  title: 'Eosky Agency',
  link: [
    {
      rel: 'icon', type: 'image/png', href: '/nuxt.png',
    },
  ],
})
</script>

<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>

<style>
html, body , #__nuxt{
  margin: 0;
  padding: 0;
}

html.dark {

}
</style>
