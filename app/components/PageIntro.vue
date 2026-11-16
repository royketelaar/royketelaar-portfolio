<template>
  <header class="max-w-3xl">
    <p class="text-sm tracking-[0.16em] text-accent uppercase">{{ kicker }}</p>
    <h1 class="mt-4 text-[clamp(2.7rem,6vw,4.8rem)] leading-[0.98] tracking-[-0.035em]">
      <slot />
    </h1>
    <p v-if="lede" class="mt-6 max-w-2xl text-lg leading-relaxed text-pretty text-muted">
      {{ lede }}
    </p>
  </header>
</template>

<script setup lang="ts">
defineProps<{ kicker: string; lede?: string }>()
</script>
