<template>
  <nav :aria-label="t('lang.label')" class="absolute right-4 top-4 z-10 md:right-8 md:top-8">
    <details ref="details" class="group relative text-sm text-stone-950">
      <summary
        :aria-label="`${t('lang.label')}: ${current?.name}`"
        class="flex min-h-10 cursor-pointer list-none items-center gap-2 rounded-full bg-stone-50/85 py-1 pl-2 pr-2.5 font-medium shadow-sm backdrop-blur-sm hover:bg-stone-50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-900"
      >
        <img :src="`/flags/${locale}.svg`" alt="" width="22" height="15" :class="flagClass" />
        <span>{{ current?.name }}</span>
        <Icon
          name="uil:angle-down"
          class="size-4 text-stone-600 transition-transform group-open:rotate-180"
          aria-hidden="true"
        />
      </summary>
      <ul
        class="absolute right-0 top-full mt-1.5 min-w-48 rounded-xl bg-stone-50 p-1 shadow-lg ring-1 ring-stone-900/10"
      >
        <li v-for="item in locales" :key="item.code">
          <NuxtLink
            :to="switchLocalePath(item.code)"
            :lang="item.code"
            :hreflang="item.code"
            :aria-current="item.code === locale ? 'true' : undefined"
            class="flex min-h-8 items-center gap-2 rounded-lg px-2.5 py-1.5 hover:bg-stone-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-900"
            :class="item.code === locale ? 'font-semibold text-red-900' : ''"
          >
            <img
              :src="`/flags/${item.code}.svg`"
              alt=""
              width="22"
              height="15"
              :class="flagClass"
            />
            <span>{{ item.name }}</span>
            <Icon
              v-if="item.code === locale"
              name="uil:check"
              class="ml-auto size-4"
              aria-hidden="true"
            />
          </NuxtLink>
        </li>
      </ul>
    </details>
  </nav>
</template>

<script setup lang="ts">
const { locale, locales, t } = useI18n()
const switchLocalePath = useSwitchLocalePath()
const route = useRoute()

const flagClass = 'h-4 w-auto rounded-sm ring-1 ring-stone-900/15'
const details = useTemplateRef<HTMLDetailsElement>('details')
const current = computed(() => locales.value.find((item) => item.code === locale.value))

const close = () => {
  if (details.value) details.value.open = false
}

// The disclosure works without JS; these handlers only add Escape and click-outside.
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
/* Older Safari draws its own marker despite `list-none`. */
summary::-webkit-details-marker {
  display: none;
}
</style>
