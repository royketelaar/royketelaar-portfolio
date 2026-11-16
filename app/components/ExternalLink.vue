<template>
  <a :href="href" class="text-link" target="_blank" rel="noopener noreferrer">
    <slot />
    <span aria-hidden="true"> ↗</span>
    <span class="sr-only"> ({{ t(copy.project.newTab) }})</span>
  </a>
</template>

<script setup lang="ts">
defineProps<{ href: string }>()

const { t, copy } = useSite()
</script>
