<template>
  <nav
    :aria-label="t('lang.label')"
    class="absolute right-4 top-4 z-10 rounded-full bg-stone-50/85 p-1 text-sm shadow-sm backdrop-blur-sm md:right-8 md:top-8"
  >
    <ul class="flex gap-1">
      <li v-for="item in locales" :key="item.code">
        <NuxtLink
          :to="switchLocalePath(item.code)"
          :lang="item.code"
          :hreflang="item.code"
          :aria-current="item.code === locale ? 'true' : undefined"
          class="inline-flex min-h-8 items-center rounded-full px-2.5 py-1 text-stone-950 transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-900"
          :class="
            item.code === locale ? 'bg-red-900 font-semibold text-white' : 'hover:bg-stone-200/90'
          "
        >
          {{ item.name }}
        </NuxtLink>
      </li>
    </ul>
  </nav>
</template>

<script setup lang="ts">
const { locale, locales, t } = useI18n()
const switchLocalePath = useSwitchLocalePath()
</script>
