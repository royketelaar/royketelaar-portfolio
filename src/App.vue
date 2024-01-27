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
    }
  }
}
</script>

<style>
body {
  font-family: 'Noto Serif', serif;
}
</style>
