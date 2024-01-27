<script setup lang="ts">
import { RouterView } from 'vue-router'
</script>

<template>
  <RouterView />
</template>

<script lang="ts">
export default {
  mounted() {
    document.title = 'Roy Ketelaar - Frontend Developer'
    const metaDescription = document.querySelector('meta[name="description"]')
    if (metaDescription) {
      metaDescription.setAttribute(
        'content',
        'Hi there, my name is Roy Ketelaar. I am a frontend developer with a background in web design. I love learning new things, working with people and building applications that users find useful.'
      )
    } else {
      const newMetaDescription = document.createElement('meta')
      newMetaDescription.name = 'description'
      newMetaDescription.content =
        'Hi there, my name is Roy Ketelaar. I am a frontend developer with a background in web design. I love learning new things, working with people and building applications that users find useful.'
      document.head.appendChild(newMetaDescription)

      let vh = window.innerHeight * 0.01
      document.documentElement.style.setProperty('--vh', `${vh}px`)
    }
  }
}
</script>

<style>
body {
  font-family: 'Noto Serif', serif;
  min-height: 100vh; /* Fallback for browsers that do not support Custom Properties */
  min-height: calc(var(--vh, 1vh) * 100);
  position: relative;
  margin: 0;
}
</style>
