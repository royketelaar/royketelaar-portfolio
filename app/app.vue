<template>
  <div>
    <NuxtPage />
  </div>
</template>

<script setup lang="ts">
useHead({
  title: 'Portfolio Roy Ketelaar',
  // Close to the average colour of /background.jpg, so there is no white flash.
  bodyAttrs: { class: 'bg-slate-500' },
  meta: [
    {
      name: 'description',
      content:
        'Hi there, my name is Roy Ketelaar. I am a frontend developer focused on accessibility, with a background in web design. I love learning new things, working with people and building applications that everyone can use'
    }
  ],
  link: [
    { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
    { rel: 'icon', type: 'image/png', sizes: '32x32', href: '/favicon-32.png' },
    { rel: 'icon', type: 'image/png', sizes: '192x192', href: '/icon-192.png' },
    { rel: 'apple-touch-icon', sizes: '180x180', href: '/apple-touch-icon.png' }
  ]
})
</script>
