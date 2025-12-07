<template>
  <div>
    <NuxtPage />
  </div>
</template>

<script setup lang="ts">
useHead({
  title: 'Portfolio Roy Ketelaar',
  meta: [
    {
      name: 'description',
      content:
        'Hi there, my name is Roy Ketelaar. I am a frontend developer with a background in web design. I love learning new things, working with people and building applications that users find useful'
    }
  ],
  link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }]
})
</script>
