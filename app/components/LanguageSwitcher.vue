<template>
  <nav :aria-label="t(copy.lang.label)" class="relative text-sm">
    <details ref="details" class="group relative">
      <summary
        :aria-label="`${t(copy.lang.label)}: ${current?.name}`"
        class="flex min-h-11 cursor-pointer list-none items-center gap-2 border border-line-strong bg-panel py-1 pr-3 pl-2"
      >
        <img :src="`/flags/${locale}.svg`" alt="" width="22" height="15" :class="flagClass" />
        <span>{{ current?.name }}</span>
        <svg
          viewBox="0 0 16 16"
          class="size-4 transition-transform group-open:rotate-180"
          aria-hidden="true"
          focusable="false"
        >
          <path
            d="M4 6l4 4 4-4"
            fill="none"
            stroke="currentColor"
            stroke-width="1.5"
            stroke-linecap="square"
          />
        </svg>
      </summary>
      <ul
        class="absolute right-0 z-40 mt-1 min-w-44 border border-line-strong bg-panel p-1 shadow-sm"
      >
        <li v-for="item in locales" :key="item.code">
          <NuxtLink
            :to="switchLocalePath(item.code)"
            :lang="item.code"
            :hreflang="item.code"
            :aria-current="item.code === locale ? 'true' : undefined"
            class="flex min-h-11 items-center gap-2 px-2.5"
            :class="item.code === locale ? 'bg-soft font-bold text-accent' : 'hover:bg-soft'"
          >
            <img
              :src="`/flags/${item.code}.svg`"
              alt=""
              width="22"
              height="15"
              :class="flagClass"
            />
            <span>{{ item.name }}</span>
          </NuxtLink>
        </li>
      </ul>
    </details>
  </nav>
</template>

<script setup lang="ts">
const { locale, locales } = useI18n()
const { t, copy } = useSite()
const switchLocalePath = useSwitchLocalePath()
const route = useRoute()

const flagClass = 'h-4 w-auto'
const details = useTemplateRef<HTMLDetailsElement>('details')
const current = computed(() => locales.value.find((item) => item.code === locale.value))

const close = () => {
  if (details.value) details.value.open = false
}

const onKeydown = (event: KeyboardEvent) => {
  if (event.key !== 'Escape' || !details.value?.open) return
  close()
  details.value.querySelector('summary')?.focus()
}

const onPointerdown = (event: PointerEvent) => {
  if (details.value?.open && !details.value.contains(event.target as Node)) close()
}

watch(() => route.fullPath, close)

onMounted(() => {
  document.addEventListener('keydown', onKeydown)
  document.addEventListener('pointerdown', onPointerdown)
})

onBeforeUnmount(() => {
  document.removeEventListener('keydown', onKeydown)
  document.removeEventListener('pointerdown', onPointerdown)
})
</script>

<style scoped>
summary::-webkit-details-marker {
  display: none;
}
</style>
