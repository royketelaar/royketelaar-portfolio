<template>
  <figure class="mx-auto w-full max-w-[22rem] lg:mx-0 lg:max-w-none">
    <div class="relative pt-3 pl-3">
      <div
        class="absolute top-0 left-0 h-[calc(100%-0.75rem)] w-[calc(100%-0.75rem)] border border-accent"
        aria-hidden="true"
      />
      <img
        src="/avatar.jpg"
        :alt="t(copy.about.portrait)"
        width="640"
        height="640"
        class="relative aspect-square w-full object-cover"
        :fetchpriority="priority ? 'high' : 'auto'"
        :loading="priority ? 'eager' : 'lazy'"
        decoding="async"
      />
    </div>
    <figcaption class="mt-4 pl-3 text-sm text-muted">{{ person.name }}</figcaption>
  </figure>
</template>

<script setup lang="ts">
import { person } from '~/data/site'

withDefaults(defineProps<{ priority?: boolean }>(), { priority: false })

const { t, copy } = useSite()
</script>
