<template>
  <ClientOnly>
    <button
      type="button"
      class="btn btn-ghost px-3"
      :aria-pressed="dark"
      :aria-label="dark ? t(copy.theme.toLight) : t(copy.theme.toDark)"
      @click="toggle"
    >
      <svg v-if="dark" viewBox="0 0 24 24" class="size-5" aria-hidden="true" focusable="false">
        <circle cx="12" cy="12" r="4" fill="none" stroke="currentColor" stroke-width="1.6" />
        <path
          d="M12 3v2.2M12 18.8V21M3 12h2.2M18.8 12H21M5.6 5.6l1.6 1.6M16.8 16.8l1.6 1.6M18.4 5.6l-1.6 1.6M7.2 16.8l-1.6 1.6"
          fill="none"
          stroke="currentColor"
          stroke-width="1.6"
          stroke-linecap="square"
        />
      </svg>
      <svg v-else viewBox="0 0 24 24" class="size-5" aria-hidden="true" focusable="false">
        <path
          d="M15.5 14.5A6.5 6.5 0 0 1 9 4.2 7 7 0 1 0 19.8 15a6.5 6.5 0 0 1-4.3-.5Z"
          fill="none"
          stroke="currentColor"
          stroke-width="1.6"
          stroke-linejoin="round"
        />
      </svg>
      <span class="hidden sm:inline">{{ dark ? t(copy.theme.light) : t(copy.theme.dark) }}</span>
    </button>
    <template #fallback>
      <span class="btn btn-ghost w-11 px-0" aria-hidden="true" />
    </template>
  </ClientOnly>
</template>

<script setup lang="ts">
const colorMode = useColorMode()
const { t, copy } = useSite()

const dark = computed(() => colorMode.value === 'dark')

const toggle = () => {
  colorMode.preference = dark.value ? 'light' : 'dark'
}
</script>
